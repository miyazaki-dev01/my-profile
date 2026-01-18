import { META_TEXT } from "@/constants/metaTexts";
import { createMetadata } from "@/libs/metadata";
import { ContactPage } from "@/features/contact/pages/form";

export const metadata = createMetadata(META_TEXT.pages.contact);

export default function ContactPageRoute() {
  return <ContactPage />;
}
