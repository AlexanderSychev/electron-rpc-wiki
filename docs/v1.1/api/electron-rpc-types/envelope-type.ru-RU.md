## `const enum EnvelopeType`

Разрешенные типы сообщений (конвертов) RPC. Константное перечисление для TypeScript, при компиляции будут подставлены
значения. Для JavaScript предоставляется соответствующий объект-перечисление.

### Значения:

| Имя           | Равняется                    | Описание                                                                           |
| ------------- | ---------------------------- | ---------------------------------------------------------------------------------- |
| `NONBLOCKING` | `"EnvelopeType.NONBLOCKING"` | Не-блокирующий (несколько запросов этого типа могут быть выполнены параллельно)    |
| `BLOCKING`    | `"EnvelopeType.BLOCKING"`    | Блокирующий (несколько запросов этого типа могут быть выполнены только по-очереди) |

### Примеры

**TypeScript:**

```typescript
import { EnvelopeType } from 'electron-rpc-types';

// Правая часть выражения будет заменена на строку "EnvelopeType.NONBLOCKING"
const NONBLOCKING: string = EnvelopeType.NONBLOCKING;
// Правая часть выражения будет заменена на строку "EnvelopeType.BLOCKING"
const BLOCKING: string = EnvelopeType.BLOCKING;
```

**JavaScript:**

```javascript
'use strict';

const { EnvelopeType } = require('electron-rpc-types');

// Реальный объект JS, ничего заменятся не будет
const NONBLOCKING = EnvelopeType.NONBLOCKING;
const BLOCKING = EnvelopeType.BLOCKING;
```
