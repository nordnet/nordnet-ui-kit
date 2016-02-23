const fs = require('fs');
const path = require('path');
const cp = require('child_process');

require.extensions['.jsx'] = function compile(module, filename) {
  // Path to webpack binaries
  const webpackBin = (
    path.join(process.cwd(), 'node_modules', '.bin', 'webpack')
  );

  // Path to webpack config for test builds
  const buildConfig = (
    path.join(process.cwd(), 'webpack.config.babel.js')
  );

  // Temp directory for test builds
  const buildDir = path.join(process.cwd(), 'tmp');

  // Filename for test build
  const buildFileName = path.parse(filename).base;

  try {
    // Check if temp directory exists
    fs.accessSync(buildDir, fs.W_OK);
  } catch (err) {
    // If doesn't - create it
    fs.mkdirSync(buildDir);
  }

  // Compiling build synchronously using `child_process.spawnSync`
  const compiledBuild = cp.spawnSync(webpackBin, [
    filename,
    '--output-path', buildDir,
    '--output-filename', buildFileName,
    '--config', buildConfig,
    '--type', 'bundle',
  ]);

  // If something went wrong — throw
  if (compiledBuild.error) {
    throw new Error(compiledBuild.error);
  }

  // Path to compiled build
  const buildPath = path.join(buildDir, buildFileName);

  try {
    // Check if build exists
    fs.accessSync(buildPath, fs.F_OK);
  } catch (err) {
    // Throw if it doesn't
    throw new Error(err);
  }

  // Get build contents
  const build = fs.readFileSync(buildPath, 'utf8');

  // Clean up
  cp.execSync(`rm ${buildPath}`);

  // Pass build to mocha
  return module._compile(build, filename);
};
