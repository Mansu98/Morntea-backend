import React ,{useEffect} from 'react';
import "./topbar.css";
import {Link} from "react-router-dom";
import { NotificationsNone, Language, Settings } from "@material-ui/icons";
import AddIcon from '@material-ui/icons/Add';
import {useSelector } from "react-redux";

export default function Topbar() {
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  useEffect(() => {}, [userInfo]); 

  return (
    <div className="text-gray-600 body-font bg-green-100">
    <div className="container mx-auto md:flex flex-wrap p-5 px-8 flex-col md:flex-row items-center">
      <Link  to ="/dashboard" className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
   <img src="https://res.cloudinary.com/dhtobgfyw/image/upload/v1625649334/download_brk2p6.png" alt="logo"
    className="w-10 h-10 text-white p-0.5 bg-green-500 rounded-full"/>
   <span className="ml-3 text-xl">Morntea</span>
 </Link>
 <nav className="md:ml-auto flex items-center text-base flex title-font font-medium items-center text-gray-600 mb-4 md:mb-0">

    <Link to="/dashboard/createpost" className="inline-flex text-white bg-green-500 border-0 ml-3 mr-6
     py-1 px-3 focus:outline-none hover:bg-green-600 rounded text-md text-base mt-4 md:mt-0 pr-4" > 
      <AddIcon/> Create Post 
      </Link>
      
      <Link to ="#" className="mr-5 hover:text-gray-900"><NotificationsNone />
            </Link>
      <Link to ="#"  className="mr-5 hover:text-gray-900"> <Language />
            </Link>
      <Link  to ="#"  className="mr-5 hover:text-gray-900"><Settings /></Link>

      <Link  to ="/dashboard/users"  className="mr-5 hover:text-gray-900">
      <img src={`${userInfo.image}`}
       alt="" className="topAvatar" />
       </Link>


    </nav>
      </div>
    </div>
  );
}
