import { readFile } from 'node:fs/promises';
import { WASI } from 'wasi';
import { argv, env } from 'node:process';

const wasi = new WASI({
  version: 'preview1',
  args: argv,
  env,
  preopens: {
    '/': `${env['GITHUB_WORKSPACE']}`
  }
});

const wasm = await WebAssembly.compile(
  await readFile(new URL('./dotnet-wasi-action.wasm', import.meta.url)),
);
const instance = await WebAssembly.instantiate(wasm, wasi.getImportObject());

wasi.start(instance);