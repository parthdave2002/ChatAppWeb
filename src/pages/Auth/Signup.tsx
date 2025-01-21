import React, { FC, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Form, FormFeedback, Input } from 'reactstrap';
import { FaArrowLeft, FaArrowRight, FaCheck   } from "react-icons/fa";
import FacebookImg from "../../assets/facebook.png"
import googleSvg from '../../assets/google.png';
import * as Yup from "yup";
import { useFormik } from "formik";
import ImageUploadPreview from '../../common/ImageUpload';

const SignUpPage: FC = () => {
  const navigate = useNavigate();

  const AlreadyAccCall = () => {
    navigate("/login")
  }

   const validation = useFormik({
      // enableReinitialize : use this flag when initial values needs to be changed
      enableReinitialize: true,
  
      initialValues: {
        name:"",
        email: "",
        phone:"",
        password: "",
        confirm_password:""
      },
  
      validationSchema: Yup.object({
        email: Yup.string().email("Enter valid email").required("Please enter email"),
        name: Yup.string().required("Please enter name"),
        phone: Yup.string().required("Please enter phone number"),
        password: Yup.string().required("Please enter password"),
        confirm_password: Yup.string().required("Please enter confirm password"),
      }),
      onSubmit: (values) => {
        console.log("values >>>>>>>>>", values);
        // dispatch(insertlogin(values));
        navigate("/")
        validation.resetForm();
      },
    });
  
  // Step tracking state

  const [currentStep, setCurrentStep] = useState(0);

  // Array of step data (optional for dynamic rendering)
  const steps = [
    { title: 'Personal Info', description: 'Step details here', icon: 'check' },
    { title: 'Account Info', description: 'Step details here', icon: 'user' },
    { title: 'Confirmation', description: 'Step details here', icon: 'check-circle' },
    { title: 'Review', description: 'Step details here', icon: 'clipboard' },
  ];

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

    const [previewSrc, setPreviewSrc] = useState<string>('');

  return (
    <div className="bg-gray-100 dark:bg-darkbackgoundcolor min-h-screen flex flex-col items-center justify-center">
      <div className="max-w-4xl w-full bg-gray-50 dark:bg-darkacardcolor rounded-lg shadow-md">
          <div className='flex flex-col-reverse md:flex-row'>
              <div className='flex-1 p-8 hidden md:block'>
                <ol className="relative text-gray-500 border-s border-gray-200 dark:border-gray-700 dark:text-gray-200">
                  {steps.map((step, index) => (
                    <li key={index}  className={`ms-6 ${index < steps.length - 1 ? 'mb-16' : ''} ${
                      index <= currentStep ? 'text-green-600 dark:text-green-500' : ''
                    }`}>
                      <span className={`absolute flex items-center justify-center w-8 h-8 bg-gray-100 rounded-full -start-4 ring-4 ring-white dark:ring-gray-900 dark:bg-gray-700 ${index <= currentStep ? 'bg-green-600 dark:bg-green-500' : ''}`}  >
                        <svg className={`w-3.5 h-3.5 text-gray-500 dark:text-gray-400  ${index <= currentStep ? 'fill-white' : 'fill-gray-500'}`} aria-hidden="true" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 18 20">
                          <path d="M16 1h-3.278A1.992 1.992 0 0 0 11 0H7a1.993 1.993 0 0 0-1.722 1H2a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2ZM7 2h4v3H7V2Zm5.7 8.289-3.975 3.857a1 1 0 0 1-1.393 0L5.3 12.182a1.002 1.002 0 1 1 1.4-1.436l1.328 1.289 3.28-3.181a1 1 0 1 1 1.392 1.435Z" />
                        </svg>
                      </span>
                      <h3 className={`font-medium leading-tight ${index <= currentStep ? 'font-bold' : ''}`}>{step.title}</h3>
                      <p className="text-sm">{step.description}</p>
                    </li>
                  ))}
                </ol>

                  <div>
                    <div className="flex justify-center gap-x-3 mt-4">
                      {currentStep !== 0 ?
                        <button onClick={handlePrevious}  className="p-3 text-white bg-newthemecolor rounded-full hover:bg-[#4536f1cf] disabled:bg-gray-400 disabled:cursor-not-allowed" disabled={currentStep === 0} > <FaArrowLeft /> </button>
                      :
                        <button  className="p-3 text-white bg-newthemecolor rounded-full hover:bg-[#4536f1cf] disabled:bg-gray-400 disabled:cursor-not-allowed " disabled={currentStep === 0} > <FaArrowLeft /> </button>
                      }
                     
                      {currentStep === steps.length - 1 ?
                      <button onClick={(e) => { e.preventDefault(); validation.handleSubmit(); return false; }} className="p-3 text-white bg-newthemecolor rounded-full hover:bg-[#4536f1cf] disabled:bg-gray-400 disabled:cursor-not-allowed" > <FaCheck /> </button>
                      : 
                      <button  onClick={handleNext} className="p-3 text-white bg-newthemecolor rounded-full hover:bg-[#4536f1cf] disabled:bg-gray-400 disabled:cursor-not-allowed" > <FaArrowRight /> </button>
                      }
                    </div>
                  </div>
              </div>
              
              <div className='flex-1 p-3'>
                <h2 className="text-[2rem] font-bold text-center text-newthemecolor"> Create account </h2>
                <h2 className="text-[0.9rem] font-semibold text-center text-newthemecolor mb-4"> Let's get started. and start your journey with us. </h2>

                <div className="md:flex gap-x-3 mt-4 space-y-2 md:max-h-[2rem] items-center justify-center self-center">
                    <button  type="button" className="flex items-center justify-center w-full px-3 py-1 text-sm font-medium text-gray-700 bg-gray-200 border border-gray-300 rounded-lg hover:bg-gray-300" >
                      <img  src={FacebookImg} alt="Facebook" className="w-5 h-5 mr-2" />
                      <div className='md:text-[0.8rem]'>Log in with Facebook </div>
                    </button>
                
                    <button type="button" className="flex items-center justify-center w-full px-3 py-1 text-sm font-medium text-gray-700 bg-gray-200 border border-gray-300 rounded-lg hover:bg-gray-300 flex-grow">
                        <img src={googleSvg} alt="Google" className="w-5 h-5 mr-2" />
                        <div className="md:text-[0.8rem]">Log in with Google</div>
                    </button> 
                </div>

                <div className="flex items-center my-4">
                  <div className="flex-grow border-t border-gray-300"></div>
                  <span className="px-4 text-sm text-gray-500 dark:text-gray-100"> or register with </span>
                  <div className="flex-grow border-t border-gray-300"></div>
                </div>

                <Form className="space-y-4" onSubmit={(e) => { e.preventDefault(); validation.handleSubmit(); return false; }}>
                  {currentStep == 0 ?
                    <div className='min-h-[15rem] max-h-[15rem] flex flex-col gap-y-3'>
                      <div className='flex flex-col'>
                            <label className='text-gray-500 dark:text-gray-100 font-semibold'>Name</label>
                            <Input name="name" type='text' placeholder="Enter your name" onChange={validation.handleChange} onBlur={validation.handleBlur} value={validation.values.name || ""} invalid={  validation.touched.name && validation.errors.name ? true  : false } className='rounded-xl px-4 py-1.5 focus:ring-newthemecolor focus:ring-1 focus:outline-none border border-gray-200 ' />
                            {validation.touched.name && validation.errors.name ? ( <FormFeedback type="invalid" className="text-red-500 text-[0.9rem]">  {validation.errors.name}  </FormFeedback> ) : null}
                      </div>

                      <div className='flex flex-col'>
                            <label className='text-gray-500 dark:text-gray-100 font-semibold'>Email</label>
                            <Input name="email" type='email' placeholder="Enter your email" onChange={validation.handleChange} onBlur={validation.handleBlur} value={validation.values.email || ""} invalid={  validation.touched.email && validation.errors.email ? true  : false } className='rounded-xl px-4 py-1.5 focus:ring-newthemecolor focus:ring-1 focus:outline-none border border-gray-200 ' />
                            {validation.touched.email && validation.errors.email ? ( <FormFeedback type="invalid" className="text-red-500 text-[0.9rem]">  {validation.errors.email}  </FormFeedback> ) : null}
                      </div>

                      <div className='flex flex-col'>
                            <label className='text-gray-500 dark:text-gray-100 font-semibold'>Phone </label>
                            <Input name="phone" type='number' placeholder="Enter your phone number" onChange={validation.handleChange} onBlur={validation.handleBlur} value={validation.values.phone || ""} invalid={  validation.touched.phone && validation.errors.phone ? true  : false } className='rounded-xl px-4 py-1.5 focus:ring-newthemecolor focus:ring-1 focus:outline-none border border-gray-200 ' />
                            {validation.touched.phone && validation.errors.phone ? ( <FormFeedback type="invalid" className="text-red-500 text-[0.9rem]">  {validation.errors.phone}  </FormFeedback> ) : null}
                      </div>
                    </div>
                  : currentStep == 1 ?
                    <ImageUploadPreview />
                  :currentStep == 2 ?
                    <div className='min-h-[15rem] max-h-[15rem]  flex flex-col gap-y-4'> 
                      <div className='flex flex-col'>
                        <label className='text-gray-500 dark:text-gray-100 font-semibold'>Password</label>
                        <Input name="password" type='password' placeholder="Enter your password" onChange={validation.handleChange} onBlur={validation.handleBlur}  value={validation.values.password || ""} invalid={  validation.touched.password && validation.errors.password  ? true  : false  } className='rounded-xl px-4 py-2 focus:ring-newthemecolor focus:ring-1 focus:outline-none border border-gray-200 ' />
                        {validation.touched.password && validation.errors.password ? ( <FormFeedback type="invalid" className="text-red-500 text-[0.9rem]">  {validation.errors.password} </FormFeedback> ) : null}
                      </div> 

                      <div className='flex flex-col'>
                        <label className='text-gray-500 dark:text-gray-100 font-semibold'>Confirm Password</label>
                        <Input name="confirm_password" type='password' placeholder="Enter your password" onChange={validation.handleChange} onBlur={validation.handleBlur}  value={validation.values.confirm_password || ""} invalid={  validation.touched.confirm_password && validation.errors.confirm_password  ? true  : false  } className='rounded-xl px-4 py-2 focus:ring-newthemecolor focus:ring-1 focus:outline-none border border-gray-200 ' />
                        {validation.touched.confirm_password && validation.errors.confirm_password ? ( <FormFeedback type="invalid" className="text-red-500 text-[0.9rem]">  {validation.errors.confirm_password} </FormFeedback> ) : null}
                      </div> 
                    </div>
                  :
                    <div className='min-h-[15rem] max-h-[15rem] flex flex-col gap-y-[1.5rem]'> 
                      <div className='md:flex justify-between'>
                      <div className='flex gap-x-2 self-center'> <div className='text-gray-500 dark:text-gray-100 font-semibold'> Name : </div>  <div className='text-gray-600 font-semibold'> { validation.values.name}  </div> </div>
                        <div> 
                              <img
                                src={previewSrc}
                                className="rounded-full h-[6rem] w-[6rem]"
                                alt="Image preview"
                                draggable="false"
                              />
                        </div>
                      </div>
                       
                      <div className='flex gap-x-2'> <div className='text-gray-500 dark:text-gray-100 font-semibold'> Email : </div>  <div className='text-gray-600 font-semibold'> { validation.values.email}  </div> </div>
                      <div className='flex gap-x-2'> <div className='text-gray-500 dark:text-gray-100 font-semibold'> Phone : </div>  <div className='text-gray-600 font-semibold'> { validation.values.phone}  </div> </div>
                      <div className='flex gap-x-2'> <div className='text-gray-500 dark:text-gray-100 font-semibold'> Password : </div>  <div className='text-gray-600 font-semibold'> { validation.values.password} </div> </div>
                    </div>
                  }
                </Form>
              </div>
          </div>
      </div>

      <div className="flex items-center justify-center mt-4">
        <div className="text-gray-500 font-semibold">
          <span className='text-center ' > I already have account, </span>
          <span className="hover:text-blue-600  cursor-pointer" onClick={AlreadyAccCall}> Login</span>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;