# GitHub Action using .NET WASI

This is a sample GitHub Action using .NET's experimental WASI support.

## Prerequisites

- [.NET 8 Preview 7 or later][dotnet-8]
- The experimental `dotnet-wasi` workload
  - `dotnet workload install wasi-experimental`
- The official [WASI SDK][wasi-sdk]
  - Set the `WASI_SDK_PATH` environment variable to the path of the WASI SDK

## Building

```sh
dotnet publish --configuration Release -p:WasmPublishPath=$PWD/dist
```

[dotnet-8]: https://dotnet.microsoft.com/en-us/download/dotnet/8.0
[wasi-sdk]: https://github.com/WebAssembly/wasi-sdk/releases