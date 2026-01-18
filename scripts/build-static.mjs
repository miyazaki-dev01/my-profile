import {
  readFileSync,
  writeFileSync,
  mkdtempSync,
  rmSync,
  existsSync,
} from "node:fs";
import { resolve, join } from "node:path";
import { tmpdir } from "node:os";
import { spawnSync } from "node:child_process";

const stub = `export const dynamic = "force-static";

export function GET() {
  return new Response("Draft preview is disabled on static builds.", {
    status: 404,
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
`;

const routes = [
  "src/app/api/preview/enable/route.ts",
  "src/app/api/preview/disable/route.ts",
];

const backupDir = mkdtempSync(join(tmpdir(), "preview-routes-"));

function backupName(p) {
  return join(backupDir, p.replace(/\//g, "__"));
}

/*
  build:static 専用スクリプト。

  目的:
  - 静的ビルドではプレビュー API を使えないため、
    ビルドが通るように route.ts を一時的に静的スタブへ差し替える。
  - 通常の `npm run dev` / `npm run build` では動的実装が維持される。

  処理の流れ:
  1) 対象の API ルート（/api/preview/enable, /api/preview/disable）の
    現在の route.ts を一時ディレクトリに退避する。
  2) それらの route.ts を、静的ビルド用のスタブ実装に置き換える。
  3) STATIC_EXPORT=true で `next build` を実行する。
  4) 成否に関わらず finally で退避した route.ts を元に戻す。
  5) 一時ディレクトリを削除する。
*/
try {
  for (const p of routes) {
    const abs = resolve(p);
    if (!existsSync(abs)) continue;
    writeFileSync(backupName(p), readFileSync(abs, "utf8"), "utf8");
    writeFileSync(abs, stub, "utf8");
  }

  const r = spawnSync("npm", ["run", "build:static:inner"], {
    stdio: "inherit",
    env: { ...process.env, STATIC_EXPORT: "true" },
  });

  if (r.error) throw r.error;
  process.exitCode = r.status ?? 1;
} finally {
  for (const p of routes) {
    const abs = resolve(p);
    const b = backupName(p);
    if (!existsSync(b)) continue;
    try {
      writeFileSync(abs, readFileSync(b, "utf8"), "utf8");
    } catch (e) {
      console.error("[warn] failed to restore:", abs, e);
    }
  }
  try {
    rmSync(backupDir, { recursive: true, force: true });
  } catch {}
}
