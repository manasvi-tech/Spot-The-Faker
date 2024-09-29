import mongoose from "mongoose";
import validator from "validator";

const Schema = mongoose.Schema;

const userSchema = new mongoose.Schema({

    fullName:{
        type:String,
        required:[true,"Please enter your full name"]
    },

    username:{
        type:String,
        required:[true,"Please enter your username"],
        unique:true
    },

    password:{
        type:String,
        required:true,
        minlength:6
    },

    email: {
        type: String,
        required: [true, "Please enter your email"],
        unique: true,
        validate: {
            validator: validator.isEmail,  // Use validator to check if email is valid
            message: "Please enter a valid email address"
        }
    },

    gender:{
        type:String,
        required:true,
        enum:["male","female","other"]
    },

    profilePic:{
        type:String,
        default:""
    },

    friends:[{
        type: Schema.Types.ObjectId,
        ref:"Friends"
    }],

    gameHistory:{
        type:Schema.Types.ObjectId,
        ref:"GameHistory",
        default:null
    }
},
//createdAt, UpdatedAt => member since <createdAt>
{timestamps:true}
)

const User = mongoose.model("User",userSchema)

export default User;