import esbuild from 'esbuild';

esbuild
  .build({
    platform: 'node',
    entryPoints: ['./actions/generic/index.jsx'],
    bundle: true,
    minify: true,
    outfile: './dist/application/actions/adobeio-samples-react-ssr/generic-temp/index.js'
  })
  .then(() => console.log('Action built successfully'))
  .catch((error) => console.error('Action build failed', error));
