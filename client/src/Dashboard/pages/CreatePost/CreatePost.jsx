import { useDispatch, useSelector } from "react-redux";
import { createPostAction } from "../../../actions/postsActions";
import Loading from "../../../Components/Loading";
import ErrorMessage from "../../../Components/ErrorMessage";
import React, { useEffect, useState } from "react";
import {useHistory} from "react-router-dom";

function CreatePost() {
  const history= useHistory();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState("https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png");

  const dispatch = useDispatch();

  const postCreate = useSelector((state) => state.postCreate);
  const { loading, error, post } = postCreate;

  console.log(post);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(createPostAction(title, content, image));
    if (!title || !content ) return;
    history.push("/dashboard/posts");
  };

  useEffect(() => {}, []);


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


  return (
    <div>
      
      <section className="text-gray-600 body-font relative">
      <h2 class="text-3xl font-large text-lg text-green-600 title-font mb-3 mt-5 text-center">Create New Post</h2>
  <div className="container px-5  mx-auto">
    <div className="lg:w-1/2 md:w-2/3 mx-auto bg-gray-100 p-7 mb-10 rounded border">
    
    <form onSubmit={submitHandler}>
      <div className="flex flex-wrap -m-2">
      {error && <ErrorMessage variant="danger">{error}</ErrorMessage>}

        <div className="p-2 w-full">
        <label for="title" class="leading-7 text-md text-gray-600"> Post Title</label>
        <input type="text" id="title" name="title"   value={title}
                onChange={(e) => setTitle(e.target.value)} class="w-full bg-gray-100 bg-opacity-50 
        rounded border border-green-500 focus:border-green-500 focus:bg-white focus:ring-2 
        focus:ring-green-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors
         duration-200 ease-in-out " />
        </div>

        <div className="p-2 w-full">
        <div class="relative flex-grow w-full"  style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center"}}>
            <img src={image} alt={image} style={{  display: "flex",alignItems: "center", height:"180px"}} />
   </div>
   </div>
        <div className="p-2 w-full">
          <div className="relative">
          <label for="image" class="leading-7 text-md text-gray-600">Choose Your Image</label>

      <input type="file" id="image" name="image"
           onChange={(e) => postImage(e.target.files[0])} accept="image/*" class="w-full bg-gray-100 bg-opacity-50 
            rounded border border-green-500 focus:border-green-500 focus:bg-white focus:ring-2 
              focus:ring-green-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors
             duration-200 ease-in-out" />
          </div>
        </div>
        <div className="p-2 w-full">
          <div className="relative">
            <label for="message" className="leading-7 text-md text-gray-600">Your Post Detail</label>
            <textarea id="message" name="message" 
              value={content}
                onChange={(e) => setContent(e.target.value)}
            className="w-full bg-gray-100 bg-opacity-50 rounded
             border border-green-500 focus:border-green-500 focus:bg-white focus:ring-2 focus:ring-green-200 
             h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors 
             duration-200 ease-in-out"></textarea>
          </div>
        </div>
        {loading && <Loading size={50} />}
        <div className="p-2 w-full ">
          <button className="flex text-center mx-auto text-white bg-green-500 border-0 py-2 px-8 
          focus:outline-none hover:bg-green-600 rounded text-lg" type="submit"> Post</button>
        </div>
     
    </div>
    </form>
    <small>Creating on - {new Date().toLocaleDateString()}</small>
    </div>
  </div>
</section>
    </div>
  )
}

export default CreatePost;