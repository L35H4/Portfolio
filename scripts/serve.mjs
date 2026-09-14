import http from 'node:http';
import { readFile, realpath } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = fileURLToPath(new URL('../', import.meta.url));
const publicFiles = new Set(['index.html', '404.html', 'resume.pdf', 'robots.txt', 'sitemap.xml', 'CNAME', '.nojekyll']);
const types = { '.html': 'text/html; charset=utf-8', '.css': 'text/css; charset=utf-8', '.js': 'text/javascript; charset=utf-8', '.svg': 'image/svg+xml', '.png': 'image/png', '.webp': 'image/webp', '.pdf': 'application/pdf', '.xml': 'application/xml; charset=utf-8', '.txt': 'text/plain; charset=utf-8' };

// Serve the existing production files, never the repository or private context.
export function createPreviewServer(directory = root) {
  return http.createServer(async (request, response) => {
    response.setHeader('X-Content-Type-Options', 'nosniff');
    response.setHeader('Cache-Control', 'no-store');
    response.setHeader('X-Portfolio-Preview', '1');
    if (!['GET', 'HEAD'].includes(request.method)) {
      response.writeHead(405, { Allow: 'GET, HEAD' });
      response.end();
      return;
    }
    let relative;
    try {
      relative = decodeURIComponent(new URL(request.url, 'http://localhost').pathname).slice(1) || 'index.html';
    } catch {
      response.writeHead(400);
      response.end('Bad request');
      return;
    }
    const allowed = publicFiles.has(relative) || (/^assets\//.test(relative) && !relative.split('/').some(part => part.startsWith('.')));
    const candidate = path.resolve(directory, relative);
    try {
      if (!allowed || relative.includes('\\') || !candidate.startsWith(path.resolve(directory) + path.sep)) throw new Error('Not public');
      const actual = await realpath(candidate);
      if (!actual.startsWith(await realpath(directory) + path.sep)) throw new Error('Outside root');
      const body = await readFile(actual);
      response.writeHead(200, { 'Content-Type': types[path.extname(actual)] || 'application/octet-stream', 'Content-Length': body.length });
      response.end(request.method === 'HEAD' ? undefined : body);
    } catch {
      const body = await readFile(path.join(directory, '404.html')).catch(() => Buffer.from('Not found'));
      response.writeHead(404, { 'Content-Type': 'text/html; charset=utf-8' });
      response.end(request.method === 'HEAD' ? undefined : body);
    }
  });
}

if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  const port = Number(process.argv[2] || 8767);
  if (!Number.isInteger(port) || port < 1 || port > 65535) throw new Error('Port must be between 1 and 65535');
  const server = createPreviewServer();
  server.on('error', error => { console.error(`Preview could not start: ${error.message}`); process.exitCode = 1; });
  server.listen(port, '127.0.0.1', () => console.log(`Portfolio: http://127.0.0.1:${port}/ (Ctrl+C to stop)`));
}
