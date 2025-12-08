import React from "react";
import { ProfilePage } from "@/features/profile";
import { getProfileData } from "@/features/profile/api/getProfileData";

export default async function ProfilePageRoute() {
  const profileData = await getProfileData();

  return <ProfilePage profileData={profileData} />;
}
