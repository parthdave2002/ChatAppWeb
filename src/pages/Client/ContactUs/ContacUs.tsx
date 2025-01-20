import { FC } from "react";
import Homepageimg from "../../../assets/fashion-8829861_1280.jpg";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router";

const ContacUsPage: FC = function () {

    const navigate = useNavigate()
     const { t  } = useTranslation();

     window.scrollTo({
      top:0,
      behavior: "smooth"
     })

  return (
    <> 
      <div> ContacUs </div>
    </>
  );
};

export default ContacUsPage;
