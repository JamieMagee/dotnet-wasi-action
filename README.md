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

## Example

Check out the [test workflow runs][test-workflow] for a sample:

```sh
(node:1840) ExperimentalWarning: WASI is an experimental feature and might change at any time
(Use `node --trace-warnings ...` to show where the warning was created)
Hello, wasi-wasm Wasm!
```

[dotnet-8]: https://dotnet.microsoft.com/en-us/download/dotnet/8.0
[wasi-sdk]: https://github.com/WebAssembly/wasi-sdk/releases
[test-workflow]: https://github.com/JamieMagee/dotnet-wasi-action/actions/workflows/test.yaml