"use client";

import React from "react";
import { useEffect, useState } from "react";
import { useContactForm } from "@/hooks/useContactForm";
import ListPageTitle from "@/components/PortfolioAndBlog/ListPageTitle";
import { useScrollRestoration } from "@/hooks/useScrollRestoration";
import Loader from "@/components/PortfolioAndBlog/Loader";
import { usePageLoading } from "@/hooks/usePageLoading";
import {
  contactStyle,
  thanksStyle,
  thanksTitleStyle,
  thanksTextStyle,
  errorStyle,
  formStyle,
  formContentStyle,
  fromLavelStyle,
  formInputStyle,
  formTextareaStyle,
  submitStyle,
  submitButtonStyle,
} from "./style.css";
import breakpoints from "@/theme/breakpoints";

export default function Contact() {
  const {
    formData,
    isSubmitting,
    error,
    submitted,
    handleChange,
    handleSubmit,
  } = useContactForm();

  // スクロール保持
  useScrollRestoration();

  // ページの全リソース（画像・CSSなど含む）が読み込まれたかどうかを判定するカスタムフック
  const loaded = usePageLoading();

  // メッセージエリアの行数設定（タブレット幅以上は12行）
  const [rows, setRows] = useState(6);
  useEffect(() => {
    const updateRows = () => {
      if (window.innerWidth >= breakpoints.tablet) {
        setRows(12);
      } else {
        setRows(6);
      }
    };
    updateRows();
    window.addEventListener("resize", updateRows);

    return () => {
      window.removeEventListener("resize", updateRows);
    };
  }, []);

  // ReactのSSR環境対応（マウント後に表示する）
  const [hasMounted, setHasMounted] = useState(false);
  useEffect(() => {
    setHasMounted(true);
  }, []);
  if (!hasMounted) return null;

  return (
    <>
      {!loaded && <Loader />}

      <div
        style={{
          opacity: loaded ? 1 : 0,
          transition: "opacity 0.6s ease-in-out",
        }}
      >
        <ListPageTitle title="Contact" isBorder={false} />
        <div className={contactStyle}>
          {submitted ? (
            <div className={thanksStyle}>
              <span className={thanksTitleStyle}>Thank You!</span>
              <span className={thanksTextStyle}>
                返信があるまで少々お待ちください。
              </span>
            </div>
          ) : (
            <>
              {error && <p className={errorStyle}>{error}</p>}

              <form onSubmit={handleSubmit} className={formStyle}>
                <div className={formContentStyle}>
                  <label className={fromLavelStyle}>name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    disabled={isSubmitting}
                    required
                    className={formInputStyle}
                  />
                </div>
                <div className={formContentStyle}>
                  <label className={fromLavelStyle}>address</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    disabled={isSubmitting}
                    required
                    className={formInputStyle}
                  />
                </div>
                <div className={formContentStyle}>
                  <label className={fromLavelStyle}>title</label>
                  <input
                    type="text"
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
                    disabled={isSubmitting}
                    required
                    className={formInputStyle}
                  />
                </div>
                <div className={formContentStyle}>
                  <label className={fromLavelStyle}>message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    disabled={isSubmitting}
                    required
                    rows={rows}
                    className={formTextareaStyle}
                  />
                </div>
                <div className={submitStyle}>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={submitButtonStyle}
                  >
                    {isSubmitting ? "Sending..." : "Send"}
                  </button>
                </div>
              </form>
            </>
          )}
        </div>
      </div>
    </>
  );
}
