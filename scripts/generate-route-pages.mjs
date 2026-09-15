import { mkdir, readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = fileURLToPath(new URL('../', import.meta.url));
const source = await readFile(path.join(root, 'index.html'), 'utf8');
const routes = {
  about: 'Обо мне',
  projects: 'Проекты',
  experience: 'Опыт',
  epps: 'ЕППС',
  grad: 'ГРАД',
  earm: 'ЕАРМ'
};

for (const [route, title] of Object.entries(routes)) {
  const url = `https://www.korepanov.art/${route}`;
  const html = source
    .replace(/<title>[^<]*<\/title>/, `<title>${title} - Алексей Корепанов</title>`)
    .replace(/<link rel="canonical" href="[^"]*">/, `<link rel="canonical" href="${url}">`)
    .replace(/<meta property="og:url" content="[^"]*">/, `<meta property="og:url" content="${url}">`);
  const directory = path.join(root, route);
  await mkdir(directory, { recursive: true });
  await writeFile(path.join(directory, 'index.html'), html);
}

console.log(`Generated ${Object.keys(routes).length} clean route pages.`);
