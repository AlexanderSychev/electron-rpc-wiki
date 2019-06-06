## `Action(rpcName: string): MethodDecorator`

Decorator factory which creates decorator which marks method as remote procedure. Class must be marked by [`Controller`](#/api/electron-rpc-server-controllers/controller) decorator.

### Parameters

| Name      | Type     | Description                              |
| --------- | -------- | ---------------------------------------- |
| `rpcName` | `string` | Name of procedure (part of handler name) |

### Returns

`MethodDecorator` - decorator which marks method as remote procedure.
