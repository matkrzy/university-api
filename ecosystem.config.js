module.exports = {
  apps: [
    {
      name: 'api',
      script: 'src/services/api/index.js',
      watch: ['src'],
      ignore_watch: ['data', 'data/**/*', 'node_modules'],
    },
  ],
};
