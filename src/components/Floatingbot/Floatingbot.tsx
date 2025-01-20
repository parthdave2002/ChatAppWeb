import { FC } from "react";
import { TbMessageChatbot  } from "react-icons/tb";

const Floatingbot: FC = function () {
  return (
    <div className= "fixed z-50  transition-transform w-full lg:w-[30%] bottom-0 lg:bottom-5 lg:left-5 dark:bg-gray-800 bg-themecolor text-white p-4  shadow-2xl  shadow-gray-500/50 rounded-xl  animate-slideUp" >
    <div className="dark:text-gray-50 text-gray-100 text-center">
    We use cookies to enhance your experience. By continuing, you agree to
    our use of cookies.
   
  </div>
 
</div>
  );
};

export default Floatingbot;
