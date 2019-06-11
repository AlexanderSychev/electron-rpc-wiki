## `function Controller(name?: string): ClassDecorator`

Decorator factory which creates decorator which marks class as Electron RPC controller

#### Parameters

| Name   | Type     | Required | Description                               |
| ------ | -------- | -------- | ----------------------------------------- |
| `name` | `string` | No       | Name of controller (part of handler name) |

If `name` argument is not settled, decorator will try to consistently get controller name from static string property `displayName` (if it's defined and not empty) or from native [`name`](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Function/name) static property.

#### Returns

`ClassDecorator` - decorator which marks class as controller
