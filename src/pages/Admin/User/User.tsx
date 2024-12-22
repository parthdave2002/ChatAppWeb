import {  FC, useEffect, useReducer, useState } from 'react';
import * as Yup from "yup";
import { useFormik } from "formik";
import { Form, Input, FormFeedback } from "reactstrap";
import { Button,  Checkbox,  Modal,  ModalBody,  ModalFooter,  ModalHeader,  Table} from "flowbite-react";
import { HiSearch,  HiShare, HiPencil, HiOutlineX  , HiX, HiOutlinePlus    } from "react-icons/hi";
import { MdDelete, MdMoreHoriz ,MdEmail   } from "react-icons/md";
import { BiCheckDouble } from "react-icons/bi";
import { FaExclamationTriangle, FaUserAlt, FaLockOpen , FaLock, FaUserCog    } from "react-icons/fa";
import ToastMeaasage from '../../../common/Toastify';
import { toast } from 'react-toastify';
import Select from "react-select";
import { useDispatch, useSelector } from "react-redux";
import  { getUserlist }  from "../../../Store/actions.js";
import  moment  from 'moment';
import  data  from "../../../../public/video/snowflakes_-_6310 (720p).mp4"

const User : FC = function()  {
  const dispatch = useDispatch();

  // ----------- Api Calling and get Data from reducder code start --------------------------
  const [User_List, setUser_List] = useState([]);

    const { UserList } = useSelector((state: any) => ({
      UserList: state.User.UserList,
    }));

     useEffect(() =>{
      dispatch(getUserlist());
    },[dispatch]);

    useEffect(() => {
      setUser_List(UserList ? UserList : null);
    }, [UserList]);

  // ----------- Api Calling and get Data from reducder code start --------------------------

  // ----------------- Function to handle checkbox change code start  -----------------
    const [Access_id, setAccess_id] = useState<string[]>([]);
    const handleCheckboxChange = (item:any) => {
      // Check if the checkbox is already in the array
      if (Access_id.includes(item._id)) {
        // If checked, remove it
        setAccess_id((prevIds) => prevIds.filter((id) => id !== item._id));
      } else {
        // If unchecked, add it
        setAccess_id((prevIds:any) => [...prevIds, item._id]);
      }
    };
  // ----------------- Function to handle checkbox change code end  -----------------

  // ------------------- Open Add code start---------------------------
  const [OpenModal, setOpenModal] = useState(false);
  const Addusercalled = () =>{
    setOpenModal(true);
  }
  // ------------------- Open Add code end---------------------------

  // ------------------- Edit User code start---------------------------
    const [Edit_user, setEdit_user] = useState(false);
    const [Edit_user_id, setEdit_user_id] = useState(0);

    const EditUserCalled = () =>{
      setEdit_user(true);
      setOpenModal(true);
      setEdit_user_id(1)
    }
  // ------------------- Edit User code end---------------------------

  // ------------------- Delete User code start---------------------------
    const [delete_user_modal, setdelete_user_modal] = useState(false);
    const DeleteUserCalled = () =>{
      setdelete_user_modal(true);
    }

    const DeletedUserCall =() =>{
      toast.success("User Deleted Successfully")
      setdelete_user_modal(false);
    }
  // ------------------- Delete User code end---------------------------
     
  // ------------------- View User code start---------------------------
      const [view_user_modal, setview_user_modal] = useState(false);
      const ViewUserCalled = (data:any) =>{
        if(Access_id.length> 0  ||  Access_id.length == 0 ){
          setview_user_modal(true);
        }
      }
    // ------------------- View User code end---------------------------
    
  // -------------------Role Selection code start -----------------------------
    const roleoptions= [
      { label: "Admin", value : 1},
      { label: "Developer", value : 2},
      { label:  "Human Resource", value : 3},
      { label: "Manager", value : 4},
      { label: "Requiter Manager", value : 5},
      { label: "Account Manager", value : 6},
      { label: "Influencer", value : 7}
    ]

    const [UserRoleid, setUserRoleid] = useState([]);
    const [selectedOption, setSelectedOption] = useState(null);
    const Roledata = (data: any) => {
      if (!data) {
        setUserRoleid([]);
        setSelectedOption(null);
      } else {
        setUserRoleid(data.value);
        setSelectedOption(data);
      }
    };
  // -------------------Role Selection code end -----------------------------

    // -------------------Active / Deactive User code start -----------------------------
    const activeoptions= [
      { label: "Active", value : 1},
      { label: "Deactive", value : 2},
    ]

    const [is_active_id, setis_active_id] = useState([]);
    const [selectedActiveOption, setSelectedActiveOption] = useState(null);
    const Activedata = (data: any) => {
      if (!data) {
        setis_active_id([]);
        setSelectedActiveOption(null);
      } else {
        setis_active_id(data.value);
        setSelectedActiveOption(data);
      }
    };
  // -------------------Active / Deactive User code end -----------------------------

    const UserListData = [
      {
        id : 1,
        name : "Parth Dave",
        username : "parth@123",
        email: 'dave@gmail.com',
        role : "Developer",
        is_active : true,
        created_by : "Admin",
        created_at : "10-04-2023", 
        profile_img :"../../img/user/picture_profile_girl.png"
      }
    ]

  return (
    <div  className=' bg-backgoundcolor dark:bg-gray-900 w-screen h-screen' >

        <div  className='flex justify-between  p-3  '>
            <div className="relative shadow-xl ">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">  <HiSearch className="w-5 h-5 text-gray-500 dark:text-gray-400"  />  </div>
              <input type="search"  id="default-search"  className="block w-full p-3 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  placeholder="Search for user..."  required   />
            </div>
            <Button  gradientDuoTone="redToYellow" onClick={() => {Addusercalled()}} className='rounded-2xl  w-38 h-9  flex justify-between'>  <HiOutlinePlus  className='h-[1rem] w-[2rem]'/><div className='text-lg'> Add User</div> </Button>
        </div>

        <div className='p-3 '>
        <div className="overflow-x-auto  p-3">
          <Table hoverable className=' shadow-lg  bg-backgoundcolor dark:bg-gray-900 rounded-md' >
            <Table.Head>
              <Table.HeadCell > <Checkbox /> </Table.HeadCell>
              <Table.HeadCell className='font-bold text-[1rem]'>Name</Table.HeadCell>
              <Table.HeadCell className='font-bold text-[1rem]' >Username</Table.HeadCell>
              <Table.HeadCell className='font-bold text-[1rem]'>Role</Table.HeadCell>
              <Table.HeadCell className='font-bold text-[1rem]'>Active</Table.HeadCell>
              <Table.HeadCell className='font-bold text-[1rem]'>Created by</Table.HeadCell>
              <Table.HeadCell className='font-bold text-[1rem]'>Created at</Table.HeadCell>
            </Table.Head>

            <Table.Body className="divide-y ">
                {UserList && UserList.map((data:any) =>(
                    <Table.Row  >
                      <Table.Cell > <Checkbox  id={data._id} onChange={() => handleCheckboxChange(data)} checked={Access_id.includes(data._id)}/> </Table.Cell>
                      <Table.Cell >  {data.name} </Table.Cell>
                      <Table.Cell> {data.username}</Table.Cell>
                      <Table.Cell onClick={() => {ViewUserCalled(data._id)}}> {data.role}</Table.Cell>
                      <Table.Cell>   
                            {data.is_active == true ? 
                              <div className="flex items-center">  <div className="mr-2 h-2.5 w-2.5 rounded-full bg-green-400"></div> Active </div>
                            : <div className="flex items-center"> <div className="mr-2 h-2.5 w-2.5 rounded-full bg-Red"></div> Deactive </div>
                            }
                      </Table.Cell>
                      <Table.Cell > {data.created_by}</Table.Cell>
                      <Table.Cell > {moment(data.created_at).format("DD-MM-YYYY")}</Table.Cell>
                    </Table.Row>
                ))}
            </Table.Body>
          </Table>
        </div> 
          

          {Access_id.length > 0 ?
              <div className='bg-gray-900 p-3 rounded-full  w-[50rem]  text-gray-50 lg:mx-[16rem] '>
                <div className='flex justify-between'>
                <div className='bg-gray-600 hover:bg-gray-700 p-1 rounded-full flex justify-around w-[3rem]' >  <HiOutlineX   className='w-[2rem] h-[1.5rem]' />    </div>
                <div className=' p-1 rounded-full flex justify-around w-[12rem]' >   <div className='bg-gray-600 hover:bg-gray-700 w-[2rem]  text-center rounded-xl'> {Access_id.length } </div> <div className='text-[1rem] font-semibold'> Items selected</div>    </div>
                  <div className='bg-gray-600 hover:bg-gray-700 p-1 rounded-full flex justify-around w-[6rem]' >  <MdMoreHoriz  className='w-[2rem] h-[1.5rem]' /> <div className='text-[1rem] font-semibold'>More</div>    </div>
                  <div className='bg-gray-600 hover:bg-gray-700 p-1 rounded-full flex justify-around w-[6rem]' >  <HiShare  className='w-[2rem] h-[1.5rem]' /> <div className='text-[1rem] font-semibold'>Share</div>    </div>
                    {Access_id.length > 1 ? 
                    <div className='bg-gray-800 p-1 rounded-full flex justify-around w-[6rem]' >  <HiPencil  className='w-[1.5rem] h-[1.5rem]' /> <div className='text-[1rem] font-semibold'> Edit</div>    </div>
                    : <div className='bg-gray-600 hover:bg-gray-700 p-1 rounded-full flex justify-around w-[6rem]'  onClick={() => {EditUserCalled()}}>  <HiPencil  className='w-[1.5rem] h-[1.5rem]' /> <div className='text-[1rem] font-semibold'> Edit</div>    </div>
                    }
                  <div className='bg-red-500 hover:bg-red-600 p-1 rounded-full flex justify-around w-[6rem]' onClick={() => {DeleteUserCalled()}}> <MdDelete className='w-[2rem] h-[1.5rem]' /> <div className='text-[1rem] font-semibold'>Delete</div>   </div>
                </div>
              </div>    
          : null}
        </div>
       {/* Add User / Edit User Modal */}
        <Modal onClose={() => setOpenModal(false)} size="xl" show={OpenModal}  className=''>
              <ModalHeader className='flex justify-between p-3 bg-gray-200 dark:bg-gray-800'>  <div className='text-[2rem]'> { Edit_user_id == 0  ? "Add User" :  "Edit User" }</div>   </ModalHeader>
              <ModalBody  className='bg-gray-200 dark:bg-gray-800' >  

              <div className="mb-6 flex flex-col gap-y-3 relative shadow-xl bg-blue-100  dark:bg-gray-700 rounded-md">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none rounded-r-md"> <FaUserAlt className="w-6 h-6 text-gray-500 dark:text-gray-400" /> </div>
                    <Input
                      id="name"
                      className="lg:ml-[3rem] bg-blue-100 border-0 focus:ring-0 dark:bg-gray-700 dark:border-gray-600 dark:focus:border-blue-500 dark:focus:ring-blue-500 dark:placeholder-gray-400 dark:text-white disabled:cursor-not-allowed disabled:opacity-50 dark:focus:ring-blue-500 p-2.5 rounded-lg text-gray-900 text-xl"
                      name="name"
                      placeholder="Enter Name"
                      type="text"
                      // onChange={validation.handleChange}
                      // onBlur={validation.handleBlur}
                      // value={validation.values.name || ""}
                      // invalid={  validation.touched.name && validation.errors.name  ? true  : false  }
                    />
                </div>

                <div className="mb-6 flex flex-col gap-y-3 relative shadow-xl bg-blue-100  dark:bg-gray-700 rounded-md">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none rounded-r-md"> <FaUserAlt className="w-6 h-6 text-gray-500 dark:text-gray-400" /> </div>
                    <Input
                      id="usernname"
                      className="lg:ml-[3rem] bg-blue-100 border-0 focus:ring-0 dark:bg-gray-700 dark:border-gray-600 dark:focus:border-blue-500 dark:focus:ring-blue-500 dark:placeholder-gray-400 dark:text-white disabled:cursor-not-allowed disabled:opacity-50 dark:focus:ring-blue-500 p-2.5 rounded-lg text-gray-900 text-xl"
                      name="usernname"
                      placeholder="Enter Username"
                      type="text"
                      // onChange={validation.handleChange}
                      // onBlur={validation.handleBlur}
                      // value={validation.values.usernname || ""}
                      // invalid={  validation.touched.usernname && validation.errors.usernname  ? true  : false  }
                    />
                </div>
                {/* {validation.touched.usernname && validation.errors.usernname ? ( <FormFeedback type="invalid" className="text-red-500">  {validation.errors.usernname} </FormFeedback> ) : null} */}

                <div className="mb-6 flex flex-col gap-y-3 relative shadow-xl bg-blue-100  dark:bg-gray-700 rounded-md">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none rounded-r-md"> <MdEmail className="w-6 h-6 text-gray-500 dark:text-gray-400" /> </div>
                    <Input
                      id="email"
                      className="lg:ml-[3rem] bg-blue-100 border-0 focus:ring-0 dark:bg-gray-700 dark:border-gray-600 dark:focus:border-blue-500 dark:focus:ring-blue-500 dark:placeholder-gray-400 dark:text-white disabled:cursor-not-allowed disabled:opacity-50 dark:focus:ring-blue-500 p-2.5 rounded-lg text-gray-900 text-xl"
                      name="email"
                      placeholder="Enter Email"
                      type="email"
                      // onChange={validation.handleChange}
                      // onBlur={validation.handleBlur}
                      // value={validation.values.email || ""}
                      // invalid={  validation.touched.email && validation.errors.email  ? true  : false  }
                    />
                </div>
                {/* {validation.touched.email && validation.errors.email ? ( <FormFeedback type="invalid" className="text-red-500">  {validation.errors.email} </FormFeedback> ) : null} */}

                <div className="mb-6 flex flex-col gap-y-3 relative shadow-xl bg-blue-100  dark:bg-gray-700 rounded-md">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none rounded-r-md"> <FaLockOpen className="w-6 h-6 text-gray-500 dark:text-gray-400" /> </div>
                    <Input
                      id="password"
                      className="lg:ml-[3rem] bg-blue-100 border-0 focus:ring-0 dark:bg-gray-700 dark:border-gray-600 dark:focus:border-blue-500 dark:focus:ring-blue-500 dark:placeholder-gray-400 dark:text-white disabled:cursor-not-allowed disabled:opacity-50 dark:focus:ring-blue-500 p-2.5 rounded-lg text-gray-900 text-xl"
                      name="password"
                      placeholder="Enter Password"
                      type="password"
                      // onChange={validation.handleChange}
                      // onBlur={validation.handleBlur}
                      // value={validation.values.password || ""}
                      // invalid={  validation.touched.password && validation.errors.password  ? true  : false  }
                    />
                </div>
                {/* {validation.touched.password && validation.errors.password ? ( <FormFeedback type="invalid" className="text-red-500">  {validation.errors.password} </FormFeedback> ) : null} */}

                <div className="mb-6 flex flex-col gap-y-3 relative shadow-xl bg-blue-100  dark:bg-gray-700 rounded-md">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none rounded-r-md"> <FaLock className="w-6 h-6 text-gray-500 dark:text-gray-400" /> </div>
                    <Input
                      id="Repassword"
                      className="lg:ml-[3rem] bg-blue-100 border-0 focus:ring-0 dark:bg-gray-700 dark:border-gray-600 dark:focus:border-blue-500 dark:focus:ring-blue-500 dark:placeholder-gray-400 dark:text-white disabled:cursor-not-allowed disabled:opacity-50 dark:focus:ring-blue-500 p-2.5 rounded-lg text-gray-900 text-xl"
                      name="Repassword"
                      placeholder="Reenter  Password"
                      type="password"
                      // onChange={validation.handleChange}
                      // onBlur={validation.handleBlur}
                      // value={validation.values.Repassword || ""}
                      // invalid={  validation.touched.Repassword && validation.errors.Repassword  ? true  : false  }
                    />
                </div>
                {/* {validation.touched.Repassword && validation.errors.Repassword ? ( <FormFeedback type="invalid" className="text-red-500">  {validation.errors.usernname} </FormFeedback> ) : null} */}
                
                  <Select   
                    options={roleoptions}    
                    className=" bg-blue-100 shadow-xl border-0 focus:ring-0 dark:bg-gray-700 dark:border-gray-600 dark:focus:border-blue-500 dark:focus:ring-blue-500 dark:placeholder-gray-400 dark:text-white disabled:cursor-not-allowed disabled:opacity-50 dark:focus:ring-blue-500 rounded-lg text-gray-900 text-xl"
                    isClearable={true}
                    isMulti={false}
                    value={selectedOption}
                    onChange={(e) => {Roledata(e)}}
                    placeholder="Select a role..."
                    styles={{
                      control: (provided) => ({
                          ...provided,
                          border : "none",
                          backgroundColor: '#e6f3ff', // Background color goes here
                      }),
                    }}
                  />

                  <Select   
                    options={activeoptions}    
                    className="my-4 bg-blue-100 shadow-xl border-0 focus:ring-0 dark:bg-gray-700 dark:border-gray-600 dark:focus:border-blue-500 dark:focus:ring-blue-500 dark:placeholder-gray-400 dark:text-white disabled:cursor-not-allowed disabled:opacity-50 dark:focus:ring-blue-500 rounded-lg text-gray-900 text-xl"
                    isClearable={true}
                    isMulti={false}
                    value={selectedActiveOption}
                    onChange={(e) => {Activedata(e)}}
                    placeholder="Select status..."
                    styles={{
                      control: (provided) => ({
                          ...provided,
                          border : "none",
                          backgroundColor: '#e6f3ff', // Background color goes here
          
                      }),
                    }}
                  />
                   
              </ModalBody>
              <ModalFooter className='p-2  justify-end bg-gray-200 dark:bg-gray-800'> 
                  <Button  className='p-0 rounded-xl  bg-green-600 hover:bg-red-700  h-9 '> <BiCheckDouble className='w-[2rem] h-[1.5rem]'/>  <div className='text-[1rem]'> Add User</div> </Button>
                  <Button onClick={() => setOpenModal(false)}  className='p-0 rounded-xl bg-red-600 hover:bg-red-700 h-9 '> <HiX  className='w-[2rem] h-[1.5rem]'/>  <div className='text-[1rem] '>  Close </div> </Button> 
              </ModalFooter>
        </Modal>

      {/* Delete User Modal */}
        <Modal onClose={() => setdelete_user_modal(false)} show={delete_user_modal}>
              <ModalHeader className='flex justify-between p-3 '>  <div className='text-[2rem]'> Delete User</div>   </ModalHeader>
              <ModalBody className='flex  bg-red-200 gap-x-4'> <FaExclamationTriangle  className='w-[2rem] h-[2rem]'/> <div className='self-center text-xl'>  Are you sure you want to delete this User</div>   </ModalBody>
              <ModalFooter className='p-2  justify-end'> 
                  <Button onClick={() => setdelete_user_modal(false)}  className='p-0 rounded-xl bg-gray-500 h-9 '> <HiX  className='w-[2rem] h-[1.5rem]'/>  <div className='text-[1rem] '>  Close </div> </Button> 
                  <Button onClick={() => DeletedUserCall()}  className='p-0 rounded-xl bg-red-600 h-9 '> <MdDelete  className='w-[2rem] h-[1.5rem]'/>  <div className='text-[1rem] '>  YES,  DELETE USER </div> </Button> 
              </ModalFooter>
        </Modal>

      {/* View User Modal */}
        <Modal dismissible  onClose={() => setview_user_modal(false)} show={view_user_modal} >
              <ModalBody className='flex  bg-gray-200 dark:bg-gray-800 py-1'> 
                 
                        {UserListData.map((data:any) =>(
                          <div className='p-3 w-[50rem]'>
                              <div className='text-center'>
                                <div><img src={data.profile_img} className='h-[12rem] w-[12rem]'/> </div>
                                <div className=' text-[2rem] dark:text-gray-200'> {data.name}</div>
                              </div>

                              <div className='mt-4 flex justify-between'>
                                  <div className='flex  gap-x-3'>
                                    <FaUserAlt  className=' h-[1.5rem]  w-[2rem] dark:text-gray-200' /> 
                                    <div className=' text-[1.2rem]  text-blue-600 '> {data.username}</div>
                                  </div>

                                  <div className='flex   gap-x-3'>
                                    <FaUserCog className=' h-[1.5rem]  w-[2rem] dark:text-gray-200' /> 
                                    <div className=' text-[1.2rem] text-blue-600'> {data.role}</div>
                                  </div>

                                  <div className='flex   gap-x-3 '>
                                  <MdEmail className=' h-[1.7rem]  w-[2rem] dark:text-gray-200' /> 
                                      <div className=' text-[1.2rem] text-blue-600'> {data.email}</div>
                                  </div>
                              </div>                           
                          </div>
                        ))}
                 
              </ModalBody>
        </Modal>

        <ToastMeaasage />
    </div>
  )
}

export default User;