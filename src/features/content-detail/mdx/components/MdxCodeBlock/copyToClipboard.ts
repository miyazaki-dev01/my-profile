"use client";

/**
 * クリップボードコピー
 * - navigator.clipboard.writeText を試す
 * - ダメなら execCommand('copy') にフォールバック
 * - 成否を boolean で返す
 */
export async function copyToClipboard(text: string): Promise<boolean> {
  // 1) Clipboard API（使えるなら最優先）
  try {
    if (navigator.clipboard?.writeText) {
      await navigator.clipboard.writeText(text);
      return true;
    }
  } catch {
    // 失敗したらフォールバック
  }

  // 2) フォールバック（execCommand）
  try {
    const active = document.activeElement as HTMLElement | null;

    const ta = document.createElement("textarea");
    ta.value = text;

    // 画面のスクロールやレイアウトを崩さず、見えないようにする
    ta.setAttribute("readonly", "");
    ta.style.position = "fixed";
    ta.style.top = "0";
    ta.style.left = "0";
    ta.style.opacity = "0";
    ta.style.pointerEvents = "none";

    document.body.appendChild(ta);
    ta.focus();
    ta.select();

    const ok = document.execCommand("copy");
    document.body.removeChild(ta);

    // UX: 元のフォーカスを戻す
    active?.focus?.();

    return ok;
  } catch {
    return false;
  }
}
