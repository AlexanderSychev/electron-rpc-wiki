## Типы даных ElectronRPC

### Что это?

Набор общих типов данных для остальных пакетов ElectronRPC.

### Установка

```bash
# Через NPM
npm install electron-rpc-types --save
# Или через Yarn
yarn install electron-rpc-types --save
```

### Типы данных

#### `interface Resolver`

Ассоциативный массив (объект JS) функций, которые могут получать любые аргументы и возвращать любые значения:

```typescript
import { Resolver } from 'electron-rpc-types';

import { User, UserUseCases } from './layers/domain';

const userUseCases: UserUseCases = new UserUseCases();

const resolver: Resolver = {
    getUser: async (id: string): Promise<User> => userUseCases.getUser(id),
    removeUser: async (id: string): Promise<User> => userUseCases.removeUser(id),
    createUser: async (name: string, password?: string): Promise<User> => userUseCases.createUser(name, password),
    updateUser: async (id: string, name: string, password?: string): Promise<User> =>
        userUseCases.updateUser(id, name, password),
};
```

#### `const enum RpcChannelDefaultNames`

Изначальные названия IPC-каналов Electron для запросов и ответов. Константное перечисление для TypeScript, при
компиляции будут подставлены значения. Для JavaScript предоставляется соответствующий объект-перечисление.

##### Значения

| Имя        | Равняется                           | Описание                    |
| ---------- | ----------------------------------- | --------------------------- |
| `REQUEST`  | `"RpcChannelDefaultNames.REQUEST"`  | Имя IPC-канала для запросов |
| `RESPONSE` | `"RpcChannelDefaultNames.RESPONSE"` | Имя IPC-канала для ответов  |

##### Примеры

**TypeScript:**

```typescript
import { RpcChannelDefaultNames } from 'electron-rpc-types';

// Правая часть выражения будет заменена на строку "RpcChannelDefaultNames.REQUEST"
const DEFAULT_REQUEST_CHANNEL_NAME: string = RpcChannelDefaultNames.REQUEST;
// Правая часть выражения будет заменена на строку "RpcChannelDefaultNames.RESPONSE"
const DEFAULT_RESPONSE_CHANNEL_NAME: string = RpcChannelDefaultNames.RESPONSE;
```

**JavaScript:**

```javascript
'use strict';

const { RpcChannelDefaultNames } = require('electron-rpc-types');

// Реальный объект JS, ничего заменятся не будет
const DEFAULT_REQUEST_CHANNEL_NAME = RpcChannelDefaultNames.REQUEST;
const DEFAULT_RESPONSE_CHANNEL_NAME = RpcChannelDefaultNames.RESPONSE;
```

#### `const enum EnvelopeType`

Разрешенные типы сообщений (конвертов) RPC. Константное перечисление для TypeScript, при компиляции будут подставлены
значения. Для JavaScript предоставляется соответствующий объект-перечисление.

##### Значения:

| Имя           | Равняется                    | Описание                                                                           |
| ------------- | ---------------------------- | ---------------------------------------------------------------------------------- |
| `NONBLOCKING` | `"EnvelopeType.NONBLOCKING"` | Не-блокирующий (несколько запросов этого типа могут быть выполнены параллельно)    |
| `BLOCKING`    | `"EnvelopeType.BLOCKING"`    | Блокирующий (несколько запросов этого типа могут быть выполнены только по-очереди) |

##### Примеры

**TypeScript:**

```typescript
import { EnvelopeType } from 'electron-rpc-types';

// Правая часть выражения будет заменена на строку "EnvelopeType.NONBLOCKING"
const NONBLOCKING: string = EnvelopeType.NONBLOCKING;
// Правая часть выражения будет заменена на строку "EnvelopeType.BLOCKING"
const BLOCKING: string = EnvelopeType.BLOCKING;
```

**JavaScript:**

```javascript
'use strict';

const { EnvelopeType } = require('electron-rpc-types');

// Реальный объект JS, ничего заменятся не будет
const NONBLOCKING = EnvelopeType.NONBLOCKING;
const BLOCKING = EnvelopeType.BLOCKING;
```

#### `interface ChannelsNamesParameters`

