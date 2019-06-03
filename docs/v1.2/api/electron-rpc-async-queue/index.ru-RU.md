## ElectronRPC - Асинхронная Очередь

### Что это?

Реализация очереди асинхронных задач для пакетов Electron RPC, но может использоваться и в других проектах.

### Установка

```bash
# Через NPM
npm install electron-rpc-async-queue --save
# Или через Yarn
yarn add electron-rpc-async-queue --save
```

### Компоненты

| Класс, интерфейс                                                           | Описание                                                                                |
| -------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- |
| [`interface TaskBody<A, R>`](#/api/electron-rpc-async-queue/task-body)     | Сигнатура функции, которая должна быть поставлена в очередь на выполнение - тело задачи |
| [`interface TaskResult<A, R>`](#/api/electron-rpc-async-queue/task-result) | Сигнатура результата выполнения задачи                                                  |
| [`class AsyncQueue`](#/api/electron-rpc-async-queue/async-queue)           | Объект асинхронной очереди                                                              |
