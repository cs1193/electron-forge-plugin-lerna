module.exports = {
  sourceMaps: 'inline',
  plugins: [
    '@babel/plugin-proposal-class-properties',
    'source-map-support',
  ],
  presets: [
    ['@babel/preset-env', {
      targets: {
        node: '10',
      },
    }],
    ['@babel/preset-typescript'],
  ],
};
