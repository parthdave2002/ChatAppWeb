import { FC } from "react";
import { FaSearch } from "react-icons/fa";
import { Input } from "reactstrap";

const SearchChat: FC = function () {
  return (
            <div className=" flex relative focus:ring-0  border-0 w-full ">
                <div className="absolute  flex self-center p-[0.7rem]"> <FaSearch /> </div>
                <div> <Input placeholder="Search"  className=" rounded-xl pl-10 border-0  focus:ring-0 shadow shadow-md  w-full" /> </div>
            </div>
  );
};

export default SearchChat;
