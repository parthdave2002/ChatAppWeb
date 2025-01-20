import { FC, useState } from "react";
import { useNavigate } from "react-router";
import { Button } from "reactstrap";

const FloatingCookies: FC = function () {
  const navigate = useNavigate();
  const [allowCookies, setAllowCookies] = useState(false);
  const [isExiting, setIsExiting] = useState(false);

  const PrivacyPolicyCall = () => {
    navigate("/privacy");
  };

  const AcceptCookiesCall = () => {
    setIsExiting(true);
    setTimeout(() => {
      setAllowCookies(true);
    }, 500); // Match the animation duration
  };

  const DeclineCookiesCall = () => {
    setIsExiting(true);
    setTimeout(() => {
      setAllowCookies(true);
    }, 500); // Match the animation duration
  };

  if (allowCookies) return null;

  return (
    <div className={`fixed z-50  transition-transform w-full lg:w-[30%] bottom-0 lg:bottom-5 lg:left-5 dark:bg-gray-800 bg-themecolor text-white p-4  shadow-2xl  shadow-gray-500/50 rounded-xl  ${isExiting ? "animate-slideDown" : "animate-slideUp"  }`}>
      <div className="dark:text-gray-50 text-gray-100 text-center">
        We use cookies to enhance your experience. By continuing, you agree to
        our use of cookies.
        <span
          className="text-gay-900 underline cursor-pointer"
          onClick={PrivacyPolicyCall}
        >
          Learn more about our Privacy Policy
        </span>
      </div>
      <div className="flex justify-center mx-auto gap-x-4 mt-3">
        <Button
          className="border p-3 rounded-md  text-gray-800   hover:text-gray-50   hover:bg-gray-800  dark:text-gray-50 dark:hover:bg-gray-50 dark:hover:text-gray-800 font-bold"
          onClick={AcceptCookiesCall}
        >
          Accept Cookies
        </Button>
        <Button
          className="border p-3 rounded-md  text-gray-800   hover:text-gray-50   hover:bg-gray-800  dark:text-gray-50 dark:hover:bg-gray-50 dark:hover:text-gray-800 font-bold"
          onClick={DeclineCookiesCall}
        >
          Decline
        </Button>
      </div>
    </div>
  );
};

export default FloatingCookies;
