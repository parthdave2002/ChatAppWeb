import {useState , FC} from 'react';
import * as Yup from "yup";
import { useFormik } from "formik";
import { Form, Input, FormFeedback } from "reactstrap";
import { Button, Card, Checkbox, DarkThemeToggle, Label, Dropdown  } from "flowbite-react";
import { FaUser,FaLock, FaLockOpen   } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { useNavigate } from "react-router";

const Signup : FC = function()  {
    const navigation = useNavigate();

    const validation = useFormik({
        // enableReinitialize : use this flag when initial values needs to be changed
        enableReinitialize: true,
    
        initialValues: {
          email: "",
          password: "",
          confirmpassword:"",
          city:""
        },
    
        validationSchema: Yup.object({
          email: Yup.string().email("Enter Valid Email id").required("Please Enter Email"),
          password: Yup.string().required("Please Enter Password"),
          confirmpassword:Yup.string().required("Please Enter Confirm Password"),
          city: Yup.string().required("Please Enter City"),
        }),
        onSubmit: (values) => {
        //   dispatch(insertlogin(values));
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
      const Alredyhave = () => {
        navigation("/login");
      };
    //   ------- Forgot password code end -------------

  return (
    // <div>Login</div>
    <div className="flex flex-col items-center justify-center px-6 lg:h-screen lg:gap-y-3 bg-gray-300 dark:bg-gray-900">

      <Card  className="lg:h-[35rem] lg:max-h-[35rem]  lg:min-w-[30rem] lg:max-w-screen-xl md:max-w-screen-md [&>img]:hidden md:[&>img]:w-[31rem] md:[&>img]:p-0 md:[&>*]:w-full md:[&>*]:p-16 lg:[&>img]:block " >
                <h1 className="mb-3 text-2xl font-bold dark:text-white md:text-3xl text-center">  Create New Account  </h1>

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
                    placeholder="Enter email"
                    type="text"
                    onChange={validation.handleChange}
                    onBlur={validation.handleBlur}
                    value={validation.values.email || ""}
                    invalid={  validation.touched.email && validation.errors.email ? true  : false }
                    />
                </div>
                {validation.touched.email && validation.errors.email ? ( <FormFeedback type="invalid" className="text-red-500">   {validation.errors.email}  </FormFeedback> ) : null}


                <div className="mb-4 flex flex-col gap-y-3 relative shadow-xl bg-blue-100  dark:bg-gray-700 rounded-md">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none rounded-r-md"> <FaLockOpen  className="w-6 h-6 text-gray-500 dark:text-gray-400" /> </div>
                    
                    <Input
                    id="password"
                    className="lg:ml-[3rem] bg-blue-100 border-0 focus:ring-0 dark:bg-gray-700 dark:border-gray-600 dark:focus:border-blue-500 dark:focus:ring-blue-500 dark:placeholder-gray-400 dark:text-white disabled:cursor-not-allowed disabled:opacity-50 dark:focus:ring-blue-500 p-2.5 rounded-lg text-gray-900 text-xl"
                    name="password"
                    placeholder="Enter password"
                    type="password"
                    onChange={validation.handleChange}
                    onBlur={validation.handleBlur}
                    value={validation.values.password || ""}
                    invalid={  validation.touched.password && validation.errors.password  ? true  : false  }
                    />
                </div>
                {validation.touched.password && validation.errors.password ? ( <FormFeedback type="invalid" className="text-red-500">  {validation.errors.password} </FormFeedback> ) : null}

                <div className="mb-4 flex flex-col gap-y-3 relative shadow-xl bg-blue-100  dark:bg-gray-700 rounded-md">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none rounded-r-md"> <FaLock    className="w-6 h-6 text-gray-500 dark:text-gray-400" /> </div>
                    
                    <Input
                    id="confirmpassword"
                    className="lg:ml-[3rem] bg-blue-100 border-0 focus:ring-0 dark:bg-gray-700 dark:border-gray-600 dark:focus:border-blue-500 dark:focus:ring-blue-500 dark:placeholder-gray-400 dark:text-white disabled:cursor-not-allowed disabled:opacity-50 dark:focus:ring-blue-500 p-2.5 rounded-lg text-gray-900 text-xl"
                    name="confirmpassword"
                    placeholder="Enter confirm password"
                    type="password"
                    onChange={validation.handleChange}
                    onBlur={validation.handleBlur}
                    value={validation.values.confirmpassword || ""}
                    invalid={  validation.touched.confirmpassword && validation.errors.confirmpassword  ? true  : false  }
                    />
                </div>
                {validation.touched.confirmpassword && validation.errors.confirmpassword ? ( <FormFeedback type="invalid" className="text-red-500">  {validation.errors.confirmpassword} </FormFeedback> ) : null}

                <div className="mb-4 flex flex-col gap-y-3 relative shadow-xl bg-blue-100  dark:bg-gray-700 rounded-md">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"> <FaLocationDot className="w-6 h-6 text-gray-500 dark:text-gray-400" /> </div>

                    <Input
                    name="city"
                    className="lg:ml-[3rem] bg-blue-100 border-0 focus:ring-0 dark:bg-gray-700 dark:border-gray-600 dark:focus:border-blue-500 dark:focus:ring-blue-500 dark:placeholder-gray-400 dark:text-white disabled:cursor-not-allowed disabled:opacity-50 dark:focus:ring-blue-500 p-2.5 rounded-lg text-gray-900 text-xl"
                    placeholder="Enter your city name"
                    type="text"
                    onChange={validation.handleChange}
                    onBlur={validation.handleBlur}
                    value={validation.values.city || ""}
                    invalid={  validation.touched.city && validation.errors.city ? true  : false }
                    />
                </div>
                {validation.touched.city && validation.errors.city ? ( <FormFeedback type="invalid" className="text-red-500">   {validation.errors.city}  </FormFeedback> ) : null}

                <div className="mb-6 slef-center align-center">
                    <Button type="submit" className="lg:w-[15rem]  bg-gradient-to-r from-purple-500 to-pink-500 mx-[4rem]">   Create Account </Button>
                </div>


                <p className="text-sm text-gray-500 dark:text-gray-300 text-center text-md cursor-pointer" onClick={() => Alredyhave()}> Wait?&nbsp;
                    <a  className="text-primary-600 dark:text-primary-300 text-lg">   I already have account  </a>
                </p>
                </Form>
      </Card>
    </div>
  )
}

export default Signup