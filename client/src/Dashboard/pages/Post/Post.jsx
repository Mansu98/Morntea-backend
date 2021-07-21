import axios from "axios";
import {useParams, Link} from "react-router-dom";
import React, { useEffect, useState } from "react";

function Post() {
  const { id } = useParams();
  const [title, setTitle] = useState();
  const [content, setContent] = useState();
  const [image, setImage] = useState();
  const [date, setDate] = useState("");

  useEffect(() => {
    const fetching = async () => {
      const { data } = await axios.get(`http://localhost:5000/api/posts/${id}`);
      setTitle(data.title);
      setContent(data.content);
      setImage(data.image);
      setDate(data.updatedAt);

    };

    fetching()
  }, [id]);
    return (
        <div>
        <section className="text-gray-600 body-font">
  <div className="container px-5 py-15 mx-auto flex flex-col"> 
 
    <div className="lg:w-4/6 mx-auto">
              
    <h2 className="sm:text-2xl text-2xl font-medium title-font mb-4 mt-4 text-gray-800 text-justify">{title}<br/>
   <span class="mt-1 text-gray-500 text-sm">{date.substring(0, 10)}</span>
        </h2>
      <div className="rounded-lg h-64 overflow-hidden">
        <img alt="content" className="object-cover object-center h-full w-full" 
        src={image}/>
      </div>
 
      <p className="leading-relaxed text-lg mb-4 mt-4">{content}
            </p>

            <Link to={`/dashboard/editpost/${id}`} className="text-white bg-green-500 border-0 ml-3
     py-1 px-3 focus:outline-none hover:bg-green-600 rounded text-md ">Edit Post
      </Link>

    
    </div>
  </div>
</section>
            
        </div>
    )
}

export default Post;