import { FC, useState } from "react";
import SearchChat from "../../../components/Search/Search";
import Sidebar from "../../../components/Sidebar/Sidebar";
import { ChatGroup, ChatPeople } from "../../../components/Group/Group";
import Chatting from "../../../components/Chatting/Chatting";
import Notification from "../../../components/Notification/Notification";
import Setting from "../../../components/Setting/Setting";
import Profile from "../../../components/Profile/Profile";

const Chat: FC = function () {

  // -----------  Semisidebar code start -----------
    const [ Grop_module, set_Group_module] = useState("");
    const Semisidebar = (moduleName: string) =>{
      set_Group_module(moduleName)
    }
  // -----------  Semisidebar code end -----------

  // -----------  Chat Layout code start -----------
    const [ Show_Chat_module, set_Show_chat_module] = useState("");
    const Mainsidebar = (moduleName: string) =>{
      set_Show_chat_module(moduleName)
    }

    const ProfilecloseCall = ( ) =>{
      set_Show_chat_module("")
    }
  // -----------  Chat Layout code end -----------


  return (
    <div className=" w-screen h-screen  p-[1rem] lg:p-[1.5rem] bg-[#eff6fc] dark:bg-darkbackgoundcolor">

        <div className="flex gap-x-[1rem] min-h-full">
            <div className="hidden lg:block"><Sidebar  Grop_module={Semisidebar}  ShowMainsidebar={Mainsidebar} /> </div>

            <div className="flex flex-col gap-y-4 hidden md:block md:w-[30rem] justify-between"> 

              {Grop_module == "Notification" ?
                  <Notification />
                : Grop_module == "Setting" ?
                  <Setting  />
                : 
                  <div className="flex flex-col gap-y-4 h-full justify-between"> 
                    <div className=""> <SearchChat />  </div>
                    <div className="">  <ChatGroup />   </div> 
                    <div className=""> <ChatPeople /> </div>
                  </div>
              }

            </div>

            {  Show_Chat_module == "Profile"  ?
            <div className="p-2 md:p-3 shadow shadow-md w-screen bg-gray-50 dark:bg-darkacardcolor rounded-xl"> <Profile  CloseCall={ProfilecloseCall} /> </div>
              :
            <div className="p-2 md:p-3 shadow shadow-md w-screen bg-gray-50 dark:bg-darkacardcolor rounded-xl"> <Chatting /> </div>

            }
            
        </div>       
    </div>
  );
};

export default Chat;
