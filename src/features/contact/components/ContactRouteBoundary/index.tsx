"use client";

import { ContactFormProvider } from "@/features/contact/providers/ContactFormProvider";

type Props = {
  isContactRoute?: boolean;
  children: React.ReactNode;
};

/**
 * /contact 配下だけ ContactFormProvider を適用する境界コンポーネント。
 * - BaseSiteLayout の Fade は pathname 変更で再マウントされるため、
 *   /contact → /contact/confirm 遷移時にフォーム状態が消えないようにする。
 * - /contact 以外ではラップせず、そのまま children を返す。
 */
export function ContactRouteBoundary({ isContactRoute, children }: Props) {
  if (!isContactRoute) return <>{children}</>;
  return <ContactFormProvider>{children}</ContactFormProvider>;
}
