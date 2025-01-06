import { useState, useEffect, FC } from "react";
import Logo from "../../../public/vite.svg";
import { HiMenu } from "react-icons/hi";
import { MdOutlineClose  } from "react-icons/md";
import { useNavigate } from "react-router";
import { DarkThemeToggle } from "flowbite-react";
import { useTranslation } from "react-i18next";

const Header: FC = function () {

  const { t } = useTranslation();

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };


  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsSticky(true);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navigate = useNavigate();
  const RedictCall = (data: string) => {
    navigate(data);
  };

  const MainData = [
    {
      name: "Dashboard",
      url: "/",
    },
    {
      name: "About",
      url: "/about",
    },
  ];

  const SubData = [
    {
      name: "Login",
      url: "/login",
    },
    {
      name: "Signup",
      url: "/signup",
    },
  ];

  return (
      <div className="w-full top-0 left-0 right-0">
        <nav className={`py-4 md:px-12 px-4 dark:bg-[#0f0715]  border-b dark:border-0 ${isSticky ? "sticky top-0 right-0 left-0 dark:bg-[#0f0715]" : "" }`}>
          <div className="flex items-center justify-between">
              <div className="cursor-pointer" onClick={() => RedictCall("/")}>
                <img src={Logo} alt="Chat App" className="h-10 w-10" />
              </div>
              <div className="lg:flex items-center gap-3 hidden dark:text-gray-400 text-gray-600 ">
                      {MainData.map((data: any, index: number) => (
                        <div key={index} className="cursor-pointer dark:hover:text-gray-100 hover:text-gray-900  py-2 px-4" onClick={() => RedictCall(data.url)}>
                          {t(data.name)}
                        </div>
                      ))}
              </div>

              <div className="lg:flex items-center gap-2 hidden dark:text-gray-400 text-gray-600">
                      {SubData.map((data: any, index: number) => (
                        <div key={index} className="cursor-pointer dark:hover:text-gray-100 hover:text-gray-900 py-2 px-2" onClick={() => RedictCall(data.url)}>
                          {t(data.name)}
                        </div>
                      ))}

                      <div >
                        <DarkThemeToggle className='bg-gray-100 dark:bg-gray-700 focus:ring-0 w-[2.5rem] float-right  rounded-full'/> 
                      </div>
              </div> 

                <button onClick={toggleMenu} className="lg:hidden dark:text-gray-100 text-gray-800 text-3xl">{isMenuOpen ?  <MdOutlineClose  /> : <HiMenu /> } </button>
          </div>

          {isMenuOpen && (
                <div className="mt-4 bg-body p-4 rounded-lg text-gray-800 dark:text-gray-100  cursor-pointer  flex flex-col gap-y-4">
                        {MainData.map((data: any, index: number) => (
                          <div key={index} className="cursor-pointer hover:text-gray-100 block" onClick={() => RedictCall(data.url)}>
                            {t(data.name)}
                          </div>
                        ))}
                        {SubData.map((data: any, index: number) => (
                        <div key={index} className="cursor-pointer hover:text-gray-100 block" onClick={() => RedictCall(data.url)}>
                          {t(data.name)}
                        </div>
                      ))}
                </div>
                
                
          )}
        </nav>
      </div>
  );
};

export default Header;
