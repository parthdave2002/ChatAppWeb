import { FC } from "react";
import { useTranslation } from "react-i18next";

const Notification: FC = function () {

  const { t  } = useTranslation();

  const data =[
    {
      profile: "",
      name:"Lukha Lashan",
      message : "Hii, bro!!!"
    },
    {
      profile: "",
      name:"Lukha Lashan",
      message : "Hello, bro"
    },
    {
      profile: "",
      name:"Lukha Lashan",
      message : "Hii, bro!!!"
    },
  ]

  return (
    <div className="p-3 shadow shadow-md  min-h-full max:h-full bg-gray-50 dark:bg-darkacardcolor rounded-xl">
            <div className="text-gray-800 text-[1.2rem] font-bold dark:text-gray-50 pb-1"> {t("Notification")} </div>
    </div>
  );
};

export default Notification;
