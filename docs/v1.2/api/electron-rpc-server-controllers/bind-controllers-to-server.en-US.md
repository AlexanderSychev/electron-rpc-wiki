## `function bindControllersToServer(server: Server, classesWithArgs: ([Function, ...any[]] | Function)[])`

Bind controllers classes to Electron RPC Server - creates their instances and add marked methods to resolvers map.

### Parameters

| Name      | Type                                         | Description                                                                                                                                                                                                           |
| --------- | -------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `server`  | [`Server`](#/api/electron-rpc-server/server) | Electron RPC Server instance                                                                                                                                                                                          |
| `classes` | `([Function, ...any[]] | Function)[]`        | Controller classes to bind to server or tuples of controller classes and their constructor arguments. Controller classes must be marked by [`Controller`](#/api/electron-rpc-server-controllers/controller) decorator |
