## Серверные контроллеры ElectronRPC

### Что это?

Декораторы и функции, которые позволяют создавать классы-контроллеры с методами-действиями, обрабатывающими запросы.

**ВНИМАНИЕ!**

Пакет требует [полифилл для метаданных Reflection API](https://www.npmjs.com/package/reflect-metadata).

Вам следует импортировать этот пакет в точке входа в приложение:

```typescript
import 'reflect-metadata';
```

```javascript
require('reflect-metadata');
```

Или добавить пакет в точку входа в конфигурации бандлера (например, Webpack):

```javascript
module.exports = {
    // ...
    // остальная конфигурация
    // ...
    entry: ['reflect-metadata', './src/index.js'],
}
```

### Установка

```bash
# By NPM
npm install reflect-metadata electron-rpc-server-controllers --save
# Or by Yarn
yarn add reflect-metadata electron-rpc-server-controllers --save
```
