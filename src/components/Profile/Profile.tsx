import { FC } from "react";
import ImageUploadPreview from "../../common/ImageUpload";
import { IoIosCloseCircle } from "react-icons/io";
import { useTranslation } from "react-i18next";

interface ProfileProps {
    CloseCall :  () => void;
}

const Profile: FC <ProfileProps> = function ({CloseCall}) {

    const { t  } = useTranslation();

  return (
    <div className="flex flex-col ">

        <div className="flex justify-between">
            <ImageUploadPreview />
            <div onClick={CloseCall} className="cursor-pointer dark:text-white  text-[1.6rem]"><IoIosCloseCircle />  </div>
        </div>

            <div>
                <div className="flex justify-around dark:text-gray-50 w-full">
                    <div> {t("Name")} : Parth Dave </div>
                    <div> {t("Email")} : Parth Dave </div>
                    <div> {t("Contact")} : Parth Dave </div>
                </div>
                <div className="flex justigy-end gap-x-[1rem] dark:text-gray-50 " >
              
                    <div className="cursor-pointer" onClick={CloseCall}> {t("Cancel")} </div>
                    <div className="cursor-pointer"> {t("Update")} </div>
                </div>
            </div>

            <div>
                <div className="flex justify-around w-full dark:text-gray-50">
                    <div> {t("Current Password")} : Parth Dave </div>
                    <div> {t("New Password")} : Parth Dave </div>
                    <div> {t("Confirm Password")} : Parth Dave </div> 
                </div>
                <div className="flex justigy-end gap-x-[1rem] dark:text-gray-50 " >
                    <div className="cursor-pointer" onClick={CloseCall}> {t("Cancel")} </div>
                    <div className="cursor-pointer"> {t("Update")} </div>
                </div>
            </div>
           

    </div>
  );
};

export default Profile;
