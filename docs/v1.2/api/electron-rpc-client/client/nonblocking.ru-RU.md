## `public nonblocking<A extends any[] = any[], R = any>(procedure: string, ...args: A): Promise<R>`

Отправить неблокирующий (`'EnvelopeType.NONBLOCKING'`) запрос.

### Аргументы-типы

| Имя | Расширяет | По умолчанию | Описание                                       |
| --- | --------- | ------------ | ---------------------------------------------- |
| `A` | `any[]`   | `any[]`      | Кортеж типов аргументов удаленной процедуры    |
| `R` | -         | `any`        | Тип возвращаемого значения удаленной процедуры |

### Аргументы

| Имя         | Тип      | Описание                      |
| ----------- | -------- | ----------------------------- |
| `procedure` | `string` | Имя удаленной процедуры       |
| `...args`   | `A`      | Аргументы удаленной процедуры |

### Возвращает

`Promise` с результатом выполнения удаленной процедуры `R`.