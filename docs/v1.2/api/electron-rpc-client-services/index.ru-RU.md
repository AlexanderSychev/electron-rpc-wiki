# Что это?

Декораторы и функции, позволяющие создавать классы-сервисы для клиента, с методами, кооторые вызывают удаленные процедуры.

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
};
```

# Установка

```bash
# Через NPM
npm install reflect-metadata electron-rpc-client-services --save
# Или через Yarn
yarn add reflect-metadata electron-rpc-client-services --save
```
