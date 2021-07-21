import Chart from "../../components/chart/Chart";
import FeaturedInfo from "../../components/featuredInfo/FeaturedInfo";
import "./home.css";
import { userData } from "../../dummyData";
import React ,{useEffect} from 'react';
import {useSelector } from "react-redux";

export default function Home() {
 
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  useEffect(() => {}, [userInfo]);

   function getCurrentDate(separator="/"){

    let newDate = new Date()
    let date = newDate.getDate();
    let month = newDate.getMonth() + 1;
    let year = newDate.getFullYear();
    
    return `${year}${separator}${month<10?`0${month}`:`${month}`}${separator}${date}`
    }
  return (
    <>
    <div className="home">
              
    <h2 className="sm:text-3xl text-2xl font-large mb-4 mt-4 text-green-600 text-justify pl-6">Welcome, {`${userInfo.username}`} <br/>
   <span class="mt-1 text-gray-500 text-sm ">{getCurrentDate()}</span>
        </h2>
        

      <FeaturedInfo />
      <Chart data={userData} title="Post Analytics" grid dataKey="Active Post"/>
    </div>
    </>
  );
}
