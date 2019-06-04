## `class Server extends Loggable`

RPC-сервер. Расширяет класс [`Loggable`](#/api/electron-rpc-utils/loggable).

### Конструктор

#### `public new Server(bus: IpcMain | IpcRenderer, resolver: Resolver, channels?: ChannelsNamesParameters | null | undefined)`

#### Аргументы

| Имя      | Тип                                                                                                                                                                                   | Обязательный | Описание                                                                                                                                      |
| -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------ | --------------------------------------------------------------------------------------------------------------------------------------------- |
| bus      | [`ipcRenderer`](https://electronjs.org/docs/api/ipc-renderer#ipcrenderer) для Процесса Отрисовки, [`ipcMain`](https://electronjs.org/docs/api/ipc-main#ipcmain) для Главного Процесса | Да           | Экземпляр шины для IPC-сообщений                                                                                                              |
| resolver | [`Resolver`](#/api/electron-rpc-types/resolver)                                                                                                                                       | Да           | Ассоциативный массив (JS-объект) удаленных процедур для удаленного вызова. Функции могут получать любые аргументы и возвращать любые значения |
| channels | [`ChannelsNamesParameters`](#/api/electron-rpc-types/channels-names-parameters)                                                                                                       | Нет          | Имена IPC-каналов для запросов и ответов                                                                                                      |

### Методы

-   [`start`](#./start)
-   [`stop`](#./stop)
-   [`extendResolver`](#./extend-resolver)

Все методы - публичные. Смотрите также методы класса [`Loggable`](#/api/electron-rpc-utils/loggable).
