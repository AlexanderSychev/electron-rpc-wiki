## `interface Response<R = any> extends Envelope`

Структура данных RPC-ответа, расширение интерфейса `Envelope`.

### Типы-параметры

| Имя | По умолчанию | Описание                                  |
| --- | ------------ | ----------------------------------------- |
| `R` | `any`        | Тип данных для ответа удаленной процедуры |

### Поля

| Имя      | Тип                                 | Описание                                |
| -------- | ----------------------------------- | --------------------------------------- |
| `result` | `R` или `null` или `undefined`      | Результат удаленной процедуры           |
| `error`  | `string` или `null` или `undefined` | Сообщение об ошибке удаленной процедуры |

Смотрите также список полей для интерфейса `Envelope`
