import { FC } from "react";
import Profile from "../../../public/img/picture_profile_girl.png";
import Logout from "../../assets/icon/logout.png";
import Setting  from "../../assets/icon/setting.png";
import Users from "../../assets/icon/user-profile.png";
import Notification from "../../assets/icon/notification.png";
import Tooltip from "../../common/Tooltip";
import { useNavigate } from "react-router";

interface SidebarProps {
  Grop_module: (moduleName: string) => void;
  ShowMainsidebar: (moduleName: string) => void;
}


const Sidebar: FC <SidebarProps>= function ({Grop_module, ShowMainsidebar}) {

  const navigate = useNavigate()
  const Logoutcall = () =>{
    navigate("/")
  }

  const ItemCall = (data:string) =>{
    Grop_module(data)
  }

  const ProfileCall = (data:string) =>{
    ShowMainsidebar(data)
  }

  

    const DataName = [
        {
          name: "Users",
          image: Users, // Reference the imported image
        },
        {
          name: "Notification",
          image: Notification, // Reference the imported image
        },
        {
          name: "Setting",
          image: Setting, // Reference the imported image
        },
      ];

  return (
    <div className="p-[1rem] bg-[#01051b] dark:bg-darkbackgoundcolor rounded-md flex flex-col  justify-between md:min-h-full">

            <div className="flex  flex-col gap-y-3 align-center self-center">
                  <img  src={Profile} className="h-[3rem] w-[5rem] cursor-pointer"   onClick={() => ProfileCall("Profile")}/>
                    {DataName.map((data: any, index: number) => (
                        <div key={index} className="self-center my-2  cursor-pointer "  onClick={() => ItemCall(data.name)}>
                          <Tooltip  text={data.name}>
                              <img
                              src={data.image} 
                              alt={data.name} 
                              className="h-[2rem] w-[2rem] self-center"
                              />
                            </Tooltip>
                        </div>
                    ))}
            </div>

            <div className="align-center self-center cursor-pointer" onClick={() => Logoutcall() }>  <Tooltip  text="Logout"> <img  src={Logout} className="h-[2rem] w-[2rem]" /> </Tooltip> </div>
    </div>
  );
};

export default Sidebar;
