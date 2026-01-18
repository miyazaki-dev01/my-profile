"use client";

import { useEffect } from "react";

let lockCount = 0;
let prevOverflow: string | null = null;

/**
 * body のスクロールをロックする（参照カウント方式）
 * - 複数箇所で同時にロックしても最後に解除された時だけ元に戻す
 */
export function useBodyScrollLock(locked: boolean) {
  useEffect(() => {
    if (!locked) return;

    const body = document.body;

    if (lockCount === 0) {
      prevOverflow = body.style.overflow;
      body.style.overflow = "hidden";
    }

    lockCount += 1;

    return () => {
      lockCount = Math.max(0, lockCount - 1);

      if (lockCount === 0) {
        document.body.style.overflow = prevOverflow ?? "";
        prevOverflow = null;
      }
    };
  }, [locked]);
}
