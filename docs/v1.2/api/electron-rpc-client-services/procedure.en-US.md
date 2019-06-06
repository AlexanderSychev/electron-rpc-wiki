## `function Procedure(rpcName: string, type?: EnvelopeType): PropertyDecorator`

Decorator factory which creates decorator which marks field as remote procedure calling method (type [`ServiceProcedure`](#/api/electron-rpc-client-services/service-procedure)). Property will be automatically initialized on service creation by [`Factory`](#/api/electron-rpc-client-services/factory) instance. If you are using TypeScript with enabled `--strictPropertyInitialization` or `--strict` option, you can use `!` name suffix to not check property initialization.

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

### Arguments

| Name      | Type                                                     | Required | Default value             | Description                                    |
| --------- | -------------------------------------------------------- | -------- | ------------------------- | ---------------------------------------------- |
| `rpcName` | `string`                                                 | Yes      | -                         | Name of action (part or remote procedure name) |
| `type`    | [`EnvelopeType`](#/api/electron-rpc-types/envelope-type) | No       | `'EnvelopeType.BLOCKING'` | Type of RPC-request                            |

### Returns

`PropertyDecorator` - decorator which marks field as remote procedure calling method (type [`ServiceProcedure`](#/api/electron-rpc-client-services/service-procedure)). Class must be marked by [`Service`](#/api/electron-rpc-client-services/service) decorator.
