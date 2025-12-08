import { microcmsClient } from "@/libs/microcms";
import type { ProfileData } from "@/features/profile/types/profileData";

export async function getProfileData(): Promise<ProfileData> {
  const data = await microcmsClient.getObject<ProfileData>({
    endpoint: "profile",
  });
  return data;
}
