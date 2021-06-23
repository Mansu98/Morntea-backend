const express = require("express");
const router = express.Router();
const Post = require("../dbapinews");
const cloudinary = require('cloudinary').v2;
const upload = require("./multer");

cloudinary.config({ 
  cloud_name: 'dhtobgfyw', 
  api_key: '465483543671694', 
  api_secret: 'f0huSSFM5JnpGtG2ONq0aGJU-0k'
});

//create a post
router.post("/", upload.single("image"), async (req, res) => {
  try {
    // Upload image to cloudinary
    const result = await cloudinary.uploader.upload(req.file.path);
    console.log(result);

    // Create new post
  const newPost =  new Post(
    {
      userId:req.body.userId,
      Title:req.body.Title,
      Date:req.body.Date,
      Image:result.url,
      Detail:req.body.Detail,
      cloudinary_id: result.public_id

     
    });
    console.log(newPost);
    const savedPost = newPost.save();
    res.status(200).json(savedPost);
  } catch (err) {
    res.status(500).json(err);
  }
});


//update a post

router.put("/:id", upload.single("image"), async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);

 // Delete image from cloudinary
 await cloudinary.uploader.destroy(post.cloudinary_id);
 // Upload image to cloudinary
 let result;
 if (req.file) {
   result = await cloudinary.uploader.upload(req.file.path);
 }
 
    if (post.userId === req.body.userId) {
      const data = {
        userId:req.body.userId  || post.userId,
        Title:req.body.Title || post.Title,
        Date:req.body.Date || post.Date,
        Image:result?.url || post.Image,
        Detail:req.body.Detail || post.Detail,
        cloudinary_id: result?.public_id || post.cloudinary_id
   };
   console.log(data);
   await Post.findByIdAndUpdate(req.params.id,data,{new:true});
     res.status(200).json("the post has been updated"); 
     
    } else {
      res.status(403).json("you can update only your post");
    }
  } catch (err) {
    res.status(500).json(err);
  }
});


//delete a post

router.delete("/:id", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (post.userId === req.body.userId) {
      // Delete image from cloudinary
 await cloudinary.uploader.destroy(post.cloudinary_id);
    // Delete post from db
      await post.deleteOne();
      res.status(200).json("the post has been deleted");
    } else {
      res.status(403).json("you can delete only your post");
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

//get a post

router.get("/:id", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    res.status(200).json(post);
  } catch (err) {
    res.status(500).json(err);
  }
});


// get all the posts
router.get("/",(req,res)=>{

    Post.find((err,data)=>{
        if(err){
            res.status(500).send(err)
        }
            else{
                res.status(201).send(data)
            }
        }
    )
})
module.exports = router;
