import { FC } from "react";
import Header from "../../../components/Header/Header";
import Footer from "../../../components/Footer/Footer";
import { useTranslation } from "react-i18next";

const About: FC = function () {
  const { t } = useTranslation();

  return (
    <>
      <div className="flex flex-col items-center">
        <div className="flex flex-wrap lg:flex-nowrap w-full max-w-screen-xl">

          <div className="flex-1 h-64 bg-fixed bg-parallax bg-cover bg-center  bg-[url('/img/picture_profile_girl.png')]">

          </div>
          <div className="flex-1 flex flex-col gap-y-6 p-6 dark:text-gray-50 lg:text-[1.2rem]">
            <h2 className="text-[1.5rem] lg:text-[2rem] font-bold">{t("Data Privacy")}</h2>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text ever
              since the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book. It has survived not only
              five centuries, but also the leap into electronic typesetting,
              remaining essentially unchanged.
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center">
        <div className="flex flex-wrap lg:flex-nowrap w-full max-w-screen-xl">
          <div className="flex-1 flex flex-col gap-y-6 p-6 dark:text-gray-50 lg:text-[1.2rem]">
            <h2 className="text-[1.5rem] lg:text-[2rem] font-bold">{t("Data Privacy")}</h2>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text ever
              since the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book. It has survived not only
              five centuries, but also the leap into electronic typesetting,
              remaining essentially unchanged.
            </p>
          </div>
          <div className="flex-1 h-96  bg-fixed bg-parallax bg-cover bg-center bg-[url('/img/picture_profile_girl.png')]"> </div>
        </div>
      </div>

      <div className="flex flex-col items-center">
        <div className="flex flex-wrap lg:flex-nowrap w-full max-w-screen-xl">

          <div className="flex-1 h-64 bg-fixed bg-parallax bg-cover bg-center  bg-[url('/img/picture_profile_girl.png')]">

           
          </div>

          <div className="flex-1 flex flex-col gap-y-6 p-6 dark:text-gray-50 lg:text-[1.2rem]">
            <h2 className="text-[1.5rem] lg:text-[2rem] font-bold">{t("Data Privacy")}</h2>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text ever
              since the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book. It has survived not only
              five centuries, but also the leap into electronic typesetting,
              remaining essentially unchanged.
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center">
        <div className="flex flex-wrap lg:flex-nowrap w-full max-w-screen-xl">
          <div className="flex-1 flex flex-col gap-y-6 p-6 dark:text-gray-50 lg:text-[1.2rem]">
            <h2 className="text-[1.5rem] lg:text-[2rem] font-bold">{t("Data Privacy")}</h2>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text ever
              since the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book. It has survived not only
              five centuries, but also the leap into electronic typesetting,
              remaining essentially unchanged.
            </p>
          </div>
          <div className="flex-1 h-96  bg-fixed bg-parallax bg-cover bg-center bg-[url('/img/picture_profile_girl.png')]"> </div>
        </div>
      </div>

      <div className="flex flex-col items-center">
        <div className="flex flex-wrap lg:flex-nowrap w-full max-w-screen-xl">

          <div className="flex-1 h-64 bg-fixed bg-parallax bg-cover bg-center  bg-[url('/img/picture_profile_girl.png')]">

          </div>

          <div className="flex-1 flex flex-col gap-y-6 p-6 dark:text-gray-50 lg:text-[1.2rem]">
            <h2 className="text-[1.5rem] lg:text-[2rem] font-bold">{t("Data Privacy")}</h2>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text ever
              since the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book. It has survived not only
              five centuries, but also the leap into electronic typesetting,
              remaining essentially unchanged.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
