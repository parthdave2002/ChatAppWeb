import { FC } from "react";
import Homepageimg from "../../../assets/dashboard-img.webp";
import Bannerimg from "../../../assets/banner-2.jpg";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router";
import Pricing from "../../../components/Pricing/Pricing";

const Home: FC = function () {

    const navigate = useNavigate()
     const { t  } = useTranslation();

     const TryCall = () =>{
      navigate("/login")
     }

     window.scrollTo({
      top:0,
      behavior: "smooth"
     })

  return (
    <>
      <div className=" dark:text-gray-300'">
          <img src={Bannerimg} className="lg:h-[20rem] w-full" />
      </div>
      <div className="lg:flex justify-around pt-3 ">
      <div className=" dark:text-gray-300'">
          <img src={Homepageimg} className="lg:h-[30rem] w-full" />
        </div>
        <div className=" flex flex-col self-center">
          <div className="text-[0.9rem] lg:text-[1.3rem] font-bold dark:text-gray-400 "> {t("Trusted by 350k+ users")} </div>
          <div className="bg-gradient-to-r from-indigo-600 via-indigo-400 to-indigo-300 text-transparent inline-block bg-clip-text text-[3rem] lg:text-[4.5rem] font-bold leading-tight self-center">  {t("Let's Chat")}</div>
          <div className="text-[1.2rem] lg:text-[1.5rem] font-bold bg-gray-200 hover:bg-black  border rounded-full text-center inline-block  cursor-pointer p-3  dark:bg-gray-900 dark:hover:bg-gray-200 m-3 lg:m-0" onClick={() => TryCall()}>
            <span className="bg-gradient-to-r from-indigo-600 via-indigo-500 to-indigo-400 bg-clip-text text-transparent hover:text-gray-100 dark:hover:text-gray-900">  {t("Try it out")}</span>
          </div>
        </div>
      </div>

      <div className="overflow-hidden whitespace-nowrap bg-gray-200  dark:bg-gray-400/40 h-8 md:h-12 flex items-center py-[3rem]">
        <div className="flex animate-marquee space-x-6 md:text-[1.3rem] self-center dark:text-gray-50">
          <span className="inline-block"> Let's Chat  </span>
          <span className="inline-block"> * </span>
          <span className="inline-block"> Let's Chat  </span>
          <span className="inline-block"> * </span>
          <span className="inline-block"> Let's Chat  </span>
          <span className="inline-block"> * </span>
          <span className="inline-block"> Let's Chat  </span>
          <span className="inline-block"> * </span>
          <span className="inline-block"> Let's Chat  </span>
          <span className="inline-block"> * </span>
          <span className="inline-block"> Let's Chat  </span>
          <span className="inline-block"> * </span>
          <span className="inline-block"> Let's Chat  </span>
          <span className="inline-block"> * </span>
          <span className="inline-block"> Let's Chat  </span>
          <span className="inline-block"> * </span>
          <span className="inline-block"> Let's Chat  </span>
          <span className="inline-block"> * </span>
          <span className="inline-block"> Let's Chat  </span>
          <span className="inline-block"> * </span>
          <span className="inline-block"> Let's Chat  </span>
          <span className="inline-block"> * </span>
        </div>
      </div>

      <Pricing />
    </>
  );
};

export default Home;
