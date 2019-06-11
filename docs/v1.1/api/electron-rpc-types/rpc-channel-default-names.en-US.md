## `const enum RpcChannelDefaultNames`

Default Electron IPC responses and requests channels names. Constant enumeration for TypeScript code, will be replaced to constant values after compilation. In JavaScript you can require enumeration object.

### Values

| Name       | Equals                              | Description                      |
| ---------- | ----------------------------------- | -------------------------------- |
| `REQUEST`  | `"RpcChannelDefaultNames.REQUEST"`  | Request IPC channel default name |
| `RESPONSE` | `"RpcChannelDefaultNames.RESPONSE"` | Eequest IPC channel default name |

### Examples

**TypeScript:**

```typescript
import { RpcChannelDefaultNames } from 'electron-rpc-types';

// Right side will be replaced to "RpcChannelDefaultNames.REQUEST" string
const DEFAULT_REQUEST_CHANNEL_NAME: string = RpcChannelDefaultNames.REQUEST;
// Right side will be replaced to "RpcChannelDefaultNames.RESPONSE" string
const DEFAULT_RESPONSE_CHANNEL_NAME: string = RpcChannelDefaultNames.RESPONSE;
```

**JavaScript:**

```javascript
'use strict';

const { RpcChannelDefaultNames } = require('electron-rpc-types');

// Real JS object required, no replacements
const DEFAULT_REQUEST_CHANNEL_NAME = RpcChannelDefaultNames.REQUEST;
const DEFAULT_RESPONSE_CHANNEL_NAME = RpcChannelDefaultNames.RESPONSE;
```
