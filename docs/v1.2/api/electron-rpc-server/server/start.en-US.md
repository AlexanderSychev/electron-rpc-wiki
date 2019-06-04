## `public start(): void`

Start RPC server - attach listeners to request and response events.

In Main Process will be the safest to run this method **after browser window creation** (`ready` event for all platforms and `activate` event for MacOS).
