import { FC} from 'react';
import { useNavigate } from "react-router";

const AdminDataList : FC = function()  {
    const navigation = useNavigate();

    const Detailpagecall = (data:any) =>{
        if(data == "User"){
          navigation("/admin-user");
        } 
        else if(data == "Role"){
          navigation("/admin-role");
        }
        else if(data == "Module"){
          navigation("/admin-module");
        }
        else if(data == "Access List"){
          navigation("/admin-accesslist");
        }
      }

  return (
    <div className='bg-gray-200 dark:bg-gray-800 border rounded-xl w-[97rem] h-[35rem]  max-h-[ 35rem ] overflow-scroll '>
        <div className="flex justify-items-center grid grid-cols-5 gap-3 lg:p-4   ">
                  
                  <div className="adminDasboardCard"  onClick={() => Detailpagecall("User")}>
                    <div className="adminDasboardCardHeader "> Users </div>
                    <div className="adminDasboardCardDetail"> 1 </div>
                  </div>  

                  <div className="adminDasboardCard" onClick={() => Detailpagecall("Role")}>
                      <div className="adminDasboardCardHeader" > Roles  </div>
                      <div className="adminDasboardCardDetail"> 1 </div>
                  </div>

                  <div className="adminDasboardCard" onClick={() => Detailpagecall("Module")}>
                      <div className="adminDasboardCardHeader" > Modules  </div>
                      <div className="adminDasboardCardDetail"> 1 </div>
                  </div>

                  <div className="adminDasboardCard" onClick={() => Detailpagecall("Access List")}>
                      <div className="adminDasboardCardHeader" > Access List  </div>
                      <div className="adminDasboardCardDetail"> 1 </div>
                  </div>

                  <div className="adminDasboardCard">
                      <div className="adminDasboardCardHeader "> Dropped Calls  </div>
                      <div className="adminDasboardCardDetail"> 1</div>
                  </div>

                  
        </div>
     
       
    </div>
  )
}

export default AdminDataList;