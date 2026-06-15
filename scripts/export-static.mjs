import { mkdir, writeFile } from "node:fs/promises";
import { resolve } from "node:path";

const repoName = process.env.GITHUB_REPOSITORY?.split("/")[1];
const base = process.env.GITHUB_ACTIONS && repoName ? `/${repoName}/` : "/";
const origin = "https://example.com";

const server = await import("../dist/server/server.js");
const handler = server.default ?? server;
const response = await handler.fetch(new Request(`${origin}${base}`), {}, {});

if (!response.ok) {
  throw new Error(`Static export failed: ${response.status} ${response.statusText}`);
}

let html = await response.text();

if (base !== "/") {
  const assetPrefix = base.replace(/\/$/, "");
  html = html
    .replaceAll('href="/assets/', `href="${assetPrefix}/assets/`)
    .replaceAll('src="/assets/', `src="${assetPrefix}/assets/`)
    .replaceAll('["/assets/', `["${assetPrefix}/assets/`)
    .replaceAll('="/assets/', `="${assetPrefix}/assets/`);
}

const outputDir = resolve("dist/client");

await mkdir(outputDir, { recursive: true });
await writeFile(resolve(outputDir, "index.html"), html);
await writeFile(resolve(outputDir, "404.html"), html);
await writeFile(resolve(outputDir, ".nojekyll"), "");

console.log(`Exported static site to ${outputDir}`);
