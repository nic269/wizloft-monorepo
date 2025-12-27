import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/client.ts'],
  format: ['cjs'],
  dts: false, // We'll handle types differently
  clean: true,
  skipNodeModulesBundle: true,
});
