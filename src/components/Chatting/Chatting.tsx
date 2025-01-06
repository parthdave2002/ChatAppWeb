import { FC, useState, Fragment } from "react";
import { FaPhone, FaVideo } from "react-icons/fa6";
import { HiDotsVertical } from "react-icons/hi";
import Profile from "../../../public/img/picture_profile_girl.png"
import Phone  from "../../assets/icon/telephone.png";
import VideoCall from "../../assets/icon/videocall.png";
import Notification from "../../assets/icon/notification.png";
import { Dialog, Transition } from '@headlessui/react'

const Chatting: FC = function () {

  const [ProfileModal, setProfileModal] = useState(false);
  const OpenProfile = () => {
    setProfileModal(!ProfileModal)
  }

  const BackCall = () =>{
    console.log("back call");
  }

  return (
        <div className="flex flex-col min:h-full">
            <div className="border-b py-2  flex justify-between">
                    <div className="flex gap-x-2">
                      <div className="cursor-pointer block md:hidden" onClick={() => BackCall()}> -- </div>
                        <div className="cursor-pointer" onClick={() => OpenProfile() }> <img src={Profile} className="h-[2.5rem] w-[2.5rem] md:w-[3rem] md:h-[3rem]" /> </div>
                        <div className="flex flex-col align-center justify-center dark:text-gray-50"> 
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

          <Transition appear show={ProfileModal} as={Fragment}>
            <Dialog as="div" className="relative z-10" onClose={() => OpenProfile()}>
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <div className="fixed inset-0 bg-black/25" />
              </Transition.Child>

              <div className="fixed inset-0 overflow-y-auto  backdrop-blur-md">
                <div className="flex min-h-full items-center justify-center p-4 text-center">
                  <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0 scale-95"
                    enterTo="opacity-100 scale-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100 scale-100"
                    leaveTo="opacity-0 scale-95"
                  >
                    <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-transparent backdrop-blur-md text-left align-middle  transition-all rounded-full">
                      <div className="mt-2">  <img  src={Profile}   alt="" className="self-center rounded-full" />   </div>
                    </Dialog.Panel>
                  </Transition.Child>
                </div>
              </div>
            </Dialog>
          </Transition>

        </div>      
  );
};

export default Chatting;
