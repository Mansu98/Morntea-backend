const mongoose = require("mongoose");
const apiSchema = mongoose.Schema({
    userId: {
        type: String,
      
      },
    Title:{
        type:String,
  
        trim:true
    },
    Date:{
        type:String,
       
        trim:true
    },
    Image:{
        type:String,
        trim:true
    },
    Detail:{
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
const apinews = new mongoose.model("ShareSansar", apiSchema);
module.exports = apinews;