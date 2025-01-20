import {  FC, ReactNode  } from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import FloatingCookies from "../components/Floatingbot/FloatingCookies";
import Floatingbot from '../components/Floatingbot/Floatingbot';

interface AuthProps{
    children : ReactNode;
}

const NonAuthLayout: FC<AuthProps>= function ( {children}) {
  return (
    <div className="w-screen min-h-screen flex flex-col justify-between dark:bg-darkacardcolor">
        <Header  />
            <div className=""> {children} </div>
            <div className="flex  justify-between">
                  <FloatingCookies />
                  {/* <Floatingbot /> */}
            </div>
        <Footer />
       
    </div>
  );
};

export default NonAuthLayout;
