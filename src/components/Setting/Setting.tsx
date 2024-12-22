import { DarkThemeToggle } from "flowbite-react";
import { FC } from "react";
import { useTranslation } from "react-i18next";

const Setting: FC = function () {

  
    const { t, i18n } = useTranslation();
  const changeLanguage = (language: string) => {
    i18n.changeLanguage(language);
  };

  return (
    <div className="p-3 shadow shadow-md  min-h-full max:h-full bg-gray-50 dark:bg-darkacardcolor  rounded-xl flex flex-col gap-y-[1.5rem]">
          <div className="text-[1.2rem] font-bold p-2 dark:text-gray-50">  {t("Setting")}  </div>

          <div className="">
                    <div className="py-2 flex gap-x-3 border-b hover:bg-gray-100 dark:hover:bg-gray-800 dark:text-gray-50">
                        <DarkThemeToggle className=' dark:bg-gray-700 focus:ring-0 border-0 '/> 
                        <div className="self-center">{t("Theme")} </div>
                    </div>

                    <div className="py-2 flex gap-x-3 border-b hover:bg-gray-100 dark:hover:bg-gray-800 dark:text-gray-50">
                      <button onClick={() => changeLanguage("gj")}>{t("Gujarati")}</button>
                    </div>

                    <div className="py-2 flex gap-x-3 border-b hover:bg-gray-100 dark:hover:bg-gray-800 dark:text-gray-50">
                      <button onClick={() => changeLanguage("hi")}>{t("Hindi")}</button>
                    </div>

                    <div className="py-2 flex gap-x-3 border-b hover:bg-gray-100 dark:hover:bg-gray-800 dark:text-gray-50">
                      <button onClick={() => changeLanguage("en")}>{t("English")}</button>
                    </div>

                    <div className="py-2 flex gap-x-3 border-b hover:bg-gray-100 dark:hover:bg-gray-800 dark:text-gray-50">
                      <button onClick={() => changeLanguage("es")}> {t("France")}</button>
                    </div>

                    <div className="py-2 flex gap-x-3 border-b hover:bg-gray-100 dark:hover:bg-gray-800 dark:text-gray-50">
                      <button onClick={() => changeLanguage("gr")}>{t("German")}</button>
                    </div>

                    <div className="py-2 flex gap-x-3 border-b hover:bg-gray-100 dark:hover:bg-gray-800 dark:text-gray-50">
                      <button onClick={() => changeLanguage("sp")}>{t("Spanish")}</button>
                    </div>
          </div>
    </div>
  );
};

export default Setting;