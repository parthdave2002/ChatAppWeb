import { FC } from "react";
import { FaPhone, FaVideo } from "react-icons/fa6";
import { HiDotsVertical } from "react-icons/hi";
import Profile from "../../../public/img/picture_profile_girl.png"
import Phone  from "../../assets/icon/telephone.png";
import VideoCall from "../../assets/icon/videocall.png";
import Notification from "../../assets/icon/notification.png";

const Chatting: FC = function () {

  const BackCall = () =>{
    console.log("back call");
  }

  return (
        <div className="flex flex-col min:h-full">
            <div className="border-b py-2  flex justify-between">
                    <div className="flex gap-x-2">
                    <div className="cursor-pointer block md:hidden" onClick={() => BackCall()}> -- </div>
                      <div> <img src={Profile} className="h-[2.5rem] w-[2.5rem] md:w-[3rem] md:h-[3rem]" /> </div>
                      <div className="flex flex-col align-center justify-center"> 
                            <div className="text-[1rem] md:text-[1.2rem] truncate font-semibold leading-[1rem] md:leading-[1.5rem]"> Demo User </div>
                            <div className="text-[0.8rem]  md:text-[0.9rem]  leading-[1.2rem]"> online </div>
                      </div>
                    </div>

                      <div className="flex gap-x-3 justify-center self-center cursor-pointer"> 
                        <div> 
                            <img
                              src={Phone} 
                              alt=""
                              className="h-[1.8rem] w-[1.8rem] self-center"
                            />  
                        </div>
                        <div>

                          <img
                              src={VideoCall} 
                              alt=""
                              className="h-[1.8rem] w-[1.8rem] self-center"
                            />   
                           </div>
                        {/* <div> <HiDotsVertical  /> </div> */}
                      </div>
            </div>

            <div className="p-2 flex justify-center self-center align-center">
                <h2> Welcome </h2>

            </div>

        </div>      
  );
};

export default Chatting;
