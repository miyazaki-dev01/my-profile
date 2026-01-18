import { META_TEXT } from "@/constants/metaTexts";
import { createMetadata } from "@/libs/metadata";
import { ContactCompletePage } from "@/features/contact/pages/complete";

export const metadata = createMetadata(META_TEXT.pages.contactComplete);

export default function ContactCompletePageRoute() {
  return <ContactCompletePage />;
}
