## `interface Resolver`

Ассоциативный массив (объект JS) функций, которые могут получать любые аргументы и возвращать любые значения:

```typescript
import { Resolver } from 'electron-rpc-types';

import { User, UserUseCases } from './layers/domain';

const userUseCases: UserUseCases = new UserUseCases();

const resolver: Resolver = {
    getUser: async (id: string): Promise<User> => userUseCases.getUser(id),
    removeUser: async (id: string): Promise<User> => userUseCases.removeUser(id),
    createUser: async (name: string, password?: string): Promise<User> => userUseCases.createUser(name, password),
    updateUser: async (id: string, name: string, password?: string): Promise<User> =>
        userUseCases.updateUser(id, name, password),
};
```
