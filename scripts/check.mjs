import assert from 'node:assert/strict';
import { readFile, readdir } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { JSDOM } from 'jsdom';

const root = fileURLToPath(new URL('../', import.meta.url));
const html = await readFile(path.join(root, 'index.html'), 'utf8');
const js = await readFile(path.join(root, 'assets/site.js'), 'utf8');
const css = await readFile(path.join(root, 'assets/site.css'), 'utf8');
const media = JSON.parse(js.match(/const media=(\{[^\n]*\});/)[1]);
const references = new Set(Object.values(media));
for (const filename of ['index.html', '404.html']) {
  const dom = new JSDOM(await readFile(path.join(root, filename), 'utf8'));
  const doc = dom.window.document;
  assert.equal(doc.documentElement.lang, 'ru', filename);
  assert.ok(doc.querySelector('meta[name="viewport"]'), `Missing viewport: ${filename}`);
  const ids = [...doc.querySelectorAll('[id]')].map(element => element.id);
  assert.equal(new Set(ids).size, ids.length, `Duplicate ids: ${filename}`);
  for (const element of doc.querySelectorAll('[src], [href]')) {
    const url = element.getAttribute('src') ?? element.getAttribute('href');
    if (url && !/^(https?:|mailto:|tel:|#)/.test(url)) references.add(url.replace(/^\//, '').split(/[?#]/)[0] || 'index.html');
  }
  for (const image of doc.querySelectorAll('img')) assert.ok(image.hasAttribute('alt'), `Missing image alt: ${filename}`);
  dom.window.close();
}
for (const [, url] of css.matchAll(/url\(['"]?([^)'"\s]+)['"]?\)/g)) {
  if (!/^(https?:|data:)/.test(url)) references.add(path.posix.normalize('assets/' + url));
}
for (const relative of references) {
  let directory = root;
  assert.ok(!relative.includes('..') && !relative.includes('\\'), `Non-portable asset: ${relative}`);
  for (const part of relative.split('/')) {
    assert.ok((await readdir(directory)).includes(part), `Missing or wrong-case asset: ${relative}`);
    directory = path.join(directory, part);
  }
  await readFile(directory);
}
assert.equal((await readFile(path.join(root, 'CNAME'), 'utf8')).trim(), 'www.korepanov.art');
assert.match(html, /https:\/\/www\.korepanov\.art\//);
for (const [name, content] of Object.entries({ 'index.html': html, 'assets/site.js': js, 'assets/site.css': css })) {
  assert.ok(!/(?:file:\/\/|(?:^|[\s"'(])[A-Z]:[\\/]|\/mnt\/data\/|\.chatgpt-projects)/i.test(content), `Old environment dependency: ${name}`);
  assert.ok(!/(?:-----BEGIN (?:RSA |EC |OPENSSH )?PRIVATE KEY-----|gh[pousr]_[A-Za-z0-9]{30,}|github_pat_[A-Za-z0-9_]{30,}|AKIA[0-9A-Z]{16})/.test(content), `Possible credential in ${name}; value withheld`);
}
console.log(`PASS: ${references.size} local resources, exact path casing, HTML ids/alt/viewport, domain and portable runtime paths.`);
