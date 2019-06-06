## `public request<A extends any[] = any[], R = any>(params: RequestParams<A>): Promise<R>`

Common request sending method

### Generic types

| Name | Extends | Default | Description                  |
| ---- | ------- | ------- | ---------------------------- |
| `A`  | `any[]` | `any[]` | Remote procedure arguments   |
| `R`  | -       | `any`   | Remote procedure result type |

### Arguments

| Name     | Type                                                           | Description        |
| -------- | -------------------------------------------------------------- | ------------------ |
| `params` | [`RequestParams<A>`](#/api/electron-rpc-client/request-params) | Request parameters |

### Returns

`Promise` with remote procedure result `R`.
