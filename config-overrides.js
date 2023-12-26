

const {override, fixBabelImports, addLessLoader, overrideDevServer, watchAll} = require('customize-cra')
const { name } = require('./package.json');
console.log(name)
 


module.exports = {

  'webpack': override(
    (config) => {
      config.output = config.output || {}
      config.output.library =  `${name}-[name]`;
      config.output.libraryTarget = 'umd'
      config.output.chunkLoadingGlobal = `webpackJsonp_${name}`
      // config.output.jsonpFunction = `webpackJsonp_${name}`
      return config
    })

  // devServer: (configFunction) => {
  //   return function (proxy, allowedHost) {
  //     const config = configFunction(proxy, allowedHost);
  //     config.open = false;
  //     config.hot = false;
  //     config.headers = {
  //       'Access-Control-Allow-Origin': '*',
  //     };
  //     // Return your customised Webpack Development Server config.
  //     return config;
  //   };
  // },
};
