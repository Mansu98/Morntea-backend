import React from 'react'
import Header from "./Header";
import Footer from "./footer";

import {Link} from "react-router-dom";

export default function contactus() {
    return (
        <div>

        <Header/>   
        <section className="text-gray-600 body-font relative">
        <h2 className="sm:text-3xl text-2xl font-medium title-font mb-4 mt-4 text-gray-900 text-center">Contact Us
            <center><span className="inline-block h-1 w-10 rounded bg-green-500 mt-2 mb-2"></span></center></h2>
  <div className="container px-5 py-15 mx-auto mb-10 flex sm:flex-nowrap flex-wrap">
    <div className="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14189138.917453121!2d60.258408621076164!3d29.744509399606315!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3996864275d9755f%3A0x2b1e92d89d4bb3ae!2sButwal%2C%20Nepal!5e0!3m2!1sen!2sus!4v1625654826763!5m2!1sen!2sus"
       width="100%" height="100%" className="absolute inset-0" frameborder="0" title="map" marginheight="0"
       marginwidth="0" scrolling="no" ></iframe>
      <div className="bg-white relative flex flex-wrap py-6 rounded shadow-md">
        <div className="lg:w-1/2 px-6">
          <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">ADDRESS</h2>
          <p className="mt-1">Butwal-5, Butwal, Rupendehi Nepal</p>
        </div>
        <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
          <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">EMAIL</h2>
          <Link className="text-green-500 leading-relaxed">morntea_atservice@email.com</Link>
          <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">PHONE</h2>
          <p className="leading-relaxed">123-456-7890</p>
        </div>
      </div>
    </div>
    <div className="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
      <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">Feedback</h2>
      <p className="leading-relaxed mb-5 text-gray-600">We will response to you as soon as possible. Thankyou!</p>
      <form>
      <div className="relative mb-4">
        <label for="name" className="leading-7 text-sm text-gray-600">Name</label>
        <input type="text" id="name" name="name" required
        className="w-full bg-white rounded border border-gray-300 focus:border-green-500 focus:ring-2
         focus:ring-green-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors 
         duration-200 ease-in-out"/>

      </div>
      <div className="relative mb-4">
        <label for="email" className="leading-7 text-sm text-gray-600">Email</label>
        <input type="email" id="email" name="email" required 
        className="w-full bg-white rounded border border-gray-300 focus:border-green-500 focus:ring-2
         focus:ring-green-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors
          duration-200 ease-in-out" />
      </div>
      <div className="relative mb-4">
        <label for="message" className="leading-7 text-sm text-gray-600">Message</label>
        <textarea id="message" name="message" required className="w-full bg-white rounded border border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
      </div>
      <button className="text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">Button</button>
      </form>
      <p className="text-xs text-gray-500 mt-3">Contact us if case you have any question related to our site.</p>
    </div>
  </div>
</section>
<Footer/>
        </div>
    )
}
