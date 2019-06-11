## ElectronRPC Server Controllers

### What is that?

Decorators and functions which allows to create controller classes with methods as actions that handle requests.

**WARNING!**

Package requires [Metadata Reflection API polyfill](https://www.npmjs.com/package/reflect-metadata).

You should import this package at application entry point:

```typescript
import 'reflect-metadata';
```

```javascript
require('reflect-metadata');
```

Or add package at entry point in bundler config (Webpack, for example):

```javascript
module.exports = {
    // ...
    // other configuration
    // ...
    entry: ['reflect-metadata', './src/index.js'],
};
```

### Installation

```bash
# By NPM
npm install reflect-metadata electron-rpc-server-controllers --save
# Or by Yarn
yarn add reflect-metadata electron-rpc-server-controllers --save
```
