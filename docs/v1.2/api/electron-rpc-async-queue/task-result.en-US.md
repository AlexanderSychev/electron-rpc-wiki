## `interface TaskResult<A extends any[] = any[], R = any>`

Task execution result signature.

### Generic parameters

| Name | Extends | Default | Description                           |
| ---- | ------- | ------- | ------------------------------------- |
| A    | `any[]` | `any[]` | Task's function arguments types tuple |
| R    | -       | `any`   | Task's function returning type        |

### Fields

| Name   | Type               | Description                                       |
| ------ | ------------------ | ------------------------------------------------- |
| args   | `A`                | Task body arguments                               |
| error  | `String` or `null` | Execution error message, equals `null` on success |
| result | `R` or `null`      | Execution result, equals `null` on error          |

All fields are required.
