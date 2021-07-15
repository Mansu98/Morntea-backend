const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv =require("dotenv");
// const { errorHandler, notFound } = require("./middleware/errorMiddleware.js");

const userRoute = require("./routes/userRoutes");
const postRoute = require("./routes/postRoutes");

dotenv.config();


const app = express(); // main thing
app.use(cors());
app.use(express.json()); // to accept json data
// Error Handling middlewares
// app.use(notFound);
// app.use(errorHandler);

const port = process.env.PORT || 5000;

app.use(express.json())
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
