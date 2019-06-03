## ElectronRPC Types

### What is that?

This is common types for other Electron RPC packages.

### Installation

```bash
# By NPM
npm install electron-rpc-types --save
# Or by Yarn
yarn install electron-rpc-types --save
```

| Interface, enumeration                                              | Description                                                                                                                  |
| ------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| [`interface Resolver`](#./resolver)                                 | Associative array (JS object) of functions which can receive receive any arguments and returns any values                    |
| [`const enum RpcChannelDefaultNames`](#./rpc-channel-default-names) | Default Electron IPC responses and requests channels names                                                                   |
| [`const enum EnvelopeType`](#./envelope-type)                       | Available RPC messages (envelopes) types                                                                                     |
| [`interface ChannelsNamesParameters`](#./channels-names-parameters) | Request and response IPC channels names parameters                                                                           |
| [`interface ChannelsNamesProperties`](#./channels-names-properties) | `ChannelsNamesParameters` resolved by [`resolve` function at "electron-rpc-utils" package](#/api/electron-rpc-utils/resolve) |
| [`interface Envelope`](#./envelope)                                 | Common signature for RPC requests and responses                                                                              |
| [`interface Request<A>`](#./request)                                | RPC request signature                                                                                                        |
| [`interface Response<R>`](#./response)                              | RPC response signature                                                                                                       |
| [`interface RequestLoggingFunction`](#./request-logging-function)   | Signature of requests logging function                                                                                       |
| [`interface SuccessLoggingFunction`](#./success-logging-function)   | Signature of success logging function                                                                                        |
| [`interface ErrorLoggingFunction`](#./error-logging-function)       | Signature of error logging function                                                                                          |
