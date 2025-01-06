import { FC } from "react";
import Header from "../../../components/Header/Header";
import Footer from "../../../components/Footer/Footer";
import Homepageimg from "../../../assets/fashion-8829861_1280.jpg";
import Meetingimg from "../../../assets/group.webp";
import Messagingimg from "../../../assets/messaging.png";
import Privacyimg from "../../../assets/privacy.webp";
import Rulesimg from "../../../assets/rules.webp";
import Languageimg from "../../../assets/languare-2.webp";
import { LazyLoadImage } from "react-lazy-load-image-component";
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
      <div className="lg:flex justify-between pt-3 ">
        <div className=" flex flex-col self-center">
          <div className="text-[0.9rem] lg:text-[1.3rem] font-bold dark:text-gray-400 "> {t("Trusted by 350k+ users")} </div>
          <div className="bg-gradient-to-r from-indigo-600 via-indigo-400 to-indigo-300 text-transparent inline-block bg-clip-text text-[3rem] lg:text-[4.5rem] font-bold leading-tight self-center">  {t("Let's Chat")}</div>
          <div className="text-[1.2rem] lg:text-[1.5rem] font-bold bg-gray-200 hover:bg-black  border rounded-full text-center inline-block  cursor-pointer p-3  dark:bg-gray-900 dark:hover:bg-gray-200 m-3 lg:m-0" onClick={() => TryCall()}>
            <span className="bg-gradient-to-r from-indigo-600 via-indigo-500 to-indigo-400 bg-clip-text text-transparent hover:text-gray-100 dark:hover:text-gray-900">  {t("Try it out")}</span>
          </div>
        </div>
        <div className=" dark:text-gray-300">
          <img src={Homepageimg} className="lg:h-[30rem] w-full" />
        </div>
      </div>

      <div className="overflow-hidden whitespace-nowrap bg-gray-400/50 dark:bg-gray-400/40 h-8 md:h-12 flex items-center">
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

      <div className="lg:flex justify-around  ">
          <div className="flex-1 dark:text-gray-300 flex justify-center items-center">
            <img src={Messagingimg} className="lg:h-[30rem] object-cover" />
          </div>
          <div className="flex-1 flex flex-col gap-y-[1.5rem]  self-center px-6 dark:text-gray-50 lg:text-[1.2rem]">
            <div className="text-[1.3rem] lg:text-[2.5rem] font-bold"> {t("One to one chat")} </div>
              <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text ever
              since the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book. It has survived not only
              five centuries, but also the leap into electronic typesetting,
              remaining essentially unchanged. It was popularised in the 1960s with
              the release of Letraset sheets containing Lorem Ipsum passages, and
              more recently with desktop publishing software like Aldus PageMaker
              including versions of Lorem Ipsum.
              </p>
          </div>
      </div>

      <div className="lg:flex justify-around  ">
        
          <div className="flex-1 flex flex-col gap-y-[1.5rem]  self-center px-6 dark:text-gray-50 lg:text-[1.2rem]">
            <div className="text-[1.3rem] lg:text-[2.5rem] font-bold"> {t("Group chat")} </div>
              <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text ever
              since the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book. It has survived not only
              five centuries, but also the leap into electronic typesetting,
              remaining essentially unchanged. It was popularised in the 1960s with
              the release of Letraset sheets containing Lorem Ipsum passages, and
              more recently with desktop publishing software like Aldus PageMaker
              including versions of Lorem Ipsum.
              </p>
          </div>
          <div className="flex-1 dark:text-gray-300 flex justify-center items-center">
            <img src={Meetingimg} className="lg:h-[30rem] object-cover" />
          </div>
      </div>

      <div className="lg:flex justify-around  ">
          <div className="flex-1 dark:text-gray-300 flex justify-center items-center">
            <LazyLoadImage src={Privacyimg} className="lg:h-[30rem] object-cover" effect="blur"  />
          </div>
          <div className="flex-1 flex flex-col gap-y-[1.5rem]  self-center px-6 dark:text-gray-50 lg:text-[1.2rem]">
            <div className="text-[1.3rem] lg:text-[2.5rem] font-bold">{t("Data Privacy")} </div>
              <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text ever
              since the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book. It has survived not only
              five centuries, but also the leap into electronic typesetting,
              remaining essentially unchanged. It was popularised in the 1960s with
              the release of Letraset sheets containing Lorem Ipsum passages, and
              more recently with desktop publishing software like Aldus PageMaker
              including versions of Lorem Ipsum.
              </p>
          </div>
      </div>

      <div className="lg:flex justify-around  ">
          <div className="flex-1 flex flex-col gap-y-[1.5rem]  self-center px-6 dark:text-gray-50 lg:text-[1.2rem]">
            <div className="text-[1.3rem] lg:text-[2.5rem] font-bold"> {t("Rules & Regulations")} </div>
              <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text ever
              since the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book. It has survived not only
              five centuries, but also the leap into electronic typesetting,
              remaining essentially unchanged. It was popularised in the 1960s with
              the release of Letraset sheets containing Lorem Ipsum passages, and
              more recently with desktop publishing software like Aldus PageMaker
              including versions of Lorem Ipsum.
              </p>
          </div>
          <div className="flex-1 dark:text-gray-300 flex justify-center items-center">
            <LazyLoadImage src={Rulesimg} className="lg:h-[30rem] object-cover" effect="blur"  />
          </div>
      </div>

      <div className="lg:flex justify-around  ">
          <div className="flex-1 dark:text-gray-300 flex justify-center items-center">
            <LazyLoadImage src={Languageimg} className="lg:h-[30rem] object-cover" effect="blur" />
          </div>
          <div className="flex-1 flex flex-col gap-y-[1.5rem]  self-center px-6 dark:text-gray-50 lg:text-[1.2rem]">
            <div className="text-[1.3rem] lg:text-[2.5rem] font-bold"> {t("Multi Language Support")} </div>
              <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text ever
              since the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book. It has survived not only
              five centuries, but also the leap into electronic typesetting,
              remaining essentially unchanged. It was popularised in the 1960s with
              the release of Letraset sheets containing Lorem Ipsum passages, and
              more recently with desktop publishing software like Aldus PageMaker
              including versions of Lorem Ipsum.
              </p>
          </div>
      </div>

      <Pricing />
    </>
  );
};

export default Home;
