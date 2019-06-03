## `interface Envelope`

Common signature for RPC requests and responses.

### Fields:

| Name        | Type           | Is required | Description                          |
| ----------- | -------------- | ----------- | ------------------------------------ |
| `uuid`      | `string`       | Yes         | Envelope unique identifier (UUID v4) |
| `type`      | `EnvelopeType` | Yes         | Envelope type                        |
| `procedure` | `string`       | Yes         | name of procedure                    |
