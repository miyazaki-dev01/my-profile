import { createClient } from "microcms-js-sdk";

const SERVICE_DOMAIN = process.env.MICROCMS_SERVICE_DOMAIN;
const API_KEY = process.env.MICROCMS_API_KEY;

if (!SERVICE_DOMAIN) {
  throw new Error("MICROCMS_SERVICE_DOMAIN is required");
}
if (!API_KEY) {
  throw new Error("MICROCMS_API_KEY is required");
}

export const microcmsClient = createClient({
  serviceDomain: SERVICE_DOMAIN,
  apiKey: API_KEY,
});
