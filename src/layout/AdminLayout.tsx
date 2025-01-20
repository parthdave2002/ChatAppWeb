import {  FC } from "react";
import { TbMessageChatbot  } from "react-icons/tb";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

interface AuthProps{
    children : string;
}

const AdminLayout: FC<AuthProps>= function ( {children}) {
  return (
    <div className=" ">
        <Header  />
            <div> {children} </div>
        <Footer />
    </div>
  );
};

export default AdminLayout;
