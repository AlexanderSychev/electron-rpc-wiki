## `const enum EnvelopeType`

Available RPC messages (envelopes) types. Constant enumeration for TypeScript code, will be replaced to constant values after compilation. In JavaScript you can require enumeration object.

### Values:

| Name          | Equals                       | Description                                                             |
| ------------- | ---------------------------- | ----------------------------------------------------------------------- |
| `NONBLOCKING` | `"EnvelopeType.NONBLOCKING"` | Nonblocking (several requests of this type may be executed in parallel) |
| `BLOCKING`    | `"EnvelopeType.BLOCKING"`    | Blocking (several requests of this type will be executed only in turn)  |

### Examples

**TypeScript:**

```typescript
import { EnvelopeType } from 'electron-rpc-types';

// Right side will be replaced to "EnvelopeType.NONBLOCKING" string
const NONBLOCKING: string = EnvelopeType.NONBLOCKING;
// Right side will be replaced to "EnvelopeType.BLOCKING" string
const BLOCKING: string = EnvelopeType.BLOCKING;
```

**JavaScript:**

```javascript
'use strict';

const { EnvelopeType } = require('electron-rpc-types');

// Real JS object required, no replacements
const NONBLOCKING = EnvelopeType.NONBLOCKING;
const BLOCKING = EnvelopeType.BLOCKING;
```
