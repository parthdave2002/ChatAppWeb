import React from 'react';
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import * as Yup from "yup";
import { useFormik } from "formik";
import { Form, Input, FormFeedback } from "reactstrap";
import FacebookImg from "../../assets/facebook.png"
import googleSvg from '../../assets/google.png';
import imagePreview from "../../assets/contact-us.png";

const Login = () => {

  const navigate = useNavigate();
  const [checked, setChecked] = useState(false);
  const handlecheckCall = () =>{
    setChecked(!checked)
  }

  const Forgotcall = () =>{
    navigate("/forgotpassword")
  }

  const SignUpCall = () => {
    navigate("/signup")
  }

  const validation = useFormik({
    // enableReinitialize : use this flag when initial values needs to be changed
    enableReinitialize: true,

    initialValues: {
      email: "",
      password: "",
    },

    validationSchema: Yup.object({
      email: Yup.string().email("Enter valid email").required("Please enter email"),
      password: Yup.string().required("Please enter password"),
    }),
    onSubmit: (values) => {
      console.log("values >>>>>>>>>", values);
      // dispatch(insertlogin(values));
      navigate("/otp")
      validation.resetForm();
    },
  });
   
  return (
    <div className="bg-gray-100 dark:bg-darkbackgoundcolor min-h-screen flex items-center justify-center">
      <div className="max-w-4xl w-full bg-gray-50  dark:bg-darkacardcolor rounded-lg shadow-md">
          <div className='flex flex-col-reverse md:flex-row'>
              <div className='flex-1'>
                  <img src={imagePreview} className='h-full' />
              </div>
              
              <div className='flex-1 p-8'>
                <h2 className="text-[2.5rem] font-bold text-newthemecolor mb-4"> Welcome back </h2>
                <Form className="space-y-4"   onSubmit={(e) => { e.preventDefault(); validation.handleSubmit(); return false; }}>
                  <div className='flex flex-col'>
                        <label className='text-gray-500 font-semibold dark:text-gray-100'>Email</label>
                        <Input name="email" type='email' placeholder="Enter your email" onChange={validation.handleChange} onBlur={validation.handleBlur} value={validation.values.email || ""} invalid={  validation.touched.email && validation.errors.email ? true  : false } className='rounded-xl px-4 py-2 focus:ring-newthemecolor focus:ring-1 focus:outline-none border border-gray-200 ' />
                        {validation.touched.email && validation.errors.email ? ( <FormFeedback type="invalid" className="text-red-500 text-[0.9rem]">  {validation.errors.email}  </FormFeedback> ) : null}
                  </div>

                  <div className='flex flex-col'>
                        <label className='text-gray-500 font-semibold dark:text-gray-100'>Password</label>
                        <Input name="password" type='password' placeholder="Enter your password" onChange={validation.handleChange} onBlur={validation.handleBlur}  value={validation.values.password || ""} invalid={  validation.touched.password && validation.errors.password  ? true  : false  } className='rounded-xl px-4 py-2 focus:ring-newthemecolor focus:ring-1 focus:outline-none border border-gray-200 ' />
                        {validation.touched.password && validation.errors.password ? ( <FormFeedback type="invalid" className="text-red-500 text-[0.9rem]">  {validation.errors.password} </FormFeedback> ) : null}
                  </div>

                  <div className="flex items-center justify-between">
                    <label className="inline-flex items-center text-sm text-gray-600">
                      <Input
                        type="checkbox"
                        className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                        onChange={handlecheckCall}
                        defaultChecked={checked}
                      />
                      <span className="ml-2 text-gray-500 font-semibold dark:text-gray-100">Remember me</span>
                    </label>

                    <div className="text-sm text-blue-600 hover:underline cursor-pointer" onClick={() =>Forgotcall()}> Forgot password ? </div>
                  </div>

                  <button type="submit" className="w-full px-4 py-2 text-white bg-newthemecolor rounded-lg hover:bg-[#4536f1cf] focus:ring-4 focus:ring-blue-300" > Log In </button>
                </Form>

                <div className="flex items-center my-4">
                  <div className="flex-grow border-t border-gray-300"></div>
                  <span className="px-4 text-sm text-gray-500 dark:text-gray-100">or login with</span>
                  <div className="flex-grow border-t border-gray-300"></div>
                </div>

                <div className="md:flex gap-x-3 mt-4 space-y-2 max-h-[2rem] items-center justify-center self-center">
                  <button  type="button" className="flex items-center justify-center w-full px-4 py-2 text-sm font-medium text-gray-700 bg-gray-200 border border-gray-300 rounded-lg hover:bg-gray-300" >
                    <img  src={FacebookImg} alt="Facebook" className="w-5 h-5 mr-2" />
                    <div className='md:text-[0.8rem]'>Log in with Facebook </div>
                  </button>

                  <button type="button" className="flex items-center justify-center w-full px-4 py-2 text-sm font-medium text-gray-700 bg-gray-200 border border-gray-300 rounded-lg hover:bg-gray-300 flex-grow">
                    <img src={googleSvg} alt="Google" className="w-5 h-5 mr-2" />
                    <div className="md:text-[0.8rem]">Log in with Google</div>
                  </button> 
                </div>

                <div className="flex items-center justify-center mt-4">
                    <div className="text-gray-500 dark:text-gray-100 font-semibold">
                      <span className="ml-2">i don't have account, </span>
                      <span className="hover:text-blue-600  cursor-pointer" onClick={() => SignUpCall()}> Signup</span>
                    </div>
                </div>
              </div>
          </div>
      </div>
    </div>
  )
}

export default Login