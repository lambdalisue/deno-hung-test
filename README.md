# deno-hung-test

Running `worker.ts` works as expected (run worker script directly)

```
$ deno run -A ./worker.ts
[plugin] before mkdir
[plugin] after mkdir
[plugin] loaded
[worker] mod loaded
[worker] before main
[plugin] success
[worker] after main
```

But running `test.ts` fails (run worker script through Worker)

```
$ deno run -A ./test.ts
[plugin] before mkdir
[plugin] after mkdir
[plugin] loaded
```

If we remove `await Deno.mkdir("/tmp/foo", { ... })` line from `plugin.ts`,
running `test.ts` success

```
$ deno run -A ./test.ts
[plugin] before mkdir
[plugin] after mkdir
[plugin] loaded
[worker] mod loaded
[worker] before main
[plugin] success
[worker] after main
```
