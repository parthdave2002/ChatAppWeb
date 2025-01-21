import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import imagePreview from "../../assets/otp-page.png";
import { Input } from 'reactstrap';

const OTPPage = () => {

  const navigate = useNavigate();
  const [otp, setOtp] = useState<string[]>(Array(4).fill(''));
  const [ showTimer , setShowTimer] = useState(true);
  const [userEmail, setUserEmail] = useState<string>("");
  const [time, setTime] = useState(30); 

  useEffect(() => {
    if (time === 0){
      setShowTimer(false)
      return;
    } 

    const interval = setInterval(() => {
      setTime((prevTime) => prevTime - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [time]);


  const handleChange = (value: string, index: number) => {
    if (!/\d/.test(value) && value !== '') return;
    const updatedOtp = [...otp];
    updatedOtp[index] = value;
    setOtp(updatedOtp);

    if (value && index < otp.length - 1) {
      const nextInput = document.getElementById(`otp-${index + 1}`) as HTMLInputElement;
      nextInput?.focus();
    }
  };

  const handleSubmit = () => {
    const enteredOtp = otp.join('');
    console.log('Entered OTP:', enteredOtp);
    navigate("/chat")
  };

  return (
        <div className="bg-gray-100 dark:bg-darkbackgoundcolor min-h-screen flex items-center justify-center">
                <div className="max-w-4xl w-full bg-gray-50 dark:bg-darkacardcolor  rounded-lg shadow-md">
                    <div className='flex flex-col-reverse md:flex-row'>
                        <div className='flex-1'>
                            <img src={imagePreview} className='h-full' />
                        </div>
                        
                        <div className="flex-1 p-8">
                            <h2 className="text-[2rem] font-bold text-center text-newthemecolor">Verify OTP</h2>
                            <p className="text-md text-gray-500 font-semibold">we've send you the verification code <br /> on {userEmail}. </p>

                            <div className="flex justify-center space-x-2">
                              {otp.map((digit, index) => (
                                <Input
                                  key={index}
                                  id={`otp-${index}`}
                                  type="text"
                                  maxLength={1}
                                  value={digit}
                                  onChange={(e) => handleChange(e.target.value, index)}
                                  className="w-12 h-12 text-center text-lg font-medium text-newthemecolor bg-gray-100 border border-gray-300 rounded-lg  focus:ring-newthemecolor focus:ring-2 focus:outline-none"
                                />
                              ))}
                            </div>

                            <button onClick={handleSubmit} className="w-full px-4 py-2 text-white bg-newthemecolor rounded-lg hover:bg-[#4536f1cf] focus:ring-4 focus:ring-blue-300 my-4" > Verify OTP </button>
                            
                            {showTimer == true ? 
                              <div className="text-md font-semibold text-center text-gray-500">
                                Re-send code in <span className='text-blue-600'>  00:{time} </span>
                             </div>
                            : 
                              <div className="text-md font-semibold text-center text-gray-500">
                               Didn’t receive the code? 
                                <button className="text-blue-600 hover:underline"> Resend OTP</button>
                              </div>
                            }
                           
                        </div>
                    </div>
                </div>
        </div>
  );
};

export default OTPPage;