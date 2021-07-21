import React,{useState, useEffect} from 'react';
import Header from "../Header";
import Footer from "../footer";
import {Link , useHistory} from "react-router-dom";
import ErrorMessage from '../ErrorMessage';
import { login } from "../../actions/userActions";
import { useDispatch, useSelector } from "react-redux";

export default function Login() {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errormsg, setErrormsg] = useState(null);


  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { error, userInfo } = userLogin;

  useEffect(() => {
    if (userInfo) {
      history.push("/dashboard");
    }
  }, [history, userInfo]);

  const submitHandler = (e) => {
    e.preventDefault();
    if (error) {
      setErrormsg("Invalid Email or Password!");
    } else 
    setErrormsg(null);
    dispatch(login(email, password));
  };
    return (
        <div>
        <Header/>

        <section className="text-gray-600 body-font relative mb-10">
  <div className="container px-5 py-15 mt-10 mx-auto flex sm:flex-nowrap flex-wrap">
    <div className="lg:w-2/3 md:w-1/2 overflow-hidden sm:mr-10 rounded
     flex items-end justify-start relative">
    <img className="object-cover object-center " alt="hero" src="https://source.unsplash.com/1000x600/?typing"/>
    </div>
    <div className="lg:w-1/3 md:w-1/2 bg-green-200 flex flex-col md:ml-auto w-full p-10">
    <Link to="/" className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
        <img src="https://res.cloudinary.com/dhtobgfyw/image/upload/v1625649334/download_brk2p6.png"  
        className="w-10 h-10 text-white p-0.5 bg-green-500 rounded-full" alt="logo"/>
        <span className="ml-3 text-xl">Morntea</span>
      </Link>
    <h2 className="sm:text-3xl text-2xl font-medium title-font mb-4 mt-4 text-gray-900 text-justify">Login
            </h2>

            <form className="loginForm" id="loginForm" onSubmit={submitHandler}>
        
      <div className="relative mb-4">
        <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email</label>
        <input type="email" required id="email" name="email" 
        className="w-full bg-white rounded border border-gray-300 focus:border-green-500 focus:ring-2 
        focus:ring-green-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors 
        duration-200 ease-in-out" 
          value={email}
          onChange = {(e)=> setEmail(e.target.value)}
        />
      </div>

      <div className="relative mb-4">
        <label htmlFor="password" className="leading-7 text-sm text-gray-600">Password</label>
        <input type="password" required minLength="6" id="password" name="password" className="w-full bg-white 
        rounded border border-gray-300 
        focus:border-green-500 focus:ring-2 focus:ring-green-200 text-base outline-none text-gray-700 py-1 px-3 
        leading-8 transition-colors duration-200 ease-in-out"
        value={password}
          onChange= {(e)=> setPassword(e.target.value)} />
      </div>

      {errormsg && <ErrorMessage variant="danger">{errormsg}</ErrorMessage>}

      <input class="text-white w-full bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 
      rounded text-lg"  name="login" id="login" type="submit" value="Login"/>

</form>

      <Link className="text-xs text-gray-600 mt-3 hover:text-black">Forgot Password?</Link>
      <p className="text-sm text-gray-600 mt-3 text-center">Don't have an account?
      <Link to="/register" className="text-sm text-green-600 mt-3 hover:text-gray-600"> Register</Link>
      </p>


    </div>
  </div>
</section>

        <Footer/>
            
        </div>
    )
}
