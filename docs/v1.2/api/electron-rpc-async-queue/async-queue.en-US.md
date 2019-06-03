## `class AsyncQueue`

Async queue object.

### Constructor

#### `public new AsyncQueue()`

```typescript
import { AsyncQueue } from 'electron-rpc-async-queue';
const queue = new AsyncQueue();
```

### Methods

#### `public push<A extends any[] = any[], R = any>(body: TaskBody<A, R>, ...args: A): Promise<TaskResult<A, R>>`

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
