## Утилиты ElectronRPC

### Что это?

Это пакет с набором общих утилит (функций и классов) для всех пакетов ElectronRPC.

### Установка

```bash
# Через NPM
npm install electron-rpc-utils --save
# Или через Yarn
yarn add electron-rpc-utils --save
```

#### `isNil(value: any): is null | undefined`

##### Аргументы

| Имя     | Тип   | Описание             |
| ------- | ----- | -------------------- |
| `value` | `any` | Проверяемое значение |

##### Возвращает

`true` если `value` равно `null` или `undefined`. Для любых других значений возвращает `true`

#### `resolve(params?: ChannelsNamesParameters | null | undefined): ChannelsNamesProperties`

##### Аргументы

| Имя      | Тип                                                  | Обязательный | Описание                |
| -------- | ---------------------------------------------------- | ------------ | ----------------------- |
| `params` | `ChannelsNamesParameters` или `null` или `undefined` | Нет          | Параметры для обработки |

##### Returns

`ChannelsNamesProperties` - разрешенные имена IPC-каналов для запросов и ответов.

#### `abstract class Loggable`

Абстрактная логгируемая сущность.

##### Конструктор

###### `protected new Loggable()`

Абстрактный класс, конструктор без аргументов

```typescript
import { Loggable } from 'electron-rpc-utils';
export class MyClass {
    public constructor() {
        super();
    }
}
```

##### Методы

###### `public setRequestLogger(requestLogger: RequestLoggingFunction | null): void`

Задать функцию логгирования запросов. Для удаления существующей функции передавайте `null`.

_Аргументы_

| Имя             | Тип                                 | Описание                        |
| --------------- | ----------------------------------- | ------------------------------- |
| `requestLogger` | `RequestLoggingFunction` или `null` | Функция логгирования или `null` |

###### `public setSuccessLogger(requestLogger: RequestLoggingFunction | null): void`

Задать функцию логгирования успешного выполнения. Для удаления существующей функции передавайте `null`.

_Arguments_

| Имя             | Тип                                 | Описание                        |
| --------------- | ----------------------------------- | ------------------------------- |
| `successLogger` | `SuccessLoggingFunction` или `null` | Функция логгирования или `null` |

###### `public setErrorLogger(errorLogger: RequestLoggingFunction | null): void`

Задать функцию логгирования ошибок выполнения. Для удаления существующей функции передавайте `null`.

_Аргументы_

| Имя           | Тип                               | Описание                        |
| ------------- | --------------------------------- | ------------------------------- |
| `errorLogger` | `ErrorLoggingFunction` или `null` | Функция логгирования или `null` |

###### `protected logRequest(envelope: Envelope, args: any[]): void`

Логировать запрос (если логгиррующая функция не задана, не сделает ничего)

_Аргументы_

| Имя        | Тип        | Описание                      |
| ---------- | ---------- | ----------------------------- |
| `envelope` | `Envelope` | Общие данные конверта         |
| `args`     | `any[]`    | Аргументы удаленной процедуры |

###### `protected logSuccess(envelope: Envelope, args: any[], response: any): void`

Логировать успешное выполнение (если логгиррующая функция не задана, не сделает ничего)

_Аргументы_

| Имя        | Тип        | Описание                      |
| ---------- | ---------- | ----------------------------- |
| `envelope` | `Envelope` | Общие данные конверта         |
| `args`     | `any[]`    | Аргументы удаленной процедуры |
| `response` | `any`      | Результат удаленной процедуры |

###### `protected logError(envelope: Envelope, args: any[], error: string): void`

Логировать ошибку выполнения (если логгиррующая функция не задана, не сделает ничего)

_Аргументы_

| Имя        | Тип        | Описание                      |
| ---------- | ---------- | ----------------------------- |
| `envelope` | `Envelope` | Общие данные конверта         |
| `args`     | `any[]`    | Аргументы удаленной процедуры |
| `error`    | `string`   | Ошибка удаленной процедуры    |
