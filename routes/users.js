const User = require("../models/User");
const express = require("express");
const router = express.Router()
const bcrypt = require("bcrypt");
const cloudinary = require('cloudinary').v2;
const upload = require("./multer");

cloudinary.config({ 
  cloud_name: 'dhtobgfyw', 
  api_key: '465483543671694', 
  api_secret: 'f0huSSFM5JnpGtG2ONq0aGJU-0k'
});

//REGISTER NEW USER
router.post("/register",upload.single("image"), async (req, res) => {
  try {
    // Upload User image to cloudinary
    const result = await cloudinary.uploader.upload(req.file.path);
    console.log(result);
      //generate new password
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(req.body.password, salt);
  
      //create new user
      const newUser = new User({
        username: req.body.username,
        email: req.body.email,
        password: hashedPassword,
        Image:result.url,
        cloudinary_id: result.public_id
      });
  
      //save user and respond
      const user = await newUser.save();
      res.status(200).json(user);
    } catch (err) {
      res.status(500).json(err)
    }
  });
  
  //LOGIN 
  router.post("/login", async (req, res) => {
    try {
      const user = await User.findOne({ email: req.body.email });
      !user && res.status(404).json("user not found");
  
      const validPassword = await bcrypt.compare(req.body.password, user.password)
      !validPassword && res.status(400).json("wrong password")
  
      res.status(200).json(user)
    } catch (err) {
      res.status(500).json(err)
    }
  });
  

//update user
router.put("/:id", upload.single("image"), async (req, res) => {
  try {
    const update = await User.findById(req.params.id);
 // Delete image from cloudinary
 await cloudinary.uploader.destroy(update.cloudinary_id);
 // Upload image to cloudinary
 let result;
 if (req.file) {
   result = await cloudinary.uploader.upload(req.file.path);
 }
 
  if (req.body.userId === req.params.id || req.body.isAdmin)
   {
    if (req.body.password) {
      try {
        const salt = await bcrypt.genSalt(10);
        req.body.password = await bcrypt.hash(req.body.password, salt);
      } catch (err) {
        return res.status(500).json(err);
      }
    }
    try {
      const data = {
        username:req.body.username || update.username,
        email:req.body.email || update.email,
        password:req.body.password || update.password,
        Image:result?.url || update.Image,
        cloudinary_id: result?.public_id || update.cloudinary_id
   };
   console.log(data);
   await User.findByIdAndUpdate(req.params.id,data,{new:true});
   res.status(200).json("the Account has been updated"); 
  }
  catch{
    res.status(401).json("the Account has not been updated"); 
  }
}
 else {
    res.status(403).json("you can update only your Account");
  }
} catch (err) {
  res.status(500).json(err);
}

});


//delete user
router.delete("/:id", async (req, res) => {
  if (req.body.userId === req.params.id || req.body.isAdmin) {
    try {

      const user = await User.findById(req.params.id);
      // Delete image from cloudinary
     await cloudinary.uploader.destroy(user.cloudinary_id);
      // Delete User from db
       await User.findByIdAndDelete(req.params.id);
      
      res.status(200).json("Account has been deleted");
    } catch (err) {
      return res.status(500).json(err);
    }
  } else {
    return res.status(403).json("You can delete only your account!");
  }
});

//get a user
router.get("/:id", async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    const { updatedAt, ...other } = user._doc;
    res.status(200).json(other);
  } catch (err) {
    res.status(500).json(err);
  }
});
// get all the users
router.get("/",(req,res)=>{

    User.find((err,data)=>{
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
