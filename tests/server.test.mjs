import test from 'node:test';
import assert from 'node:assert/strict';
import { once } from 'node:events';
import { readFile } from 'node:fs/promises';
import { createPreviewServer } from '../scripts/serve.mjs';

test('clean preview serves production assets and protects local files', async t => {
  const server = createPreviewServer(); server.listen(0, '127.0.0.1'); await once(server, 'listening');
  t.after(() => server.close());
  const base = `http://127.0.0.1:${server.address().port}`;
  const home = await fetch(base);
  assert.equal(home.status, 200);
  assert.equal(await home.text(), await readFile(new URL('../index.html', import.meta.url), 'utf8'));
  for (const asset of ['/assets/site.css', '/assets/site.js', '/assets/%D0%95%D0%90%D0%A0%D0%9C_logo.svg', '/resume.pdf']) {
    const response = await fetch(base + asset); assert.equal(response.status, 200, asset);
  }
  for (const privatePath of ['/.git/config', '/.local-context/conversations/main.md', '/PROJECT_CONTEXT.md', '/package.json', '/assets/%2e%2e/.git/config', '/missing-page']) {
    const response = await fetch(base + privatePath); assert.equal(response.status, 404, privatePath);
    assert.match(await response.text(), /Страница не найдена/);
  }
  assert.equal((await fetch(base, { method: 'POST' })).status, 405);
  const head = await fetch(base + '/assets/site.css', { method: 'HEAD' });
  assert.equal(head.status, 200); assert.equal(await head.text(), '');
  assert.match(head.headers.get('content-type'), /text\/css/);
});
