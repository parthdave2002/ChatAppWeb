import React, { FC, useState } from 'react';
import { BsPatchCheckFill } from "react-icons/bs";
import FAQPage from '../FAQ/FAQ';

const Pricing: FC = () => {

    const [isAnnual, setIsAnnual] = useState(false);

    const FreePlan = [
        {
            name:"Unlimited chat"
        },
        {
            name:"Unlimited group create"
        },
        {
            name:"Limited video call"
        },
        {
            name:"Limited audio call"
        },
        {
            name:"Profile update"
        },
        {
            name:"Multiple language support"
        },
        
    ]

    const ProPlan = [
        {
            name:"Unlimited group chat"
        },
        {
            name:"Unlimited personal chat"
        },
        {
            name:"Unlimited group create"
        },
        {
            name:"Unlimited audio call"
        },
        {
            name:"Unlimited video call"
        },
        {
            name:"Profile update"
        },
        {
            name:"Multiple language support"
        },
        
    ]

    const EnterprisePlan = [
        {
            name:"Unlimited group Chat"
        },
        {
            name:"Unlimited personal Chat"
        },
        {
            name:"Unlimited group create"
        },
        {
            name:"Unlimited audio call"
        },
        {
            name:"Unlimited video call"
        },
        {
            name:"Profile update"
        },
        {
            name:"Multiple Language support"
        },
        {
            name:"Notification setting"
        },
    ]

    return (
        <>
            <div className="bg-gray-100 dark:bg-darkbackgoundcolor  min-h-screen  items-center justify-center p-8">
                <h2 className="text-[2.5rem] font-bold text-[#554bc7] text-center"> Plans and Pricing </h2>
                <h2 className="text-[1rem] font-semibold text-[#554bc7] mb-4 text-center"> Receive unlimited credits when you pay yearly, and save on your plan.</h2>

                <div className="flex justify-center items-center space-x-2 bg-gray-100 dark:bg-darkacardcolor  rounded-full p-2 w-80 mx-auto mb-4">
                    
                    <button
                        onClick={() => setIsAnnual(false)}
                        className={`flex-1 p-2 text-center rounded-full transition-all ${
                        !isAnnual
                            ? "bg-white text-black shadow"
                            : "text-gray-500 hover:text-black  dark:text-gray-50 dark:hover:text-gray-100"
                        }`}
                    >
                        Monthly
                    </button>
                    
                    <button
                        onClick={() => setIsAnnual(true)}
                        className={`flex-1 p-2 text-center rounded-full transition-all ${
                        isAnnual
                            ? "bg-white text-black shadow"
                            : "text-gray-500 hover:text-black dark:text-gray-50 dark:hover:text-gray-100"
                        }`}
                    >
                        Annual <span className="text-green-500 font-medium">Save 20%</span>
                    </button>
                </div>

                <div className='flex flex-col md:flex-row gap-4'>
                    <div className='max-w-4xl p-4 min-h-[30rem] w-full bg-gray-50 dark:bg-darkacardcolor rounded-lg shadow-md flex flex-col justify-between'> 
                        <div>
                                <div className='flex justify-between dark:text-gray-50'> 
                                    <div className='text-[1.3rem] font-semibold self-center'>Free </div>
                                    <div className='text-[2rem] font-semibold'> $0 </div>
                                </div>
                    
                                <div className='my-3 flex flex-col gap-y-4'>
                                    {FreePlan && FreePlan.map((item:any) =>(
                                        <div className='flex gap-x-[1.5rem]'>
                                        <div className='justify-center self-center'><BsPatchCheckFill className='fill-green-800 h-[1.3rem] w-[1.3rem] dark:fill-green-400' /></div>
                                        <div className='dark:text-gray-200'> {item.name}</div>
                                        </div>
                                    ))}
                                </div>
                        </div>
                        <button type="button" className="w-full border border-gray-800 hover:border-[#4536f1cf] mt-4 px-4 py-2 shadow-lg shadow-indigo-500/40 hover:text-white bg-gray-100 rounded-lg hover:bg-[#554bc7] " > Get started for Free </button>     
                    </div>

                    <div className='max-w-4xl p-4 min-h-[30rem] w-full bg-gray-50 dark:bg-darkacardcolor rounded-lg shadow-md flex flex-col justify-between'> 
                        <div>
                                <div className='flex justify-between dark:text-gray-50'> 
                                    <div className='text-[1.3rem] font-semibold self-center'> Pro <span className="inline-flex items-center rounded-full bg-[#554bc7] px-2 py-1 text-xs font-medium text-gray-50 ring-1 ring-inset ring-red-600/10"> Recommended </span> </div>
                                    <div className='text-[2rem] font-semibold'> {isAnnual ?  "$77" : "$8" } </div>
                                </div>
                    
                                <div className='my-3 flex flex-col gap-y-4'>
                                    {ProPlan && ProPlan.map((item:any) =>(
                                        <div className='flex gap-x-[1.5rem]'>
                                        <div className='justify-center self-center'><BsPatchCheckFill className='fill-green-800 h-[1.3rem] w-[1.3rem]  dark:fill-green-400' /></div>
                                        <div  className='dark:text-gray-200'> {item.name}</div>
                                        </div>
                                    ))}
                                </div>
                        </div>
                        <button type="button" className="w-full border border-gray-800 hover:border-[#4536f1cf] mt-4 px-4 py-2 shadow-lg shadow-indigo-500/40 text-white bg-gray-800 rounded-lg hover:bg-[#554bc7] " > Get started with Pro </button>
                    </div>

                    <div className='max-w-4xl p-4 min-h-[30rem] w-full bg-gray-50 dark:bg-darkacardcolor rounded-lg shadow-md flex flex-col justify-between'> 
                        <div>
                                <div className='flex justify-between dark:text-gray-50 '> 
                                    <div className='text-[1.3rem] font-semibold self-center'> Enterprise </div>
                                    <div className='text-[2rem] font-semibold'>  {isAnnual ?  "$115" : "$12" }</div>
                                </div>
                    
                                <div className='my-3 flex flex-col gap-y-4'>
                                    {EnterprisePlan && EnterprisePlan.map((item:any) =>(
                                        <div className='flex gap-x-[1.5rem]'>
                                        <div className='justify-center self-center'><BsPatchCheckFill className='fill-green-800 h-[1.3rem] w-[1.3rem]  dark:fill-green-400' /></div>
                                        <div className='dark:text-gray-200'> {item.name}</div>
                                        </div>
                                    ))}
                                </div>
                        </div>
                        <button type="button" className="w-full border border-gray-800 hover:border-[#4536f1cf] mt-4 px-4 py-2 shadow-lg shadow-indigo-500/40 hover:text-white bg-gray-100 rounded-lg hover:bg-[#554bc7] " > Get started with Enterprise </button>     
                    </div>


                
                </div>

            </div>

            <FAQPage />
        </>
    )
};

export default Pricing;