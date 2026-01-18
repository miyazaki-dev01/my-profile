import { z } from "zod";
import { CONTACT_TEXT } from "@/features/contact/constants/text";

const emailFormat = z.email({
  message: CONTACT_TEXT.validation.emailInvalid,
});

export const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(1, CONTACT_TEXT.validation.required)
    .max(100, CONTACT_TEXT.validation.max100),
  email: z
    .string()
    .trim()
    .min(1, CONTACT_TEXT.validation.required)
    .min(3, CONTACT_TEXT.validation.emailInvalid)
    .max(100, CONTACT_TEXT.validation.max100)
    .pipe(emailFormat),
  title: z
    .string()
    .trim()
    .min(1, CONTACT_TEXT.validation.required)
    .max(300, CONTACT_TEXT.validation.max300),
  message: z
    .string()
    .trim()
    .min(1, CONTACT_TEXT.validation.required)
    .max(5000, CONTACT_TEXT.validation.max5000),
});

export type ContactFormData = z.infer<typeof contactSchema>;
