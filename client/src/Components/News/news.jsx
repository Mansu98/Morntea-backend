import React from 'react'
import Header from "../Header";
import Footer from "../footer";
import {Link} from "react-router-dom";
import MoreNews from './morenews';

export default function news() {
    return (
        <div>
        <Header/>   
        <section  className="text-gray-600 body-font">
  <div  className="container px-5 py-15 mx-auto">
  <h2 className="sm:text-3xl text-2xl font-medium title-font mb-4 mt-4 text-gray-900 text-center">News
            <center><span className="inline-block h-1 w-10 bg-green-500 mt-2 mb-2"></span></center></h2>

    <div  className="lg:w-full flex flex-col sm:flex-row sm:items-justify items-start mx-auto">
      <Link to ="#"  className="flex-grow sm:p-5 text-2xl mb-5 font-medium title-font text-gray-700 text-justify hover:text-green-700">
       IPO of Union Life Insurance Oversubscribed on First Day Itself; 4,50,214 Applicants Submit Applications
      </Link>
      <Link to="#"  className="flex-grow sm:p-5  text-2xl mb-5 font-medium title-font text-gray-700 text-justify hover:text-green-700">
      NEPSE Gains 23.97 Points and Closes at 2,825.10; Finance Sector Gains the Most 3.09%
      </Link>
      
      </div>
  </div>
</section>
      
      <section  className="text-gray-600 body-font">
  <div  className="container mx-auto flex px-5 py-0 md:flex-row flex-col items-center">
    <div  className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
      <img  className="object-cover object-center rounded" alt="hero" src="https://source.unsplash.com/1000x800/?news" />
    </div>
    <div  className="lg:flex-grow md:w-1/2 lg:pl-5 md:pl-5 flex flex-col md:items-start md:text-left items-justify text-justify">
      <Link className=" leading-relaxed text-gray-800 hover:text-green-700">Laxmi Bank expands with 130th Branch in
       Budhanilkantha; service seekers at Ganesh Chowk to receive full range of retail banking services</Link>
     <small className="mt-1">3 hours ago</small>
   <p className="mt-2 "> 
Laxmi Bank has inaugurated its 130th Branch in Ganesh Chowk, Ward No. 6 of Budhanilkantha municipality of 
Kathmandu district. Conveniently located at Ganesh Chowk, the branch can offer a full range of retail banking 
services including small businesses. With the above new addition, the Laxmi 
Bank network now includes 130 branches across&nbsp;48 districts, 5 hospital service counters, 6 extension co.
</p>

<Link className=" leading-relaxed mt-8 text-gray-800 hover:text-green-700">Nepal Airlines Corporation (NAC) aircraft
 flying to China to bring COVID-19 vaccines
       </Link>
       <Link className=" leading-relaxed mt-8 text-gray-800 hover:text-green-700">KCL Astute Capital calls SGM on Shrawan 8; to 
       endorse transfer of majority shares to Garima Bikas Bank and remane as Garima Capital</Link>

       <Link className=" leading-relaxed mt-8 text-gray-800 hover:text-green-700">Samsung Nepal Launches Galaxy M32;
        The Binge Monster with the segment best Display in Nepal</Link>
    </div>
  </div>
</section>

<MoreNews/>
 
<Footer/>
        </div>
    )
}
