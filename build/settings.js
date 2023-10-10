import esbuildPluginTsc from 'esbuild-plugin-tsc';

export function createBuildSettings(options) {
  return {
    entryPoints: ['src/index.ts'],
    outfile: 'dist/bundle.js',
    bundle: true,
    platform: 'node',
    plugins: [
      esbuildPluginTsc({
        force: true
      }),
    ],
    ...options
  };
}