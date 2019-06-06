## `public nonblocking<A extends any[] = any[], R = any>(procedure: string, ...args: A): Promise<R>`

Nonblocking (`'EnvelopeType.NONBLOCKING'`) request sending.

### Generic types

| Name | Extends | Default | Description                      |
| ---- | ------- | ------- | -------------------------------- |
| `A`  | `any[]` | `any[]` | Remote procedure arguments tuple |
| `R`  | -       | `any`   | Remote procedure result type     |

### Arguments

| Name        | Type     | Description                |
| ----------- | -------- | -------------------------- |
| `procedure` | `string` | Remote procedure name      |
| `...args`   | `A`      | Remote procedure arguments |

### Returns

`Promise` with remote procedure result `R`.
