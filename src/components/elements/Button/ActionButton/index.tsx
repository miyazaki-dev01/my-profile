import React from "react";
import { Spinner } from "@/components/elements/Spinner";
import { buttonBase, buttonColor } from "../style.css";
import * as styles from "./style.css";

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: keyof typeof buttonColor;
  isLoading?: boolean;
};

export function ActionButton({
  variant = "black",
  isLoading = false,
  className,
  children,
  disabled,
  ...rest
}: Props) {
  const isDisabled = disabled || isLoading;
  const spinnerColor = variant === "black" ? "white" : "black";

  return (
    <button
      {...rest}
      disabled={isDisabled}
      aria-busy={isLoading}
      data-loading={isLoading ? "true" : undefined}
      className={`${buttonBase} ${buttonColor[variant]} ${className ?? ""}`}
    >
      <span className={isLoading ? styles.hiddenLabel : ""}>{children}</span>
      {isLoading && (
        <span className={styles.spinner}>
          <Spinner size={22} color={spinnerColor} />
        </span>
      )}
    </button>
  );
}
