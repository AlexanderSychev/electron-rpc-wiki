## `function Procedure(rpcName: string, type?: EnvelopeType): PropertyDecorator`

Фабричный декоратор, который создает декоратор, помечающий поле, как метод, вызывающий удаленную процедуру (тип данных [`ServiceProcedure`](#/api/electron-rpc-client-services/service-procedure)). Поле будет автоматически инициализировано при создании сервиса через фабрику (тип [`Factory`](#/api/electron-rpc-client-services/factory)). Если вы используете TypeScript с включенными опциями `--strictPropertyInitialization` или `--strict`, вы можете использовать суффикс `!` в имени поля, чтобы не проверять инициализацию поля.

```typescript
import { EnvelopeType } from 'electron-rpc-types';
import { Service, Procedure, ServiceProcedure } from 'electron-rpc-client-services';

@Service('Main')
export class MainService {
    @Procedure('nonblocking', EnvelopeType.NONBLOCKING)
    public nonblocking!: ServiceProcedure<[], void>;

    @Procedure('blocking', EnvelopeType.BLOCKING)
    public blocking!: ServiceProcedure<[], void>;

    @Procedure('foo', EnvelopeType.BLOCKING)
    public foo!: ServiceProcedure<[], string>;

    @Procedure('throwable', EnvelopeType.NONBLOCKING)
    public throwable!: ServiceProcedure<[], string>;

    @Procedure('echo', EnvelopeType.NONBLOCKING)
    public echo!: ServiceProcedure<[string], string>;
}
```

### Аргументы

| Имя       | Тип                                                      | Обязательное | По умолчанию              | Описание                                       |
| --------- | -------------------------------------------------------- | ------------ | ------------------------- | ---------------------------------------------- |
| `rpcName` | `string`                                                 | Yes          | -                         | Имя действия (часть имени удаленной процедуры) |
| `type`    | [`EnvelopeType`](#/api/electron-rpc-types/envelope-type) | No           | `'EnvelopeType.BLOCKING'` | Тип RPC-запроса                                |

### Возвращает

`PropertyDecorator` - декоратор, помечающий поле, как метод, вызывающий удаленную процедуру (тип данных [`ServiceProcedure`](#/api/electron-rpc-client-services/service-procedure)). Класс должен быть помечен декоратором [`Service`](#/api/electron-rpc-client-services/service).
