const User = require("../models/User");
const express = require("express");
const router = express.Router()
const bcrypt = require("bcrypt");
const redis = require("redis");
const asyncHandler = require("express-async-handler");
// const generateToken = require("../utils/generateToken");


const REDIS_PORT =  6379;
const client = redis.createClient(REDIS_PORT);


//REGISTER NEW USER
router.post("/register", asyncHandler( async (req, res) => {
  
      //create new user
      const userExists = await User.findOne({email: req.body.email})
console.log(req.body.email);
      if (userExists){
        res.status(400);  
      } 
      else{
      const newUser = await User.create({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
      });
      console.log(newUser)
       
      if(newUser){
        res.status(201).json(
          {
        _id:newUser._id,
        username:newUser.username,
        email:newUser.email,
        // token:generateToken(newUser._id)
      })
    } 
    else{
      res.status(400)
      throw new Error("Error Occured")
    }
      
  }
  }) 
  );
  

  //LOGIN 
  router.post("/login", asyncHandler( async (req, res) => {
   
      const authUser = await User.findOne({ email: req.body.email });
        if(authUser && (await authUser.matchPassword(req.body.password)))
        {
          res.json({
            _id: authUser._id,
            username:authUser.username,
            email:authUser.email,
            // token:generateToken(authUser._id)
    
          });
          res.render('dashboard',{
            user: req.authuser
            });
        }
        else{
          res.status(400);
          throw new Error("Invalid email or password");
        };
      })
  );
  



//update user
router.put("/:id", async (req, res) => {
  try {
    const update = await User.findById(req.params.id);
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
        // image:result?.url || update.Image,
        // cloudinary_id: result?.public_id || update.cloudinary_id
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
     // await cloudinary.uploader.destroy(user.cloudinary_id);
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



// get a user

// const getUser = async (req,res)=>{
//   const userId = req.params.id;
//   console.log("api " + userId);

//    if(!userId){
//           res.status(500).send(err)
//       }
//      else{
//   const aUser = await User.findById(userId);

//             //Set data to Redis
//             client.setex(userId,3600, JSON.stringify(aUser));
//             res.status(201).send(aUser);
//             console.log("Fetching from API")
//             console.log(aUser);
//           }
//       }


//cache middleware 
//  function singleUser(req,res,next){
//   const userId = req.params.id;
//   console.log("cache " + userId);
//  client.get(userId,(err,redisData)=>{
//       if(err) {throw err}

//       else if(redisData){
//           console.log("fetching from cache");
//           res.send(JSON.parse(redisData))
//           console.log(redisData);

//       } else{
//           next()
//       }
//   })
// }

//  router.get("/:id", singleUser ,getUser)






// get all the users

const getUsers = async (req,res)=>{

   await User.find((err,data)=>{
        if(err){
            res.status(500).send(err)
        }
       else{
              //Set data to Redis
              client.setex("userData",60, JSON.stringify(data));
              res.status(201).send(data);
              console.log("Fetching from API")
              console.log(data);
            }
        }
    )
}


//cache middleware 
 function cache(req,res,next){
client.get("userData",(err,redisData)=>{
      if(err) {throw err}

      else if(redisData){
          console.log("fetching from cache");
          res.send(JSON.parse(redisData))
          console.log(redisData);

      } else{
          next()
      }
  })
}
router.get("/", cache, getUsers);

 module.exports = router;