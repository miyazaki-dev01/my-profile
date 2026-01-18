import { microcmsClient } from "@/libs/microcms";
import { MICROCMS_ENDPOINT } from "@/constants/microcms";
import type { ProfileData } from "@/features/profile/types/profileData";

const endpoint = MICROCMS_ENDPOINT.profile;

export async function getProfileData(): Promise<ProfileData> {
  const data = await microcmsClient.getObject<ProfileData>({
    endpoint: endpoint,
  });
  return data;
}
