console.log("[plugin] before mkdir");
// The line below is the POINT.
await Deno.mkdir("/tmp/foo", { recursive: true });
console.log("[plugin] after mkdir");

export function main() {
  console.log("[plugin] success");
}
console.log("[plugin] loaded");
