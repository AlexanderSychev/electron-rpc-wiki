## `interface RequestParams<A extends any[] = any[]>`

Parameters for [`request`](#/api/electron-rpc-client/client/request) method of [`Client`](#/api/electron-rpc-client/client) class.

### Generic types

| Name | Extends | Default | Description                            |
| ---- | ------- | ------- | -------------------------------------- |
| `A`  | `any[]` | `any[]` | Remote procedure arguments types tuple |

### Fields

| Name        | Required | Type                                                     | Default value             | Description                |
| ----------- | -------- | -------------------------------------------------------- | ------------------------- | -------------------------- |
| `procedure` | Yes      | `string`                                                 | -                         | Remote procedure name      |
| `type`      | No       | [`EnvelopeType`](#/api/electron-rpc-types/envelope-type) | `'EnvelopeType.BLOCKING'` | Type of request envelope   |
| `args`      | No       | `A`                                                      | `[]`                      | Remote procedure arguments |
