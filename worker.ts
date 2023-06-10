const mod = await import(new URL("./plugin.ts", import.meta.url).href);
console.log("[worker] mod loaded");
const main = mod.main;
console.log("[worker] before main");
main();
console.log("[worker] after main");
