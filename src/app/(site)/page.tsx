import { META_TEXT } from "@/constants/metaTexts";
import { createMetadata } from "@/libs/metadata";
import { ProfilePage } from "@/features/profile";
import { getProfileData } from "@/features/profile/api/getProfileData";

export const metadata = createMetadata(META_TEXT.pages.profile);

export default async function ProfilePageRoute() {
  const profileData = await getProfileData();

  return <ProfilePage profileData={profileData} />;
}
