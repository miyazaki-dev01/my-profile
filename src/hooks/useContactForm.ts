import { useState, useEffect } from "react";
import { z } from "zod";

// fetch タイムアウト（ms）
const DEFAULT_TIMEOUT_MS = 10_000;

// APIエンドポイント
const API_ENDPOINT = process.env.NEXT_PUBLIC_CONTACT_API_ENDPOINT;

// 入力スキーマ
const ContactSchema = z.object({
  name: z.string().min(1, "お名前は必須です").max(100, "お名前が長すぎます"),
  email: z.email("メールアドレスの形式が正しくありません").max(100),
  title: z.string().min(1, "件名は必須です").max(300, "件名が長すぎます"),
  message: z
    .string()
    .min(1, "メッセージは必須です")
    .max(5000, "メッセージが長すぎます"),
});
type ContactInput = z.infer<typeof ContactSchema>;

// タイムアウト付き fetch
async function fetchWithTimeout(
  input: RequestInfo | URL,
  init: RequestInit = {},
  timeoutMs = DEFAULT_TIMEOUT_MS
): Promise<Response> {
  const controller = new AbortController();
  const id = setTimeout(() => controller.abort(), timeoutMs);
  try {
    return await fetch(input, { ...init, signal: controller.signal });
  } finally {
    clearTimeout(id);
  }
}

// お問い合わせフォーム用フック
export const useContactForm = () => {
  // フォーム入力値
  const [formData, setFormData] = useState<ContactInput>({
    name: "",
    email: "",
    title: "",
    message: "",
  });

  // 送信中フラグ
  const [isSubmitting, setIsSubmitting] = useState(false);

  // 表示用エラーメッセージ
  const [error, setError] = useState("");

  // 送信済み（Thanks表示切替）
  const [submitted, setSubmitted] = useState(false);

  // 初回マウント時に送信済み状態を復元
  useEffect(() => {
    if (typeof window !== "undefined") {
      const saved = sessionStorage.getItem("submitted");
      if (saved === "true") setSubmitted(true);
    }
  }, []);

  // 入力変更ハンドラ
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setError("");
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // 送信ハンドラ
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    try {
      // 送信先設定チェック
      if (!API_ENDPOINT) {
        setError("送信先の設定が見つかりません。管理者にご連絡ください。");
        return;
      }

      // クライアント側バリデーション
      const parsed = ContactSchema.safeParse(formData);
      if (!parsed.success) {
        const msg =
          parsed.error.issues[0]?.message ?? "入力内容をご確認ください。";
        setError(msg);
        return;
      }

      // 送信（CORS前提・識別ヘッダ付き）
      const res = await fetchWithTimeout(
        API_ENDPOINT,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "X-Requested-With": "XMLHttpRequest",
          },
          body: JSON.stringify(parsed.data),
          mode: "cors", // クロスオリジン
          credentials: "omit", // Cookie 送信なし
        },
        DEFAULT_TIMEOUT_MS
      );

      // 成功（2xx）
      if (res.ok) {
        setFormData({ name: "", email: "", title: "", message: "" });
        setSubmitted(true);
        if (typeof window !== "undefined") {
          sessionStorage.setItem("submitted", "true");
        }
      } else {
        // サーバからのエラーメッセージを取得
        let msg = "送信に失敗しました。";
        try {
          const data = await res.json();
          if (typeof data?.message === "string") msg = data.message;
        } catch {}

        if (res.status === 400) {
          setError(msg || "入力内容に誤りがあります。");
        } else if (res.status === 429) {
          setError(
            msg || "送信が集中しています。しばらくして再度お試しください。"
          );
        } else if (res.status === 403) {
          setError(msg || "送信元が許可されていません。（CORS設定を確認）");
        } else {
          setError(msg || "サーバーエラーが発生しました。");
        }
      }
    } catch (err) {
      console.error(err);
      setError(
        "ネットワークエラーが発生しました。通信環境をご確認のうえもう一度お試しください。"
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    formData,
    isSubmitting,
    error,
    submitted,
    handleChange,
    handleSubmit,
  };
};
