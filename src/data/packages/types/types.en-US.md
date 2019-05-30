## ElectronRPC Types

### What is that?

This is common types for other Electron RPC packages.

### Installation

```bash
# By NPM
npm install electron-rpc-types --save
# Or by Yarn
yarn install electron-rpc-types --save
```

### Types

#### `interface Resolver`

Dictionary of functions which can receive receive any arguments and returns any values:

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

Default Electron IPC responses and requests channels names. Constant enumeration for TypeScript code, will be replaced to constant values after compilation. In JavaScript you can require enumeration object.

##### Values

| Name       | Equals                              | Description                      |
| ---------- | ----------------------------------- | -------------------------------- |
| `REQUEST`  | `"RpcChannelDefaultNames.REQUEST"`  | Request IPC channel default name |
| `RESPONSE` | `"RpcChannelDefaultNames.RESPONSE"` | Eequest IPC channel default name |

##### Examples

**TypeScript:**

```typescript
import { RpcChannelDefaultNames } from 'electron-rpc-types';

// Right side will be replaced to "RpcChannelDefaultNames.REQUEST" string
const DEFAULT_REQUEST_CHANNEL_NAME: string = RpcChannelDefaultNames.REQUEST;
// Right side will be replaced to "RpcChannelDefaultNames.RESPONSE" string
const DEFAULT_RESPONSE_CHANNEL_NAME: string = RpcChannelDefaultNames.RESPONSE;
```

**JavaScript:**

```javascript
'use strict';

const { RpcChannelDefaultNames } = require('electron-rpc-types');

// Real JS object required, no replacements
const DEFAULT_REQUEST_CHANNEL_NAME = RpcChannelDefaultNames.REQUEST;
const DEFAULT_RESPONSE_CHANNEL_NAME = RpcChannelDefaultNames.RESPONSE;
```

#### `const enum EnvelopeType`

Available RPC messages (envelopes) types. Constant enumeration for TypeScript code, will be replaced to constant values after compilation. In JavaScript you can require enumeration object.

##### Values:

| Name          | Equals                       | Description                                                             |
| ------------- | ---------------------------- | ----------------------------------------------------------------------- |
| `NONBLOCKING` | `"EnvelopeType.NONBLOCKING"` | Nonblocking (several requests of this type may be executed in parallel) |
| `BLOCKING`    | `"EnvelopeType.BLOCKING"`    | Blocking (several requests of this type will be executed only in turn)  |

##### Examples

**TypeScript:**

```typescript
import { EnvelopeType } from 'electron-rpc-types';

// Right side will be replaced to "EnvelopeType.NONBLOCKING" string
const NONBLOCKING: string = EnvelopeType.NONBLOCKING;
// Right side will be replaced to "EnvelopeType.BLOCKING" string
const BLOCKING: string = EnvelopeType.BLOCKING;
```

**JavaScript:**

```javascript
'use strict';

const { EnvelopeType } = require('electron-rpc-types');

// Real JS object required, no replacements
const NONBLOCKING = EnvelopeType.NONBLOCKING;
const BLOCKING = EnvelopeType.BLOCKING;
```

#### `interface ChannelsNamesParameters`

Request and response IPC channels names parameters - all fields are optional, and will be automatically resolved to `ChannelsNamesProperties` by `resolve` function at ["electron-rpc-utils"](#/packages/electron-rpc-utils) package.

##### Fields

| Name                     | Type                              | Is required | Description                                |
| ------------------------ | --------------------------------- | ----------- | ------------------------------------------ |
| `rpcRequestChannelName`  | `string` or `null` or `undefined` | No          | Name of Electron channel for RPC requests  |
| `rpcResponseChannelName` | `string` or `null` or `undefined` | No          | Name of Electron channel for RPC responses |

#### `interface ChannelsNamesProperties`

`ChannelsNamesParameters` resolved by `resolve` function at ["electron-rpc-utils"](#/packages/electron-rpc-utils) package - all fields are exists and they are a strings.

##### Fields

| Name                     | Type     | Is required | Description                                |
| ------------------------ | -------- | ----------- | ------------------------------------------ |
| `rpcRequestChannelName`  | `string` | Yes         | Name of Electron channel for RPC requests  |
| `rpcResponseChannelName` | `string` | Yes         | Name of Electron channel for RPC responses |

#### `interface Envelope`

Common signature for RPC requests and responses.

##### Fields:

| Name        | Type           | Is required | Description                          |
| ----------- | -------------- | ----------- | ------------------------------------ |
| `uuid`      | `string`       | Yes         | Envelope unique identifier (UUID v4) |
| `type`      | `EnvelopeType` | Yes         | Envelope type                        |
| `procedure` | `string`       | Yes         | name of procedure                    |

### `interface Request<A extends any[] = any[]> extends Envelope`

RPC request signature, extends `Envelope` interface.

Generic arguments

| Name | Extends | Default | Description               |
| ---- | ------- | ------- | ------------------------- |
| `A`  | `any[]` | `any[]` | Arguments tuple signature |

##### Fields

| Name   | Type | Description                             |
| ------ | ---- | --------------------------------------- |
| `args` | `A`  | Array of arguments for remote procedure |

See also `Envelope` fields list

### `interface Response<R = any> extends Envelope`

RPC response signature, extends `Envelope` interface.

##### Generic arguments

| Name | Default | Description                       |
| ---- | ------- | --------------------------------- |
| `R`  | `any`   | Remote procedure result signature |

##### Fields

| Name     | Type                              | Description                    |
| -------- | --------------------------------- | ------------------------------ |
| `result` | `R` or `null` or `undefined`      | Remote procedure result        |
| `error`  | `string` or `null` or `undefined` | Remote procedure error message |

See also `Envelope` fields list

#### `interface RequestLoggingFunction`

Signature of requests logging function.

##### Arguments

| Name       | Type           | Description                |
| ---------- | -------------- | -------------------------- |
| `envelope` | `EnvelopeType` | Common envelope data       |
| `args`     | `any[]`        | Remote procedure arguments |

#### `interface SuccessLoggingFunction`

Signature of success logging function.

##### Arguments

| Name       | Type           | Description                |
| ---------- | -------------- | -------------------------- |
| `envelope` | `EnvelopeType` | Common envelope data       |
| `args`     | `any[]`        | Remote procedure arguments |
| `response` | `any`          | Remote procedure result    |

#### `interface ErrorLoggingFunction`

Signature of error logging function.

##### Arguments

| Name       | Type           | Description                |
| ---------- | -------------- | -------------------------- |
| `envelope` | `EnvelopeType` | Common envelope data       |
| `args`     | `any[]`        | Remote procedure arguments |
| `error`    | `any`          | Remote procedure error     |
