## Типы даных ElectronRPC

### Что это?

Набор общих типов данных для остальных пакетов ElectronRPC.

### Установка

```bash
# Через NPM
npm install electron-rpc-types --save
# Или через Yarn
yarn install electron-rpc-types --save
```

| Interface, enumeration                                              | Description                                                                                                                  |
| ------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| [`interface Resolver`](#./resolver)                                 | Ассоциативный массив (объект JS) функций, которые могут получать любые аргументы и возвращать любые значения                 |
| [`const enum RpcChannelDefaultNames`](#./rpc-channel-default-names) | Изначальные названия IPC-каналов Electron для запросов и ответов                                                             |
| [`const enum EnvelopeType`](#./envelope-type)                       | Разрешенные типы сообщений (конвертов) RPC                                                                                   |
| [`interface ChannelsNamesParameters`](#./channels-names-parameters) | Параметры именования IPC-каналов для запросов и ответов                                                                      |
| [`interface ChannelsNamesProperties`](#./channels-names-properties) | `ChannelsNamesParameters` обработанный [функцией `resolve` из пакета "electron-rpc-utils"](#/api/electron-rpc-utils/resolve) |
| [`interface Envelope`](#./envelope)                                 | Общая структура данных для запросов и ответов RPC                                                                            |
| [`interface Request<A>`](#./request)                                | Структура данных RPC-запроса                                                                                                 |
| [`interface Response<R>`](#./response)                              | Структура данных RPC-ответа                                                                                                  |
| [`interface RequestLoggingFunction`](#./request-logging-function)   | Сигнатура функции логирования запросов                                                                                       |
| [`interface SuccessLoggingFunction`](#./success-logging-function)   | Сигнатура функции логирования успешного выполнения удаленной процедуры                                                       |
| [`interface ErrorLoggingFunction`](#./error-logging-function)       | Сигнатура функции логирования ошибочного выполнения удаленной процедуры                                                      |
