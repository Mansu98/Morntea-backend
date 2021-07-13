const mongoose = require("mongoose");
const bcrypt = require("bcrypt")

const UserSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      require: true,
      min: 4,
      max: 20,
    
    },
    email: {
      type: String,
      required: true,
      unique:true,
      max: 50,
  
    },
    password: {
      type: String,
      required: true,
      min: 6,
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
    image:{
      type:String,
      required:true,
      default:"https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
    }
  },
  { timestamps: true }
);

UserSchema.pre("save", async function(next){
  if(!this.isModified("password")){  
    next();
  } const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);

  });

UserSchema.methods.matchPassword = async function(enteredPassword){
  return await bcrypt.compare(enteredPassword, this.password)
};

module.exports = mongoose.model("User", UserSchema);
