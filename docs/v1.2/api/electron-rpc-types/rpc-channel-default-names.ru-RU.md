## `const enum RpcChannelDefaultNames`

Изначальные названия IPC-каналов Electron для запросов и ответов. Константное перечисление для TypeScript, при
компиляции будут подставлены значения. Для JavaScript предоставляется соответствующий объект-перечисление.

### Значения

| Имя        | Равняется                           | Описание                    |
| ---------- | ----------------------------------- | --------------------------- |
| `REQUEST`  | `"RpcChannelDefaultNames.REQUEST"`  | Имя IPC-канала для запросов |
| `RESPONSE` | `"RpcChannelDefaultNames.RESPONSE"` | Имя IPC-канала для ответов  |

### Примеры

**TypeScript:**

```typescript
import { RpcChannelDefaultNames } from 'electron-rpc-types';

// Правая часть выражения будет заменена на строку "RpcChannelDefaultNames.REQUEST"
const DEFAULT_REQUEST_CHANNEL_NAME: string = RpcChannelDefaultNames.REQUEST;
// Правая часть выражения будет заменена на строку "RpcChannelDefaultNames.RESPONSE"
const DEFAULT_RESPONSE_CHANNEL_NAME: string = RpcChannelDefaultNames.RESPONSE;
```

**JavaScript:**

```javascript
'use strict';

const { RpcChannelDefaultNames } = require('electron-rpc-types');

// Реальный объект JS, ничего заменятся не будет
const DEFAULT_REQUEST_CHANNEL_NAME = RpcChannelDefaultNames.REQUEST;
const DEFAULT_RESPONSE_CHANNEL_NAME = RpcChannelDefaultNames.RESPONSE;
```
