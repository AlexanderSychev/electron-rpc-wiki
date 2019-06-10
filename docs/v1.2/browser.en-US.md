## Render process (browser) usage

### Basics

For render process (Chromium browser instance) you can use browser bundles, which provides their components (except interfaces and types) as fields of global variable `ElectronRPC` (`window.ElectronRPC`).

### Bundles

Each package has client-side JS-bundle at subdirectory `lib/`, which calls `<package-name>.min.js`. For example, package ["electron-rpc-client"](#/api/electron-rpc-client), installed at your's `node_modules` directory, has client-side bundle JS-bundle `electron-rpc-client.min.js` at `node_modules/electron-rpc-client/lib` directory.

### Using with Webpack

You can add needed ElectronRPC package at `externals` paramters of Webpack configuration file and module importing will be replaced to a call of global variable:

```javascript
module.exports = {
    // ...
    // Other configuration parameters
    // ...
    externals: {
        // ...
        // Other external dependencies
        // ...
        'electron-rpc-client': 'ElectronRPC',
    },
};
```
