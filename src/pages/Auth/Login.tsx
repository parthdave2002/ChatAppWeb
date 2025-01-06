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
import Header from '../../components/Header/Header';

const Login : FC = function()  {
  const navigation = useNavigate();
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const FormSubmit = () =>{
    navigate("/OTP")
  }

  const [checked, setChecked] = useState(false);
  const handlecheckCall = () =>{
    setChecked(!checked)
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
      // const LostPassword = () => {
      //   navigation("/forgotpassword");
      // };
    //   ------- Forgot password code end -------------

    //   ------- Create New Acconut code start -------------
    // const CreateAcc = () =>{
    //     navigation("/signup");
    // }
    //   ------- Create New Acconut code start -------------

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 dark:bg-darkacardcolor">
    <div className="w-full max-w-md p-8 space-y-6 bg-gray-50 dark:bg-gray-800 rounded-xl shadow-2xl dark:shadow-gray-500/50">
      <h2 className="text-2xl font-bold text-center text-gray-800 dark:text-gray-50">Login to Your Account</h2>
      <form className="space-y-4" onSubmit={FormSubmit}>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            className="block w-full px-4 py-2 mt-1 text-gray-800 bg-gray-100  dark:bg-gray-800 dark:shadow-gray-400/40 shadow-md border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:placeholder-gray-400 dark:text-white"
            placeholder="Enter your email"
            required
          />
        </div>
        
        {/* Password Input */}
        <div>
          <label htmlFor="password" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
            Password
          </label>
          <input
            type="password"
            id="password"
            className="block w-full px-4 py-2 mt-1 text-gray-800 bg-gray-100  dark:bg-gray-800 dark:shadow-gray-400/40 shadow-md border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:placeholder-gray-400 dark:text-white"
            placeholder="Enter your password"
            required
          />
        </div>

        {/* Remember Me and Forgot Password */}
        <div className="flex items-center justify-between">
          <label className="inline-flex items-center text-sm text-gray-600">
            <input
              type="checkbox"
              className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500 dark:bg-gray-800"
              onChange={handlecheckCall}
              defaultChecked={checked}
            />
            <span className="ml-2 dark:text-gray-300">Remember me</span>
          </label>
          <a href="/forgot-password" className="text-sm text-blue-600 hover:underline">
            Forgot password?
          </a>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full px-4 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:ring-0 focus:ring-blue-300 bg-blue-500 shadow-md shadow-blue-500/50"
        >
          Log In
        </button>
      </form>

      <div className="md:flex gap-x-3 mt-4 space-y-2">
        <button
          type="button"
          className="flex items-center justify-center w-full px-4 py-2 text-sm font-medium text-gray-700 bg-gray-200 border border-gray-300 rounded-lg hover:bg-gray-300"
        >
          <img
            src=""
            alt="Facebook"
            className="w-5 h-5 mr-2"
          />
          <div className='md:text-[0.8rem]'>Log in with Facebook </div>
        </button>
        
        <button
          type="button"
          className="flex items-center justify-center w-full px-4 py-2 text-sm font-medium text-gray-700 bg-gray-200 border border-gray-300 rounded-lg hover:bg-gray-300"
        >
          <img
            src= ""
            alt="Google"
            className="w-5 h-5 mr-2"
          />
          Log in with Google
        </button>
      </div>

      <div className="flex items-center justify-center">
          <div className="text-sm ">
            <span className="ml-2">i don't have account, </span>
            <span className="hover:text-blue-600  cursor-pointer" onClick={() => SignUpCall()}> Signup</span>
          </div>
      </div>
    </div>
  </div>
  )
}

export default Login;