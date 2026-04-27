// Simple static-site "build": copy index.html and the public/ folder into dist/.
import { cp, mkdir, rm, copyFile } from "node:fs/promises";
import { existsSync } from "node:fs";

const dist = new URL("./dist/", import.meta.url);

await rm(dist, { recursive: true, force: true });
await mkdir(dist, { recursive: true });

await copyFile("index.html", new URL("index.html", dist));

if (existsSync("public")) {
  await cp("public", new URL("./", dist), { recursive: true });
}

console.log("✓ Static site built into dist/");
