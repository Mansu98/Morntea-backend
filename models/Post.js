const mongoose = require("mongoose");
const apiSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "User",
      },
    title:{
        type:String,
        trim:true
    },
    date:{
        type:String,
        trim:true
    },
    image:{
        type:String,
        trim:true,
        default:"https://i.stack.imgur.com/y9DpT.jpg"
    },
    content:{
        type:String,
        trim:true
    },
    cloudinary_id: {
        type: String,
      },
},
{ 
    timestamps: true 
}
);
const apinews = new mongoose.model("Post", apiSchema);
module.exports = apinews;