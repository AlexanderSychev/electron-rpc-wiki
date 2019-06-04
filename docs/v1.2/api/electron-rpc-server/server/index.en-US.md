## `class Server extends Loggable`

RPC Server. Extends [`Loggable`](#/api/electron-rpc-utils/loggable) class.

### Constructor

#### `public new Server(bus: IpcMain | IpcRenderer, resolver: Resolver, channels?: ChannelsNamesParameters | null | undefined)`

#### Arguments

| Name     | Type                                                                                                                                                                         | Required | Description                                                                                            |
| -------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------- | ------------------------------------------------------------------------------------------------------ |
| bus      | [`ipcRenderer`](https://electronjs.org/docs/api/ipc-renderer#ipcrenderer) for Render Process, [`ipcMain`](https://electronjs.org/docs/api/ipc-main#ipcmain) for Main Process | Yes      | IPC messages bus instance                                                                              |
| resolver | [`Resolver`](#/api/electron-rpc-types/resolver)                                                                                                                              | Yes      | Dictionary of procedures to remote calling. Functions can receive any arguments and returns any values |
| channels | [`ChannelsNamesParameters`](#/api/electron-rpc-types/channels-names-parameters)                                                                                              | No       | Request and response IPC channels names                                                                |

### Methods

-   [`start`](#./start)
-   [`stop`](#./stop)
-   [`extendResolver`](#./extend-resolver)

All methods are public. See also methods of [`Loggable`](#/api/electron-rpc-utils/loggable) class.
