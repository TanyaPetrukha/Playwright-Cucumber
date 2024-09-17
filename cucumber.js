module.exports = {
  default: {
    requireModule: ['ts-node/register'], 
    require: ['world.ts', 'hooks.ts', 'features/**/*.ts'],
    format: ['progress'],
    formatOptions: {
      snippetInterface: "async-await",
    },
    worldParameters: {
      device: "Desktop Chrome",
    },
  },
};
