const mongoose = require("mongoose");
const apiSchema = mongoose.Schema({
    userId: {
        type: String,
        required: true,
      },
    Title:{
        type:String,
        required:true,
        trim:true
    },
    Date:{
        type:String,
        required:true,
        trim:true
    },
    Image:{
        type:String,
        required:true,
        trim:true
    },
    Detail:{
        type:String,
        required:true,
        trim:true
    },
},
{ 
    timestamps: true 
}
);
const apinews = new mongoose.model("ShareSansar", apiSchema);
module.exports = apinews;