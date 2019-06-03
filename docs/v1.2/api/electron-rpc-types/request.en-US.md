## `interface Request<A extends any[] = any[]> extends Envelope`

RPC request signature, extends `Envelope` interface.

### Generic arguments

| Name | Extends | Default | Description               |
| ---- | ------- | ------- | ------------------------- |
| `A`  | `any[]` | `any[]` | Arguments tuple signature |

### Fields

| Name   | Type | Description                             |
| ------ | ---- | --------------------------------------- |
| `args` | `A`  | Array of arguments for remote procedure |

See also `Envelope` fields list
