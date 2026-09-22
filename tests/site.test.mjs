import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { JSDOM } from 'jsdom';

const html = readFileSync(new URL('../index.html', import.meta.url), 'utf8');
const script = readFileSync(new URL('../assets/site.js', import.meta.url), 'utf8');
function loadSite(route = 'about') {
  const dom = new JSDOM(html, { url: `http://localhost/${route}`, runScripts: 'outside-only', pretendToBeVisual: true });
  const { window } = dom;
  window.HTMLElement.prototype.scrollIntoView = () => {};
  window.scrollTo = (_x, y) => { window.scrollY = y; };
  window.requestAnimationFrame = callback => { callback(); return 1; };
  window.eval(script);
  return dom;
}
const key = (window, target, value) => {
  const event = new window.KeyboardEvent('keydown', { key: value, bubbles: true, cancelable: true });
  target.dispatchEvent(event);
  return event;
};

for (const route of ['about', 'projects', 'experience', 'epps', 'grad', 'earm']) {
  test(`direct route /${route} renders one screen`, t => {
    const dom = loadSite(route); t.after(() => dom.window.close());
    const doc = dom.window.document;
    const screens = ['ak-about', 'ak-projects', 'ak-experience', 'ak-case'].filter(id => !doc.getElementById(id).hidden);
    assert.deepEqual(screens, [route === 'about' || route === 'projects' || route === 'experience' ? `ak-${route}` : 'ak-case']);
    if (['epps', 'grad', 'earm'].includes(route)) assert.ok(doc.querySelector('#ak-thumbs button[aria-pressed="true"]'));
  });
}
test('an unknown path recovers to a consistent home route', t => {
  const dom = loadSite('missing-page'); t.after(() => dom.window.close());
  assert.equal(dom.window.location.pathname, '/about');
  assert.equal(dom.window.document.getElementById('ak-about').hidden, false);
  assert.match(dom.window.document.title, /^Обо мне/);
});
test('keyboard navigation moves focus out of the hidden project list', t => {
  const dom = loadSite('projects'); t.after(() => dom.window.close());
  const { window } = dom; const doc = window.document;
  const row = doc.querySelector('.ak-project-row'); row.focus(); key(window, row, 'Enter');
  assert.equal(window.location.pathname, '/epps');
  assert.equal(doc.activeElement, doc.querySelector('#ak-case-name'));
});
test('lightbox traps Tab, isolates the background and restores focus and scroll', t => {
  const dom = loadSite('epps'); t.after(() => dom.window.close());
  const { window } = dom; const doc = window.document; const stage = doc.querySelector('#ak-stage');
  window.scrollY = 620; stage.focus(); stage.click();
  assert.equal(stage.getAttribute('aria-pressed'), 'true');
  assert.equal(doc.querySelector('header').inert, true);
  assert.equal(key(window, stage, 'Tab').defaultPrevented, true);
  key(window, stage, 'Escape');
  assert.equal(stage.getAttribute('aria-pressed'), 'false');
  assert.equal(doc.activeElement, stage);
  assert.equal(Boolean(doc.querySelector('header').inert), false);
  assert.equal(window.scrollY, 620);
  assert.equal(doc.body.style.top, '');
});
test('gallery thumbnails select slides and wrap around without scroll controls', t => {
  const dom = loadSite('epps'); t.after(() => dom.window.close());
  const { window } = dom; const doc = window.document; const stage = doc.querySelector('#ak-stage');
  assert.equal(doc.querySelectorAll('#ak-thumbs button').length, 11);
  assert.match(doc.querySelector('#ak-thumbs img').src, /gallery\/epps\/thumbs\/epps-02.webp$/);
  assert.match(doc.querySelector('#ak-slide').src, /gallery\/epps\/epps-02.webp$/);
  assert.equal(doc.querySelector('.ak-caption').hidden, true);
  assert.equal(doc.querySelector('#ak-thumbs-prev'), null);
  assert.equal(doc.querySelector('#ak-thumbs-next'), null);
  assert.equal(doc.querySelector('#ak-slide-title').textContent, 'Заголовок');
  assert.equal(doc.querySelector('#ak-slide-copy').textContent, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.');
  doc.querySelector('[data-index="1"]').click();
  assert.match(doc.querySelector('#ak-slide').src, /epps-03.webp$/);
  key(window, stage, 'ArrowLeft'); key(window, stage, 'ArrowLeft');
  assert.match(doc.querySelector('#ak-slide').src, /epps-17.webp$/);
  assert.equal(doc.querySelectorAll('#ak-thumbs [aria-pressed="true"]').length, 1);
});

test('mouse wheel over the preview changes slides with animation', t => {
  const dom = loadSite('epps'); t.after(() => dom.window.close());
  const { window } = dom; const doc = window.document; const stage = doc.querySelector('#ak-stage');
  const wheel = new window.WheelEvent('wheel', { deltaY: 120, cancelable: true });
  stage.dispatchEvent(wheel);
  assert.equal(wheel.defaultPrevented, true);
  assert.match(doc.querySelector('#ak-slide').src, /epps-03.webp$/);
  assert.equal(doc.querySelector('#ak-slide').classList.contains('ak-slide-shift'), true);
});

test('expanded gallery changes slides with the mouse wheel', t => {
  const dom = loadSite('epps'); t.after(() => dom.window.close());
  const { window } = dom; const doc = window.document; const stage = doc.querySelector('#ak-stage');
  stage.click();
  const wheel = new window.WheelEvent('wheel', { deltaY: 120, cancelable: true });
  stage.dispatchEvent(wheel);
  assert.equal(wheel.defaultPrevented, true);
  assert.match(doc.querySelector('#ak-slide').src, /epps-03.webp$/);
});

test('Ctrl plus mouse wheel zooms the expanded slide and resets on slide change', t => {
  const dom = loadSite('epps'); t.after(() => dom.window.close());
  const { window } = dom; const doc = window.document; const stage = doc.querySelector('#ak-stage'); const image = doc.querySelector('#ak-slide');
  stage.click();
  const zoom = new window.WheelEvent('wheel', { deltaY: -120, ctrlKey: true, clientX: 100, clientY: 100, cancelable: true });
  stage.dispatchEvent(zoom);
  assert.equal(zoom.defaultPrevented, true);
  assert.equal(image.style.getPropertyValue('--ak-slide-zoom'), '1.25');
  key(window, stage, 'ArrowRight');
  assert.equal(image.style.getPropertyValue('--ak-slide-zoom'), '1');
});
test('browser history selects the requested screen', t => {
  const dom = loadSite('epps'); t.after(() => dom.window.close());
  const { window } = dom;
  window.history.replaceState(null, '', '/experience');
  window.dispatchEvent(new window.PopStateEvent('popstate'));
  assert.equal(window.document.querySelector('#ak-experience').hidden, false);
  window.history.replaceState(null, '', '/grad');
  window.dispatchEvent(new window.PopStateEvent('popstate'));
  assert.equal(window.document.querySelector('#ak-case-name').textContent, 'ГРАД');
});
