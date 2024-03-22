const path = require('path');
const { createConfig } = require('@openedx/frontend-build');

const config = createConfig('webpack-dev');

config.externals = {
  react: 'React',
  'react-dom': 'ReactDOM',
  '@edx/frontend-platform': 'FrontendPlatform',
  '@edx/frontend-platform/config': 'FrontendPlatformConfig',
};

config.entry = {
  child: path.resolve(process.cwd(), './src/index'),
};

config.devServer.hot = false;
config.devServer.liveReload = true;
config.devServer.allowedHosts = 'all';
config.devServer.headers = {
  'Access-Control-Allow-Origin': '*',
};

config.devServer.client = {
  webSocketURL: 'ws://0.0.0.0:8081/ws',
};

module.exports = config;
