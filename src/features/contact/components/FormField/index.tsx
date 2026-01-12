"use client";

import * as styles from "./style.css";

type BaseProps = {
  id: string;
  label: string;
  value: string;
  placeholder: string;
  maxLength: number;
  caption?: string;
  error?: string;
  onBlur: () => void;
  onChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
};

type InputProps = BaseProps & {
  as?: "input";
  type?: React.HTMLInputTypeAttribute;
};

type TextareaProps = BaseProps & {
  as: "textarea";
};

type Props = InputProps | TextareaProps;

export function FormField(props: Props) {
  const {
    id,
    label,
    value,
    placeholder,
    maxLength,
    caption,
    error,
    onBlur,
    onChange,
  } = props;

  const isTextarea = props.as === "textarea";

  return (
    <div>
      <label className={styles.label} htmlFor={id}>
        {label}
      </label>

      {isTextarea ? (
        <div
          className={`${styles.inputBase} ${styles.textarea} ${
            error ? styles.inputError : ""
          }`}
        >
          <textarea
            id={id}
            value={value}
            placeholder={placeholder}
            maxLength={maxLength}
            onBlur={onBlur}
            onChange={onChange}
            className={`${styles.defaultInput} ${styles.inputTextarea} ${
              error ? styles.textError : ""
            }`}
            aria-invalid={!!error}
          />
        </div>
      ) : (
        <div
          className={`${styles.inputBase} ${styles.input} ${
            error ? styles.inputError : ""
          }`}
        >
          <input
            id={id}
            type={props.type ?? "text"}
            value={value}
            placeholder={placeholder}
            maxLength={maxLength}
            onBlur={onBlur}
            onChange={onChange}
            className={`${styles.defaultInput} ${
              error ? styles.textError : ""
            }`}
            aria-invalid={!!error}
          />
        </div>
      )}

      {error ? (
        <p className={`${styles.captionBase} ${styles.error}`}>{error}</p>
      ) : caption ? (
        <p className={`${styles.captionBase} ${styles.captionDefault}`}>
          {caption}
        </p>
      ) : (
        <p className={`${styles.captionBase} ${styles.captionNone}`}></p>
      )}
    </div>
  );
}
