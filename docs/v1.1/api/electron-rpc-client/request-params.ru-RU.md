## `interface RequestParams<A extends any[] = any[]>`

Параметры для метода [`request`](#/api/electron-rpc-client/client/request) класса [`Client`](#/api/electron-rpc-client/client).

### Аргументы-типы

| Имя | Расширяет | По умолчанию | Описание                                    |
| --- | --------- | ------------ | ------------------------------------------- |
| `A` | `any[]`   | `any[]`      | Кортеж типов аргументов удаленной процедуры |

### Поля

| Имя         | Обязательное | Тип                                                      | По умолчанию              | Описание                      |
| ----------- | ------------ | -------------------------------------------------------- | ------------------------- | ----------------------------- |
| `procedure` | Yes          | `string`                                                 | -                         | Имя удаленной процедуры       |
| `type`      | No           | [`EnvelopeType`](#/api/electron-rpc-types/envelope-type) | `'EnvelopeType.BLOCKING'` | Тип конверта запроса          |
| `args`      | No           | `A`                                                      | `[]`                      | Аргументы удаленной процедуры |