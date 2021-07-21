import React from 'react'
import Header from "./Header";
import Footer from './footer';
import OurTeam from "./ourteam";



export default function aboutus() {
    return (
        <div>
        <Header/>  
        <section className="text-gray-600 body-font">
  <div className="container px-5 py-15 mx-auto flex flex-col"> 
  <h2 className="sm:text-3xl text-2xl font-medium title-font mb-4 mt-4 text-gray-900 text-center">About Us
            <center><span className="inline-block h-1 w-10 bg-green-500 mt-2 mb-2"></span></center></h2>
    <div className="lg:w-4/6 mx-auto">
      <div className="rounded-lg h-64 overflow-hidden">
        <img alt="content" className="object-cover object-center h-full w-full" 
        src="https://source.unsplash.com/1200x500/?news" />
      </div>
      <div className="flex flex-col sm:flex-row mt-10">
        <div className="sm:w-1/3 text-center sm:pr-8 sm:py-8">
          <div className="w-20 h-20 rounded-full inline-flex items-center justify-center bg-gray-200 text-gray-400">
            <img src="https://res.cloudinary.com/dhtobgfyw/image/upload/v1625728069/images_sh6hoj.jpg" 
              class="w-30 h-30  rounded-full" alt="director"/>
          </div>
          <div className="flex flex-col items-center text-center justify-center">
            <h2 className="font-medium title-font mt-4 text-gray-900 text-lg">Phoebe Caulfield</h2>
            <h4 className="font-medium title-font mt-2 text-gray-900 ">Director</h4>

            <div className="w-12 h-1 bg-green-500 rounded mt-2 mb-4"></div>
            <p className="text-base">
Let Your Fingers Do the Walking Through the News and market.</p>
          </div>
        </div>
        <div className="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-justify sm:text-left">
          <p className="leading-relaxed text-lg mb-4">Morntea.com provides live stock quotes, News, announcements,
           Annual and Quarterly reports, and analysis and provides portfolio management tools. Morntea presents a 
           Portfolio tracker specially designed for Nepali needs. It allows you to track all your investments and make 
           you aware of all your gains and losses. You can create your own watchlist for the stocks that you are 
           interested in. Watchlists let you track the stocks even if they are not in your portfolio.
           <br/>  You can set up
            alerts for every price change in the stocks in your watchlist and get SMS alerts and Email notifications.
             Single
           account can manage multiple portfolio. Morntea is developed and run by Asterisk Technology Pvt. Ltd.<br/>
           We realize that, for us to prosper, we need to be flexible and responsive, to delight clients by providing them
            with what they want, when they want it, and before the competition can offer it.</p>
          

         

        </div>
      </div>
    </div>
  </div>
</section>

<OurTeam/>


<Footer/>

        </div>
    )
}
