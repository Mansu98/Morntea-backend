const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv =require("dotenv");

const userRoute = require("./routes/userRoutes");
const postRoute = require("./routes/postRoutes");

dotenv.config();


const app = express(); // main thing
app.use(cors());
app.use(express.json()); // to accept json data



app.use(express.json())
app.use("/api/users", userRoute);
app.use("/api/posts", postRoute);


mongoose.connect(process.env.CONNECTION_URL,{
    useCreateIndex:true,
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then (()=>{
    console.log("Connection Successful");
}).catch(()=>{
    console.log("Connection Unsuccessful");

})



const port = process.env.PORT || 5000;

if(process.env.NODE_ENV == "production"){
    app.use(express.static("client/build"));
    const path = require("path");
    app.get("*",(req,res)=>{
        res.sendFile(path.resolve(__dirname,"client","build","index.html"));
    })
}

app.listen(port,()=>{
    console.log(`server is connected at port :${port}`)
})
