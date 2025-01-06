import {  FC, ReactNode  } from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import FloatingCookies from "../components/Floatingbot/FloatingCookies";

interface AuthProps{
    children : ReactNode;
}

const NonAuthLayout: FC<AuthProps>= function ( {children}) {
  return (
    <div className="w-screen min-h-screen  dark:bg-darkacardcolor">
        <Header  />
            <div> {children} </div>
            <FloatingCookies />
        <Footer />
       
    </div>
  );
};

export default NonAuthLayout;
