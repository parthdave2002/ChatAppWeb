import {  FC } from 'react';
import { useNavigate } from 'react-router';
import Logo from "../../../public/vite.svg";
import { FaFacebookF, FaGithub, FaInstagram } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';

const Footer : FC = function()  {
    const { t  } = useTranslation();
    const navigate = useNavigate();

  const Footerlink = [
    {
      name: "Terms & condition",
      url: "/terms",
    },
    {
      name: "Privacy policy",
      url: "/privacy",
    },
  ]

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

  const RedictCall = (data: string) => {
    navigate(data);
  };

  return (
    <div  className=' w-full p-4 sm:p-6 md:p-8 xl:px-10 xl:py-8 bg-black text-gray-500 flex flex-col gap-y-6 md:gap-y-2' >

        <div className='md:flex  md:justify-between  md:flex-row  flex flex-col gap-y-6  '>
          <div className='flex gap-x-4 justify-center md:justify-start cursor-pointer' onClick={() => RedictCall("/")}>
                <img src={Logo} alt="Chat App" className="h-10 w-10" />
          </div>

          <div className="flex gap-x-[2rem] md:gap-x-[1rem] justify-center self-center">
              {MainData.map((data: any, index: number) => (
                <div key={index} className="cursor-pointer hover:text-gray-100 " onClick={() => RedictCall(data.url)}>
                  {t(data.name)}
                </div>
              ))}
          </div>

          <div className="flex  gap-x-[1rem] justify-center self-center">
              <div className='p-1.5 border border-gray-500 hover:border-gray-300 cursor-pointer rounded-full hover:text-gray-100'>  <FaInstagram /> </div>
              <div className='p-1.5 border border-gray-500 hover:border-gray-300 cursor-pointer  rounded-full hover:text-gray-100'>  <FaFacebookF  /> </div>
              <div className='p-1.5 border border-gray-500 hover:border-gray-300 cursor-pointer rounded-full hover:text-gray-100'>  <FaGithub  /> </div>
          </div>
        </div>
        
        <div className="border border-gray-500/30"></div>

            <div className='md:flex md:justify-between md:flex-row md:items-center gap-y-4 flex flex-col'>
                <div className="flex gap-x-4 justify-center md:justify-start  self-center">   
                    {Footerlink.map((data: any, index: number) => (
                      <div key={index} className="cursor-pointer hover:text-gray-100 " onClick={() => RedictCall(data.url)}>
                        {t(data.name)}
                      </div>
                    ))}
                </div>

                <div className='flex justify-center text-sm md:text-base text-center  self-center'>
                      <div className='hover:text-gray-100'> © {t("Copyright 2024. All Rights Reserved")}. </div>
                </div>
          </div>
    </div>
  )
}

export default Footer;