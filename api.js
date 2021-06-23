const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const userRoute = require("./routes/users");
const postRoute = require("./routes/posts");



const app = express();
const port = process.env.PORT || 5000;

app.use(express.json())
app.use(cors());
app.use("/api/users", userRoute);
app.use("/api/posts", postRoute);



mongoose.connect("mongodb://localhost:27017/ShareSansar",{
    useCreateIndex:true,
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then (()=>{
    console.log("Connection Successful");
}).catch(()=>{
    console.log("Connection Unsuccessful");

})



app.get("/", (req,res)=>
    res.status(200).send("Check the API in Postman or Insomiac")
);

app.listen(port,()=>{
    console.log(`server is connected at port :${port}`)
})
