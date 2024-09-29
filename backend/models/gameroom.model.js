import mongoose from "mongoose";


const Schema = mongoose.Schema;

const gameroomSchema = new mongoose.Schema({

    room_code :{
        type:String,
        required:[true, "Every game room has a mandatory code"]
    },

    creator_id:{
        type:Schema.Types.ObjectId,
        ref:"User"
    },

    active:{
        type:Boolean,
        required:[true, "Need the status to check the stats of the game"]
    },

    players:[{
        type:Schema.Types.ObjectId,
        ref:"User"
    }],

    faker_id:{
        type:Schema.Types.ObjectId,
        ref:"User"
    },

    word_given:{
        type:String,
        req:[true, "To track the game"]
    }
},
//createdAt, UpdatedAt => member since <createdAt>
{timestamps:true}
)

const Gameroom = mongoose.model("Gameroom",gameroomSchema)

export default Gameroom