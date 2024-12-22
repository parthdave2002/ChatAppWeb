import { FC, } from "react";
import Profile from "../../../public/img/picture_profile_girl.png"
import { useTranslation } from "react-i18next";

export const ChatGroup: FC = function () {

     const { t  } = useTranslation();

    const Groupdata=[
        {
            profile: "",
            name:"TimePass",
            message: "Hiii",
            time: "10:02 p.m",
            pendingmessage: "14"
        },
        {
            profile: "",
            name: "Lukha Lashan",
            message: "Em naa hoy",
            time: "9:12 p.m",
            pendingmessage: ""
        },
        {
            profile: "",
            name: "Lukha Lashan",
            message: "Em naa hoy",
            time: "9:12 p.m",
            pendingmessage: ""
        }
    ]

  return (
    <div className=" px-3 py-2  shadow shadow-md bg-gray-50 dark:bg-darkacardcolor rounded-xl">
        <div className="text-gray-800 text-[1.2rem] font-bold dark:text-gray-50 pb-1"> {t("Group")} </div>
        <div>
            {Groupdata.map((data: any, index: number) => (
                        <div key={index} className={`cursor-pointer flex gap-x-1 py-1  ${ index !== Groupdata.length - 1 ? "border-b" : "" }`} >
                            <div><img  src={Profile} height="40" width="40" /></div>

                                <div className="flex-1 ">
                                    <div className="font-semibold  truncate dark:text-gray-50">{data.name}</div>
                                    <div className="text-sm text-gray-600 dark:text-gray-400 truncate ">  {data.message}  </div>
                                </div>

                                <div className="flex flex-col items-end self-center">
                                        <div className="text-sm text-gray-600 dark:text-gray-400">{data.time} </div>
                                        {data?.pendingmessage ?<div className="text-xs text-gray-100 bg-[#6328d6] px-2 py-1 border rounded-full">{data?.pendingmessage} </div> : null }
                                </div>
                        </div>
            ))}
        </div>
        
    </div>
  );
};

export const ChatPeople: FC = function () {

    const { t  } = useTranslation();
    
    const Peopledata=[
        {
            profile: "",
            name:"TimePass",
            message: "Hiii",
            time: "10:02 p.m",
            pendingmessage: ""
        },
        {
            profile: "",
            name: "Lukha Lashan",
            message: "Em naa hoy",
            time: "9:12 p.m",
            pendingmessage: ""
        },
        {
            profile: "",
            name: "Lukha Lashan",
            message: "Em naa hoy",
            time: "9:12 p.m",
            pendingmessage: ""
        },
        {
            profile: "",
            name: "Lukha Lashan",
            message: "Em naa hoy",
            time: "9:12 p.m",
            pendingmessage: ""
        },
       
    ]
    
  return (
    <div className=" px-3 py-2  shadow shadow-md bg-gray-50 dark:bg-darkacardcolor rounded-xl">
        <div className="text-gray-800 text-[1.2rem] font-bold dark:text-gray-50 pb-1"> {t("People")} </div>
        <div>
            {Peopledata.map((data: any, index: number) => (
                        <div key={index} className={`cursor-pointer flex gap-x-1 py-1  ${ index !== Peopledata.length - 1 ? "border-b" : "" }`}  >
                            <div><img  src={Profile} height="40" width="40" /></div>
                           
                                <div className="flex-1">
                                    <div className="font-semibold truncate dark:text-gray-50">{data.name}</div>
                                    <div className="text-sm text-gray-600 dark:text-gray-400 truncate">  {data.message}  </div>
                                </div>

                                <div className="flex flex-col items-end self-center">
                                    <div className="text-sm text-gray-600 dark:text-gray-400">{data.time}</div>
                                        {data?.pendingmessage ? (
                                            <div className="text-xs text-gray-100 bg-[#6328d6] px-2 py-1 border rounded-full">
                                                {data?.pendingmessage}
                                            </div>
                                        ) : null}
                            </div>
                        </div>
            ))}
        </div>
        
    </div>
  );
};
