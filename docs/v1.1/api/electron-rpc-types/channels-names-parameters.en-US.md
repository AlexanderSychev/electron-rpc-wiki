## `interface ChannelsNamesParameters`

Request and response IPC channels names parameters - all fields are optional, and will be automatically resolved to `ChannelsNamesProperties` by `resolve` function at ["electron-rpc-utils"](#/packages/electron-rpc-utils) package.

### Fields

| Name                     | Type                              | Is required | Description                                |
| ------------------------ | --------------------------------- | ----------- | ------------------------------------------ |
| `rpcRequestChannelName`  | `string` or `null` or `undefined` | No          | Name of Electron channel for RPC requests  |
| `rpcResponseChannelName` | `string` or `null` or `undefined` | No          | Name of Electron channel for RPC responses |
