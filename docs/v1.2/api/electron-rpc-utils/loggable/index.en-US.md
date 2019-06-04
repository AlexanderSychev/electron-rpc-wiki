## `abstract class Loggable`

Abstract loggable entity.

### Constructor:

#### `protected new Loggable()`

Abstract class, constructor has no arguments.

```typescript
import { Loggable } from 'electron-rpc-utils';
export class MyClass extends Loggable {
    public constructor() {
        super();
    }
}
```

### Methods:

-   public
    -   [`setRequestLogger`](#./set-request-logger)
    -   [`setSuccessLogger`](#./set-success-logger)
    -   [`setErrorLogger`](#./set-error-logger)
-   protected
    -   [`logRequest`](#./log-request)
    -   [`logSuccess`](#./log-success)
    -   [`logError`](#./log-error)
