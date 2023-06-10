const worker = new Worker(new URL("./worker.ts", import.meta.url).href, {
  type: "module",
});
setTimeout(() => worker.terminate(), 1000);
