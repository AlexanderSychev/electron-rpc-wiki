## ElectronRPC Async Queue

### What is that?

Async tasks queue implementation for Electron RPC packages, but may be used for anything else.

### Installation

```bash
# By NPM
npm install electron-rpc-async-queue --save
# Or by Yarn
yarn add electron-rpc-async-queue --save
```

### Contents

| Class, interface                                                           | Description                                                         |
| -------------------------------------------------------------------------- | ------------------------------------------------------------------- |
| [`interface TaskBody<A, R>`](#/api/electron-rpc-async-queue/task-body)     | Singature of function which must be executed at queue - taks's body |
| [`interface TaskResult<A, R>`](#/api/electron-rpc-async-queue/task-result) | Task execution result signature                                     |
| [`class AsyncQueue`](#/api/electron-rpc-async-queue/async-queue)           | Async queue object                                                  |
