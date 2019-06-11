## `function Service(name?: string): ClassDecorator`

Decorator factory which creates decorator which marks class as service.

### Arguments

| Name   | Type     | Required | Description                                     |
| ------ | -------- | -------- | ----------------------------------------------- |
| `name` | `string` | No       | Name of service (part of remote procedure name) |

If `name` argument is not settled, decorator will try to consistently get service name from static string property `displayName` (if it's defined and not empty) or from native [`name`](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Function/name) static property.

### Returns

`ClassDecorator` - decorator which marks class as service.
