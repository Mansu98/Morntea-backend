
import {useHistory} from "react-router-dom";

import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateProfile } from "../../../actions/userActions";
import Loading from "../../../Components/Loading";
import ErrorMessage from "../../../Components/ErrorMessage";



function EditProfile() {

  const history=useHistory();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [image, setImage] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setCpassword] = useState("");
  const [message, setMessage] = useState(null);

  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const userUpdate = useSelector((state) => state.userUpdate);
  const { loading, success } = userUpdate;

  useEffect(() => {
    if (!userInfo) {
      history.push("/");
    } else {
      setUsername(userInfo.username);
      setEmail(userInfo.email);
      setImage(userInfo.image);
    }
  }, [history, userInfo]);

  const postImage = (image) => {
  
    if (image.type === "image/jpeg" || image.type === "image/png") {
      const data = new FormData();
      data.append("file", image);
      data.append("upload_preset", "morntea");
      data.append("cloud_name", "dhtobgfyw");
      fetch("https://api.cloudinary.com/v1_1/dhtobgfyw/image/upload", {
        method: "post",
        body: data,
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setImage(data.url.toString());
          console.log(image);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };


  const submitHandler = (e) => {
    e.preventDefault();
    if (password !== cpassword) {
      setMessage("Passwords do not match");
    } else{
setMessage("")
    dispatch(updateProfile({ username, email, password, image }));
    
    setTimeout(function() {
      history.push("/dashboard/users");
      setMessage(null)
    
    }, 1000);
   

    }
  };

    return (
        <div>
      <div className="lg:w-4/5 md:w-1/2 bg-gray-100 rounded-lg p-8 flex flex-col md:ml-auto w-full
             mt-10 md:mt-30 relative z-5 shadow-md mb-10">
             
      <b className="text-green-600 text-xl font-large title-font mb-5">Edit Profile</b>

      <form onSubmit={submitHandler}>
              {loading && <Loading />}
              {success && (
                <ErrorMessage variant="success">
                  Updated Successfully
                </ErrorMessage>
              )}
              
              {message && <ErrorMessage variant="danger">{message}</ErrorMessage>}
      <div class="flex lg:w-full w-full sm:flex-row flex-col mx-auto px-8 sm:space-x-4 sm:space-y-0 space-y-4
       sm:px-0 items-end mb-5">
      <div class="relative flex-grow w-full">
        <label for="username" class="leading-7 text-md text-gray-600">Username</label>
        <input type="text" id="username" name="username"
           value={username}
            onChange={(e) => setUsername(e.target.value)} class="w-full bg-gray-100 bg-opacity-50 
        rounded border border-green-500 focus:border-green-500 focus:bg-white focus:ring-2 
        focus:ring-green-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors
         duration-200 ease-in-out " />
      </div>
      <div class="relative flex-grow w-full">
      <label for="email" class="leading-7 text-md text-gray-600">Email</label>
        <input type="email" id="email" name="email"
           value={email}
                  onChange={(e) => setEmail(e.target.value)} class="w-full bg-gray-100 bg-opacity-50 
        rounded border border-green-500 focus:border-green-500 focus:bg-white focus:ring-2 
        focus:ring-green-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors
         duration-200 ease-in-out" />
      </div>
      </div>

      <div class="flex lg:w-full w-full mb-5 sm:flex-row flex-col mx-auto px-8 sm:space-x-4 sm:space-y-0 
      space-y-4 sm:px-0 items-end">
      
      <div class="relative flex-grow w-full ">
      <label for="password" class="leading-7 text-md text-gray-600"> New Password</label>
        <input type="password" id="password-" name="password"
           value={password}
                  onChange={(e) => setPassword(e.target.value)} class="w-full bg-gray-100 bg-opacity-50 
        rounded border border-green-500 focus:border-green-500 focus:bg-white focus:ring-2 
        focus:ring-green-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors
         duration-200 ease-in-out" />
      </div>
      
      <div class="relative flex-grow w-full">
      <label for="npassword" class="leading-7 text-md text-gray-600">Confirm Password</label>
        <input type="password" id="cpassword" name="cpassword"
           value={cpassword}
                  onChange={(e) => setCpassword(e.target.value)} class="w-full bg-gray-100 bg-opacity-50 
        rounded border border-green-500 focus:border-green-500 focus:bg-white focus:ring-2 
        focus:ring-green-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors
         duration-200 ease-in-out" />
      </div>
      </div>

      <div class="flex lg:w-full w-full mb-5 sm:flex-row flex-col mx-auto px-8 sm:space-x-4
       sm:space-y-0 space-y-4 sm:px-0 items-end"  style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center"}}>
      
      <div class="relative flex-grow w-full">
<label for="image" class="leading-7 text-md text-gray-600">Upload Your Photo</label>
  <input type="file" id="image" name="image" accept="image/*" onChange={(e) => postImage(e.target.files[0])} class="w-full bg-gray-100 bg-opacity-50 
  rounded border border-green-500 focus:border-green-500 focus:bg-white focus:ring-2 
  focus:ring-green-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors
   duration-200 ease-in-out" />
</div>

<div class="relative flex-grow w-full"  style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center"}}>
            <img src={image} alt={username} style={{  display: "flex",alignItems: "center", height:"180px"}} />
   </div>

      </div>

      <button to="/dashboard/users"  className="text-white bg-green-500 border-0 py-2 px-8 mt-2 focus:outline-none 
      hover:bg-green-600 rounded text-md " type="submit">Save Changes</button>
      
      </form>
      </div>

    
    </div>
    
    )
}

export default EditProfile;