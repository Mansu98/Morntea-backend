const User = require("../models/User");
const express = require("express");
const fetch = require("node-fetch");
const redis = require("redis");

const PORT =  3000;
const REDIS_PORT =  6379;

const client = redis.createClient(REDIS_PORT);
const app = express();
// Get a user from cache -redis
//Set  User's Data
function setResponse(user, data){
    return async (req, res) => {
      try {
        res.status(200).json(data);
      } catch (err) {
        res.status(500).json(err);
      }
    }
  }
// make request to localhost for data
async function getUser(req,res,next){
    try{
        console.log('fetching data from api...');
        const {user} = await User.findById(req.params.id);

        const response = await 
        fetch(`localhost:5000/api/users/${user}`);
         const data = await response.json();

         //Set data to Redis
         client.setex(user, 3600, data);
         res.send(setResponse(user,data));
    }
    catch(err){
        console.error(err);
        res.status(403);

    }
}

//cache middleware 
 async function cache(req,res,next){
  const {user} = await findById(req.params.id);
    client.get(user,(err,data)=>{
        if(err) throw err;

        if(data !== null){
            res.send(setResponse(user,data));
            console.log("fetching from cache");
        } else{
            next();
        }
    });
}

app.listen(PORT,()=>{
    console.log(`App listening on port: ${PORT}`);
});


module.exports = {getUser,cache};