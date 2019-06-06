## `public createService<T>(ctor: Newable<T>, ...args: any[]): T`

Creates service instance.

### Generic arguments

| Name | Description      |
| ---- | ---------------- |
| `T`  | Creating service |

### Arguments

| Name      | Type                                             | Required         | Description                 |
| --------- | ------------------------------------------------ | ---------------- | --------------------------- |
| `ctor`    | [`Newable<T>`](#/api/electron-rpc-types/newable) | Yes              | Service's class             |
| `...args` | `any[]`                                          | Depends on class | Class constructor arguments |

### Returns

`T` - service instance
