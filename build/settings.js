import esbuildPluginTsc from 'esbuild-plugin-tsc';

export function createBuildSettings(options) {
  return {
    entryPoints: ['src/index.ts'],
    outfile: 'bundle/index.js',
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