const { composePlugins, withNx } = require('@nx/webpack');
const { withReact } = require('@nx/react');

// Nx plugins for webpack.
module.exports = composePlugins(withNx(), withReact(), async (config) => {
  // Update the webpack config as needed here.
  // e.g. `config.plugins.push(new MyPlugin())`
  await new Promise((res) => {
    setTimeout(res, 1000);
  });
  console.log(
    'Webpack config:',
    config.plugins.map((p) => p.constructor.name)
  );
  return config;
});
