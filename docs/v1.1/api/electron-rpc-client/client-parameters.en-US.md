## `interface ClientParameters extends ChannelsNamesParameters`

[`Client`](#/api/electron-rpc-client/client) class constructor parameters object. Extends interface [`ChannelsNamesParameters`](#/api/electron-rpc-types/channels-names-parameters).

### Fields

| Name       | Type                                                                                                                                                                                     | Description       |
| ---------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------- |
| `receiver` | [`ipcRenderer`](https://electronjs.org/docs/api/ipc-renderer#ipcrenderer) for Render Process, [`ipcMain`](https://electronjs.org/docs/api/ipc-main#ipcmain) for Main Process             | Messages receiver |
| `sender`   | [`ipcRenderer`](https://electronjs.org/docs/api/ipc-renderer#ipcrenderer) for Render Process, [`webContents`](https://electronjs.org/docs/api/web-contents#webcontents) for Main Process | Messages sender   |
