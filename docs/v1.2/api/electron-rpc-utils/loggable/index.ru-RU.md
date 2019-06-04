## `abstract class Loggable`

Абстрактная логгируемая сущность.

### Конструктор:

#### `protected new Loggable()`

Абстрактный класс, конструктор без аргументов

```typescript
import { Loggable } from 'electron-rpc-utils';
export class MyClass extends Loggable {
    public constructor() {
        super();
    }
}
```

### Методы:

-   публичные
    -   [`setRequestLogger`](#./set-request-logger)
    -   [`setSuccessLogger`](#./set-success-logger)
    -   [`setErrorLogger`](#./set-error-logger)
-   защищенные
    -   [`logRequest`](#./log-request)
    -   [`logSuccess`](#./log-success)
    -   [`logError`](#./log-error)
