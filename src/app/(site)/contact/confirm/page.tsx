import { META_TEXT } from "@/constants/metaTexts";
import { createMetadata } from "@/libs/metadata";
import { ContactConfirmPage } from "@/features/contact/pages/confirm";

export const metadata = createMetadata(META_TEXT.pages.contactConfirm);

export default function ContactConfirmPageRoute() {
  return <ContactConfirmPage />;
}
