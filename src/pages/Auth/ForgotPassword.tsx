import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as Yup from "yup";
import { useFormik } from "formik";
import { Form, Input, FormFeedback } from "reactstrap";
import imagePreview from "../../assets/forgot-paasword-2.png";

const ForgotPasswordPage = () => {

  const navigate = useNavigate();
  const handleSubmit = () => {
    // navigate("/chat")
  };

  const backCall =() =>{
    navigate("/login")
  }

  const validation = useFormik({
      enableReinitialize: true,
  
      initialValues: {
        email: "",
      },
  
      validationSchema: Yup.object({
        email: Yup.string().email("Enter valid email").required("Please enter email"),
      }),
      onSubmit: (values) => {
        console.log("values >>>>>>>>>", values);
        // dispatch(insertlogin(values));
        validation.resetForm();
      },
  });

  return (
        <div className="bg-gray-100 min-h-screen flex items-center justify-center">
                <div className="max-w-4xl w-full bg-white rounded-lg shadow-md">
                    <div className='flex flex-col-reverse md:flex-row'>
                        <div className='flex-1'>
                            <img src={imagePreview} className='h-full' />
                        </div>
                        
                        <div className="w-full max-w-sm p-8 space-y-6 bg-white rounded-lg shadow-md">
                            <h2 className="text-2xl font-bold text-center text-[#554bc7]">Forgot Password</h2>
                              <Form className="space-y-4"   onSubmit={(e) => { e.preventDefault(); validation.handleSubmit(); return false; }}>
                                <div className='flex flex-col'>
                                  <label className='text-gray-500 font-semibold'>Email</label>
                                  <Input name="email" type='email' placeholder="Enter your email" onChange={validation.handleChange} onBlur={validation.handleBlur} value={validation.values.email || ""} invalid={  validation.touched.email && validation.errors.email ? true  : false } className='rounded-xl px-4 py-2 focus:ring-[#554bc7] focus:ring-1 focus:outline-none border border-gray-200 ' />
                                  {validation.touched.email && validation.errors.email ? ( <FormFeedback type="invalid" className="text-red-500 text-[0.9rem]">  {validation.errors.email}  </FormFeedback> ) : null}
                                </div>

                                <button type='submit' className="w-full px-4 py-2 text-white bg-[#554bc7] rounded-lg hover:bg-[#4536f1cf] focus:ring-4 focus:ring-blue-300" > Send Email </button>
                              </Form>
                              <div className="text-md font-semibold text-center text-gray-500">
                                I have remember my password? 
                                <button className="text-blue-600 hover:underline" onClick={backCall}> Login</button>
                              </div>
                        </div>
                    </div>
                </div>
        </div>
  );
};

export default ForgotPasswordPage;