Параметры именования IPC-каналов для запросов и ответов - все поля необязательные и будут автоматически разрешены
функцией `resolve` из пакета ["electron-rpc-utils"](#/packages/electron-rpc-utils).

##### Поля

| Имя                      | Тип                                 | Обязательное | Описание                    |
| ------------------------ | ----------------------------------- | ------------ | --------------------------- |
| `rpcRequestChannelName`  | `string` или `null` или `undefined` | Нет          | Имя IPC-канала для запросов |
| `rpcResponseChannelName` | `string` или `null` или `undefined` | Нет          | Имя IPC-канала для ответов  |

#### `interface ChannelsNamesProperties`

`ChannelsNamesParameters` обработанный функцией `resolve` из пакета ["electron-rpc-utils"](#/packages/electron-rpc-utils) - все
поля обязательны, заданы и являются строками.

##### Поля

| Имя                      | Тип      | Обязательное | Описание                    |
| ------------------------ | -------- | ------------ | --------------------------- |
| `rpcRequestChannelName`  | `string` | Да           | Имя IPC-канала для запросов |
| `rpcResponseChannelName` | `string` | Да           | Имя IPC-канала для ответов  |

#### `interface Envelope`

Общая структура данных для запросов и ответов RPC.

##### Поля

| Имя         | Тип            | Обязательное | Описание                                    |
| ----------- | -------------- | ------------ | ------------------------------------------- |
| `uuid`      | `string`       | Да           | Уникальный идентификатор конверта (UUID v4) |
| `type`      | `EnvelopeType` | Да           | Тип конверта                                |
| `procedure` | `string`       | Да           | Имя процедуры                               |

### `interface Request<A extends any[] = any[]> extends Envelope`

Структура данных RPC-запроса, расширение интерфейса `Envelope`.

##### Типы-параметры

| Имя | Расширяет | По-умолчанию | Описание                |
| --- | --------- | ------------ | ----------------------- |
| `A` | `any[]`   | `any[]`      | Кортеж типов аргументов |

##### Поля

| Имя    | Тип | Описание                                  |
| ------ | --- | ----------------------------------------- |
| `args` | `A` | Массив аргументов для удаленной процедуры |

Смотрите также список полей для интерфейса `Envelope`

### `interface Response<R = any> extends Envelope`

Структура данных RPC-ответа, расширение интерфейса `Envelope`.

##### Типы-параметры

| Имя | По умолчанию | Описание                                  |
| --- | ------------ | ----------------------------------------- |
| `R` | `any`        | Тип данных для ответа удаленной процедуры |

##### Поля

| Имя      | Тип                                 | Описание                                |
| -------- | ----------------------------------- | --------------------------------------- |
| `result` | `R` или `null` или `undefined`      | Результат удаленной процедуры           |
| `error`  | `string` или `null` или `undefined` | Сообщение об ошибке удаленной процедуры |

Смотрите также список полей для интерфейса `Envelope`

#### `interface RequestLoggingFunction`

Сигнатура функции логирования запросов

##### Аргументы

| Имя        | Тип            | Описание                      |
| ---------- | -------------- | ----------------------------- |
| `envelope` | `EnvelopeType` | Общие данные конверта         |
| `args`     | `any[]`        | Аргументы удаленной процедуры |

#### `interface SuccessLoggingFunction`

Сигнатура функции логирования успешного выполнения удаленной процедуры

##### Аргументы

| Имя        | Тип            | Описание                      |
| ---------- | -------------- | ----------------------------- |
| `envelope` | `EnvelopeType` | Общие данные конверта         |
| `args`     | `any[]`        | Аргументы удаленной процедуры |
| `response` | `any`          | Результат удаленной процедуры |

#### `interface ErrorLoggingFunction`

Сигнатура функции логирования ошибочного выполнения удаленной процедуры

##### Arguments

| Имя        | Тип            | Описание                      |
| ---------- | -------------- | ----------------------------- |
| `envelope` | `EnvelopeType` | Общие данные конверта         |
| `args`     | `any[]`        | Аргументы удаленной процедуры |
| `error`    | `any`          | Ошибка удаленной процедуры    |
