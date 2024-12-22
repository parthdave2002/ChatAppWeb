import {useState , FC} from 'react';
import * as Yup from "yup";
import { useFormik } from "formik";
import { Form, Input, FormFeedback } from "reactstrap";
import { Button, Card, Checkbox, DarkThemeToggle, Label  } from "flowbite-react";
import { FaUser,FaLock  } from "react-icons/fa";
import { useNavigate } from "react-router";
import { useDispatch } from 'react-redux';
import {insertlogin} from "../../Store/actions"
import Footer from '../../components/Footer/Footer';

const Login : FC = function()  {
  const navigation = useNavigate();
  const dispatch = useDispatch();

    const validation = useFormik({
        // enableReinitialize : use this flag when initial values needs to be changed
        enableReinitialize: true,
    
        initialValues: {
          email: "",
          password: "",
        },
    
        validationSchema: Yup.object({
          email: Yup.string().email("Enter Valid Email id").required("Please Enter Email"),
          password: Yup.string().required("Please Enter Password"),
        }),
        onSubmit: (values) => {
          dispatch(insertlogin(values));
          // dispatch(loginintolaravel(values));
          validation.resetForm();
        },
      });

    //   ------- GetData from reducer code start -------------
    //   const [Login, setLogin] = useState(false);
    //   const [LoginRols, setLoginRols] = useState([]);
    
    //   const { login } = useSelector((state:any) => ({
    //     login: state.Login.Logincode,
    //   }));

    //   useEffect(() => {
    //     setLogin(login ? login.success : null);
    //     setLoginRols(login.data ? login.data.roles : null);
    //   }, [login]);
    //   ------- GetData from reducer code end -------------

    //   ------- Forgot password code start -------------
      const LostPassword = () => {
        navigation("/forgotpassword");
      };
    //   ------- Forgot password code end -------------

    //   ------- Create New Acconut code start -------------
    const CreateAcc = () =>{
        navigation("/signup");
    }
    //   ------- Create New Acconut code start -------------

  return (
      <div className="flex flex-col items-center justify-center lg:gap-y-6 bg-[#eff6fc] dark:bg-gray-900 ">
        <Card  className="lg:min-w-[30rem] p-3 lg:max-w-screen-xl md:max-w-screen-md [&>img]:hidden md:[&>img]:w-[31rem] md:[&>img]:p-0 md:[&>*]:w-full md:[&>*]:p-16 lg:[&>img]:block " >
                  <h1 className="mb-3 text-2xl font-bold dark:text-white md:text-3xl text-center">  Sign in  </h1>

                  <Form
                      onSubmit={(e) => {
                          e.preventDefault();
                          validation.handleSubmit();
                          return false;
                      }}
                  >
                  <div className="mb-4 flex flex-col gap-y-3 relative shadow-xl bg-blue-100  dark:bg-gray-700 rounded-md">
                      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"> <FaUser  className="w-6 h-6 text-gray-500 dark:text-gray-400" /> </div>

                      <Input
                      name="email"
                      className="lg:ml-[3rem] bg-blue-100 border-0 focus:ring-0 dark:bg-gray-700 dark:border-gray-600 dark:focus:border-blue-500 dark:focus:ring-blue-500 dark:placeholder-gray-400 dark:text-white disabled:cursor-not-allowed disabled:opacity-50 dark:focus:ring-blue-500 p-2.5 rounded-lg text-gray-900 text-xl"
                      placeholder="Email"
                      type="text"
                      onChange={validation.handleChange}
                      onBlur={validation.handleBlur}
                      value={validation.values.email || ""}
                      invalid={  validation.touched.email && validation.errors.email ? true  : false }
                      />
                  </div>
                  {validation.touched.email && validation.errors.email ? ( <FormFeedback type="invalid" className="text-red-500">   {validation.errors.email}  </FormFeedback> ) : null}


                  <div className="mb-6 flex flex-col gap-y-3 relative shadow-xl bg-blue-100  dark:bg-gray-700 rounded-md">
                      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none rounded-r-md"> <FaLock    className="w-6 h-6 text-gray-500 dark:text-gray-400" /> </div>
                      
                      <Input
                      id="password"
                      className="lg:ml-[3rem] bg-blue-100 border-0 focus:ring-0 dark:bg-gray-700 dark:border-gray-600 dark:focus:border-blue-500 dark:focus:ring-blue-500 dark:placeholder-gray-400 dark:text-white disabled:cursor-not-allowed disabled:opacity-50 dark:focus:ring-blue-500 p-2.5 rounded-lg text-gray-900 text-xl"
                      name="password"
                      placeholder="••••••••"
                      type="password"
                      onChange={validation.handleChange}
                      onBlur={validation.handleBlur}
                      value={validation.values.password || ""}
                      invalid={  validation.touched.password && validation.errors.password  ? true  : false  }
                      />
                  </div>
                  {validation.touched.password && validation.errors.password ? ( <FormFeedback type="invalid" className="text-red-500">  {validation.errors.password} </FormFeedback> ) : null}

                  <div className="mb-6 flex items-center justify-between">
                      <div className="flex items-center gap-x-3">
                      <Checkbox id="rememberMe" name="rememberMe" />
                      <Label htmlFor="rememberMe" className='lg:text-[1rem]'>Remember me</Label>
                      </div>

                      <div onClick={() => {  LostPassword(); }} className="w-1/2 cursor-pointer text-right text-sm dark:text-gray-200 lg:text-[1rem]" >  Forgot Password?   </div>

                  </div>

                  <div className="mb-6 slef-center align-center">
                      <Button type="submit" className="lg:w-[15rem]  bg-gradient-to-r from-purple-500 to-pink-500 mx-[4rem]">   Login </Button>
                  </div>


                  <p className=" text-gray-500 dark:text-gray-300 text-center cursor-pointer text-md" onClick={() => CreateAcc()}> Not registered?&nbsp;
                      <a  className="text-primary-600 dark:text-primary-300 text-lg">   Create account  </a>
                  </p>
                  </Form>
        </Card>

        <Footer />
      </div>
  )
}

export default Login;