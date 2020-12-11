## `interface Envelope`

Общая структура данных для запросов и ответов RPC.

### Поля

| Имя         | Тип            | Обязательное | Описание                                    |
| ----------- | -------------- | ------------ | ------------------------------------------- |
| `uuid`      | `string`       | Да           | Уникальный идентификатор конверта (UUID v4) |
| `type`      | `EnvelopeType` | Да           | Тип конверта                                |
| `procedure` | `string`       | Да           | Имя процедуры                               |