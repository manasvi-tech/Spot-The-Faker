import mongoose from "mongoose";


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

    gameRooms:[{
        type:Schema.Types.ObjectId,
        ref:"Gameroom"
    }],

    messages:[{
        type:Schema.Types.ObjectId,
        ref:"message"
    }]
},
//createdAt, UpdatedAt => member since <createdAt>
{timestamps:true}
)

const User = mongoose.model("User",userSchema)

export default User;