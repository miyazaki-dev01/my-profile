import { NotFoundPage } from "@/features/not-found";
import { HtmlDarkProvider } from "@/features/not-found/provider/HtmlDarkProvider";

export default function NotFoundPageRoute() {
  return (
    <HtmlDarkProvider>
      <NotFoundPage />
    </HtmlDarkProvider>
  );
}
