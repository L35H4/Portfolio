import test from 'node:test';
import assert from 'node:assert/strict';
import { readdir, readFile } from 'node:fs/promises';

test('PowerShell entry points preserve Cyrillic in Windows PowerShell 5.1', async () => {
  const directory = new URL('../scripts/', import.meta.url);
  for (const name of (await readdir(directory)).filter(name => name.endsWith('.ps1'))) {
    const bytes = await readFile(new URL(name, directory));
    if (/[^\x00-\x7f]/.test(bytes.toString('utf8').replace(/^\ufeff/, ''))) {
      assert.equal(bytes.subarray(0, 3).toString('hex'), 'efbbbf', `${name}: UTF-8 BOM required by Windows PowerShell 5.1`);
    }
  }
});
