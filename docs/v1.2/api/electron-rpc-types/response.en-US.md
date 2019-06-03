## `interface Response<R = any> extends Envelope`

RPC response signature, extends `Envelope` interface.

### Generic arguments

| Name | Default | Description                       |
| ---- | ------- | --------------------------------- |
| `R`  | `any`   | Remote procedure result signature |

### Fields

| Name     | Type                              | Description                    |
| -------- | --------------------------------- | ------------------------------ |
| `result` | `R` or `null` or `undefined`      | Remote procedure result        |
| `error`  | `string` or `null` or `undefined` | Remote procedure error message |

See also `Envelope` fields list
