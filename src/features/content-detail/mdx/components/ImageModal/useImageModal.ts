"use client";

import { useCallback, useEffect, useRef, useState } from "react";

export const IMAGE_MODAL_FADE_MS = 300;

/**
 * 画像モーダルの表示状態を管理するフック
 * - open(url): モーダルを開き、表示する画像URL(src)をセットする
 * - close(): モーダルを閉じる（フェードアウト中も画像が消えないように src は遅延でクリア）
 * - フェードアウト完了(FADE_DURATION_MS)後に src を null にして、モーダルをアンマウント可能にする
 * - 連打/高速操作でタイマーが残らないように毎回 clearTimer で掃除する
 */
export function useImageModal() {
  const [src, setSrc] = useState<string | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const clearTimerRef = useRef<number | null>(null);

  const clearTimer = useCallback(() => {
    if (clearTimerRef.current !== null) {
      window.clearTimeout(clearTimerRef.current);
      clearTimerRef.current = null;
    }
  }, []);

  useEffect(() => {
    return () => clearTimer();
  }, [clearTimer]);

  const open = useCallback(
    (imageUrl: string) => {
      clearTimer();
      setSrc(imageUrl);
      setIsOpen(true);
    },
    [clearTimer]
  );

  const close = useCallback(() => {
    clearTimer();
    setIsOpen(false);

    clearTimerRef.current = window.setTimeout(() => {
      setSrc(null);
      clearTimerRef.current = null;
    }, IMAGE_MODAL_FADE_MS);
  }, [clearTimer]);

  return { src, isOpen, open, close };
}
