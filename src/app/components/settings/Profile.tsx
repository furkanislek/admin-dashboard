"use client";
import { User } from "lucide-react";
import dynamic from "next/dynamic";

 const SettingSection = dynamic(() => import("./SettingSection"), {
    ssr: false,
  });

const Profile = () => {
  return (
    <SettingSection icon={User} title={"Profile"}>
      <div className="flex flex-col sm:flex-row items-center mb-6">
        <img
          src="https://media.licdn.com/dms/image/v2/D4D03AQHqr5scQULegg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1670068800956?e=1744243200&v=beta&t=R8W7bgBKrBWgGu7DLXgrTxcPOrh61omJsTAVnprRZaQ"
          alt="Profile"
          className="rounded-full w-20 h-20 object-cover mr-4"
        />

        <div>
          <h3 className="text-lg font-semibold text-gray-100">
            Furkan Akif ISLEK
          </h3>
          <p className="text-gray-400">furkanakifislek@gmail.com</p>
        </div>
      </div>

      <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded transition duration-200 w-full sm:w-auto">
        Edit Profile
      </button>
    </SettingSection>
  );
};
export default Profile;
