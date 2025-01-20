import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const OTPPage = () => {

  const navigate = useNavigate();
  const [otp, setOtp] = useState<string[]>(Array(4).fill(''));

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
    <div className="flex p-[1rem] md:p-[4rem] items-center justify-center bg-gray-100 dark:bg-darkacardcolor">
      <div className="w-full max-w-md p-8 space-y-6 bg-gray-50 dark:bg-gray-800 rounded-2xl shadow-xl dark:shadow-2xl">
        <h2 className="text-2xl font-bold text-center text-gray-800 dark:text-gray-50">Verify OTP</h2>
        <p className="text-sm text-center text-gray-600 dark:text-gray-400">Enter the 4-digit code sent to your email.</p>

        <div className="flex justify-center space-x-2">
          {otp.map((digit, index) => (
            <input
              key={index}
              id={`otp-${index}`}
              type="text"
              maxLength={1}
              value={digit}
              onChange={(e) => handleChange(e.target.value, index)}
              className="w-12 h-12 text-center text-lg font-medium text-gray-800 dark:text-gray-50 bg-gray-100 dark:bg-gray-800 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
            />
          ))}
        </div>

        <button
          onClick={handleSubmit}
          className="w-full px-4 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:ring-4 focus:ring-blue-300"
        >
          Verify OTP
        </button>

        <div className="text-sm text-center text-gray-600">
          Didn’t receive the code?{' '}
          <button className="text-blue-600 hover:underline">Resend OTP</button>
        </div>
      </div>
    </div>
  );
};

export default OTPPage;