import { FC } from "react";
import { TbMessageChatbot  } from "react-icons/tb";

const Floatingbot: FC = function () {
  return (
    <div className=" z-99 border p-2 rounded-full bg-[#6328d6] w-fit right-0 top-[5rem]">
        <TbMessageChatbot  />
    </div>
  );
};

export default Floatingbot;
