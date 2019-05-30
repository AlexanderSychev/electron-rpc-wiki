## ElectronRPC Async Queue

### What is that?

Async tasks queue implementation for Electron RPC packages, but may be used for anything else.

### Installation

```bash
# By NPM
npm install electron-rpc-async-queue --save
# Or by Yarn
yarn add electron-rpc-async-queue --save
```

### API

#### `interface TaskBody<A extends any[] = any[], R = any>`

Singature of function which must be executed at queue - taks's body.

###### Generic parameters

| Name | Extends | Default | Description                    |
| ---- | ------- | ------- | ------------------------------ |
| A    | `any[]` | `any[]` | Function arguments types tuple |
| R    | -       | `any`   | Function returning type        |

#### `interface TaskResult<A extends any[] = any[], R = any>`

Task execution result signature.

###### Generic parameters

| Name | Extends | Default | Description                           |
| ---- | ------- | ------- | ------------------------------------- |
| A    | `any[]` | `any[]` | Task's function arguments types tuple |
| R    | -       | `any`   | Task's function returning type        |

###### Fields

| Name   | Type               | Description                                       |
| ------ | ------------------ | ------------------------------------------------- |
| args   | `A`                | Task body arguments                               |
| error  | `String` or `null` | Execution error message, equals `null` on success |
| result | `R` or `null`      | Execution result, equals `null` on error          |

All fields are required.

#### `class AsyncQueue`

Async queue object.

##### Constructor

###### `public new AsyncQueue()`

```typescript
import { AsyncQueue } from 'electron-rpc-async-queue';
const queue = new AsyncQueue();
```

##### Methods

###### `public push<A extends any[] = any[], R = any>(body: TaskBody<A, R>, ...args: A): Promise<TaskResult<A, R>>`

_Generic parameters_

| Name | Extends | Default | Description                           |
| ---- | ------- | ------- | ------------------------------------- |
| A    | `any[]` | `any[]` | Task's function arguments types tuple |
| R    | -       | `any`   | Task's function returning type        |

_Arguments_

| Name      | Type             | Description                                                       |
| --------- | ---------------- | ----------------------------------------------------------------- |
| `body`    | `TaskBody<A, R>` | Function to execute at queue (will be executed after last pushed) |
| `...args` | `A`              | Arguments of function (for `body`)                                |

_Returns_

`Promise<TaskResult<A, R>>` - `Promise`, which resolves with `TaskResult<A, R>`.
