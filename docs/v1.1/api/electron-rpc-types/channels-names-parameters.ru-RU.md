## `interface ChannelsNamesParameters`

Параметры именования IPC-каналов для запросов и ответов - все поля необязательные и будут автоматически разрешены
функцией `resolve` из пакета ["electron-rpc-utils"](#/packages/electron-rpc-utils).

### Поля

| Имя                      | Тип                                 | Обязательное | Описание                    |
| ------------------------ | ----------------------------------- | ------------ | --------------------------- |
| `rpcRequestChannelName`  | `string` или `null` или `undefined` | Нет          | Имя IPC-канала для запросов |
| `rpcResponseChannelName` | `string` или `null` или `undefined` | Нет          | Имя IPC-канала для ответов  |
