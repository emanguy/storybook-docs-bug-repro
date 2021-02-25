const path = require('path');
const addons = [
  '@storybook/addon-actions',
  '@storybook/addon-links',
  '@storybook/addon-notes',
  '@storybook/addon-storysource',
  '@storybook/addon-knobs'
];

if (!process.env.STORYBOOK_CI) {
  addons.push('@storybook/addon-docs');
}

module.exports = {
  stories: ['../src/**/*.stories.ts'],
  addons: addons,
  webpackFinal: async (config) => {
    // Modify the default webpack config to respect the aliases we defined @ the root tsconfig.json
    // This was necessary in the original repo but these directories don't exist here
    //config.resolve.alias['core'] = path.join(__dirname, '../src/app/core');
    //config.resolve.alias['shared'] = path.join(__dirname, '../src/app/shared');
    //config.resolve.alias['modal'] = path.join(__dirname, '../src/app/modal');
    //config.resolve.alias['form'] = path.join(__dirname, '../src/app/form');
    //config.resolve.alias['environment'] = path.join(__dirname, '../src/environment/environment.ts');
    //config.resolve.alias['asset'] = path.join(__dirname, '../src/asset');

    // Add the storysource loader
    config.module.rules.push({
      test: /\.stories\.tsx?$/,
      loaders: [
        {
          loader: require.resolve('@storybook/source-loader'),
          options: { parser: 'typescript' },
        },
      ],
      enforce: 'pre',
    });

    config.optimization = {
      // Uncommenting this should make everything work
      // minimize: false,
      splitChunks: {
        chunks: "all",
        minSize: 30 * 1024, // 30KB
        maxSize: 1024 * 1024, // 1MB
      }
    };

    return config;
  }
}
