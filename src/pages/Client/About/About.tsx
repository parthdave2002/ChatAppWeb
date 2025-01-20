import { FC, useEffect, useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import Meetingimg from "../../../assets/group.webp";
import Messagingimg from "../../../assets/messaging.png";
import Privacyimg from "../../../assets/privacy.webp";
import Rulesimg from "../../../assets/rules.webp";
import Languageimg from "../../../assets/languare-2.webp";
import LiveChatimg from "../../../assets/men-8364267_1280.jpg";
import LiveVideoChatimg from "../../../assets/woman-videocalling.webp";
import { useTranslation } from "react-i18next";
import OfferModal from "../../../components/Offer/Offer";

const About: FC = function () {
  const { t } = useTranslation();

  const [ offermodalview, setOffermodalview] = useState(false);
  useEffect(() =>{
    setOffermodalview(true)
  },[])

  window.scrollTo({
    top:0,
    behavior: "smooth"
   })

  return (
    <>

    {/* {offermodalview  && */}
      {/* <OfferModal /> */}
    {/* } */}

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

      <div className="lg:flex justify-around  ">
          <div className="flex-1 flex flex-col gap-y-[1.5rem]  self-center px-6 dark:text-gray-50 lg:text-[1.2rem]">
            <div className="text-[1.3rem] lg:text-[2.5rem] font-bold"> {t("Audio Call")} </div>
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
            <LazyLoadImage src={LiveChatimg} className="lg:h-[30rem] object-cover" effect="blur"  />
          </div>
      </div>

      <div className="lg:flex justify-around  ">
          <div className="flex-1 dark:text-gray-300 flex justify-center items-center">
            <LazyLoadImage src={LiveVideoChatimg} className="lg:h-[30rem] object-cover" effect="blur" />
          </div>
          <div className="flex-1 flex flex-col gap-y-[1.5rem]  self-center px-6 dark:text-gray-50 lg:text-[1.2rem]">
            <div className="text-[1.3rem] lg:text-[2.5rem] font-bold"> {t("Video Call")} </div>
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
    </>
  );
};

export default About;
