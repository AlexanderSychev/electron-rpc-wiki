## ElectronRPC Utils

### What is that?

This is a packages with common utility functions and classes for all ElectronRPC packages

### Installation

```bash
# By NPM
npm install electron-rpc-utils --save
# Or by Yarn
yarn add electron-rpc-utils --save
```

#### `isNil(value: any): is null | undefined`

##### Arguments

| Name    | Type  | Description    |
| ------- | ----- | -------------- |
| `value` | `any` | Value to check |

##### Returns

`true` if `value` is `null` or `undefined`. For any other values always returns `true`

#### `resolve(params?: ChannelsNamesParameters | null | undefined): ChannelsNamesProperties`

##### Arguments

| Name     | Type                                               | Is required | Description                  |
| -------- | -------------------------------------------------- | ----------- | ---------------------------- |
| `params` | `ChannelsNamesParameters` or `null` or `undefined` | No          | Parameters object to resolve |

##### Returns

`ChannelsNamesProperties` - resolved RPC request and response channels names.

#### `abstract class Loggable`

Abstract loggable entity.

##### Constructor

###### `protected new Loggable()`

Abstract class, constructor has no arguments.

```typescript
import { Loggable } from 'electron-rpc-utils';
export class MyClass {
    public constructor() {
        super();
    }
}
```

##### Methods

###### `public setRequestLogger(requestLogger: RequestLoggingFunction | null): void`

Add request logging function. To remove existing logging function use `null` as argument.

_Arguments_

| Name            | Type                               | Description                |
| --------------- | ---------------------------------- | -------------------------- |
| `requestLogger` | `RequestLoggingFunction` or `null` | Logging function or `null` |

###### `public setSuccessLogger(requestLogger: RequestLoggingFunction | null): void`

Add success logging function. To remove existing logging function use `null` as argument.

_Arguments_

| Name            | Type                               | Description                |
| --------------- | ---------------------------------- | -------------------------- |
| `successLogger` | `SuccessLoggingFunction` or `null` | Logging function or `null` |

###### `public setErrorLogger(errorLogger: RequestLoggingFunction | null): void`

Add error logging function. To remove existing logging function use `null` as argument.

_Arguments_

| Name          | Type                             | Description                |
| ------------- | -------------------------------- | -------------------------- |
| `errorLogger` | `ErrorLoggingFunction` or `null` | Logging function or `null` |

###### `protected logRequest(envelope: Envelope, args: any[]): void`

Log request (if logger function not defined will do nothing).

_Arguments_

| Name       | Type       | Description                |
| ---------- | ---------- | -------------------------- |
| `envelope` | `Envelope` | Common envelope data       |
| `args`     | `any[]`    | Remote procedure arguments |

###### `protected logSuccess(envelope: Envelope, args: any[], response: any): void`

Log success (if logger function not defined will do nothing).

_Arguments_

| Name       | Type       | Description                |
| ---------- | ---------- | -------------------------- |
| `envelope` | `Envelope` | Common envelope data       |
| `args`     | `any[]`    | Remote procedure arguments |
| `response` | `any`      | Remote procedure result    |

###### `protected logError(envelope: Envelope, args: any[], error: string): void`

Log error (if logger function not defined will do nothing).

_Arguments_

| Name       | Type       | Description                |
| ---------- | ---------- | -------------------------- |
| `envelope` | `Envelope` | Common envelope data       |
| `args`     | `any[]`    | Remote procedure arguments |
| `error`    | `string`   | Remote procedure error     |
