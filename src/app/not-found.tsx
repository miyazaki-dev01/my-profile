import { NotFoundPage } from "@/features/not-found";
import { HtmlDarkModeWrapper } from "@/providers/HtmlDarkModeWrapper";

export default function NotFoundPageRoute() {
  return (
    <HtmlDarkModeWrapper>
      <NotFoundPage />
    </HtmlDarkModeWrapper>
  );
}
