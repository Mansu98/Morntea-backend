import React, { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { updatePostAction } from "../../../actions/postsActions";
import Loading from "../../../Components/Loading";
import ErrorMessage from "../../../Components/ErrorMessage";
import {useHistory,useParams} from "react-router-dom";

function EditPost() {
  const history=useHistory();
  const [title, setTitle] = useState();
  const [content, setContent] = useState();
  const [image, setImage] = useState("https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png");
  const [date, setDate] = useState("");
  const { id } = useParams();
  const dispatch = useDispatch();

  const postUpdate = useSelector((state) => state.postUpdate);
  const { loading, error } = postUpdate;

  useEffect(() => {
    const fetching = async () => {
      const { data } = await axios.get(`/api/posts/${id}`);

      setTitle(data.title);
      setContent(data.content);
      setImage(data.image);
      setDate(data.updatedAt);
    };

    fetching();
  }, [id, date]);


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


  const updateHandler = (e) => {
    e.preventDefault();
    dispatch(updatePostAction(id, title, content, image));
    if (!title || !content || !image) return;

    history.push("/dashboard/posts");
  };

  return (
    <div>
      
      <section className="text-gray-600 body-font relative">
      <h2 class="text-3xl font-large text-lg text-green-600 title-font mb-3 mt-5 text-center">Edit Post</h2>
  <div className="container px-5  mx-auto">
    <div className="lg:w-1/2 md:w-2/3 mx-auto bg-gray-100 p-7 mb-10 rounded border">
    
    <form onSubmit={updateHandler}>
      <div className="flex flex-wrap -m-2">
            {error && <ErrorMessage variant="danger">{error}</ErrorMessage>}
           
        <div className="p-2 w-full">
        <label for="title" class="leading-7 text-md text-gray-600"> Post Title</label>
        <input type="text" id="title" name="title"  value={title}
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
          <input type="file" id="image" name="image" accept="image/*" onChange={(e) => postImage(e.target.files[0])}
                  
                 class="w-full bg-gray-100 bg-opacity-50 
            rounded border border-green-500 focus:border-green-500 focus:bg-white focus:ring-2 
              focus:ring-green-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors
             duration-200 ease-in-out" />
          </div>
        </div>
        <div className="p-2 w-full">
          <div className="relative">
            <label for="message" className="leading-7 text-md text-gray-600">Your Post Content</label>
            <textarea id="message" name="message"  value={content}
                onChange={(e) => setContent(e.target.value)} className="w-full bg-gray-100 bg-opacity-50 rounded
             border border-green-500 focus:border-green-500 focus:bg-white focus:ring-2 focus:ring-green-200 
             h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors 
             duration-200 ease-in-out"></textarea>
          </div>
        </div>
        {loading && <Loading size={50} />}
        <div className="p-2 w-full ">

          <button className="flex text-center mx-auto text-white bg-green-500 border-0 py-2 px-8 
          focus:outline-none hover:bg-green-600 rounded text-lg " type="submit"> Update Post</button>
        </div>
     
    </div>
    </form>
    <small> Updating on - {date.substring(0, 10)}</small>
    </div>
  </div>
</section>
    </div>
  )
}

export default EditPost;