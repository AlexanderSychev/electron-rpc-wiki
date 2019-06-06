## `interface ClientParameters extends ChannelsNamesParameters`

Параметры для конструктора класса [`Client`](#/api/electron-rpc-client/client). Расширяет интерфейс [`ChannelsNamesParameters`](#/api/electron-rpc-types/channels-names-parameters).

### Поля

| Имя        | Тип                                                                                                                                                                                               | Описание              |
| ---------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------- |
| `receiver` | [`ipcRenderer`](https://electronjs.org/docs/api/ipc-renderer#ipcrenderer) для процесса отрисовки, [`ipcMain`](https://electronjs.org/docs/api/ipc-main#ipcmain) для главного процесса             | Получатель сообщений  |
| `sender`   | [`ipcRenderer`](https://electronjs.org/docs/api/ipc-renderer#ipcrenderer) для процесса отрисовки, [`webContents`](https://electronjs.org/docs/api/web-contents#webcontents) для главного процесса | Отправитель сообщений |
