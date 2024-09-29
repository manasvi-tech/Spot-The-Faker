import mongoose from "mongoose";
import Gameroom from "./gameroom.model.js";
import User from "./user.model";


const Schema = mongoose.Schema;

// GameHistory Schema
const GameHistorySchema = new Schema({
    user_id: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },

    games_participated: [{
        type: Schema.Types.ObjectId,
        ref: "Gameroom"
    }]
},
{timestamps:true}
);

module.exports = mongoose.model('GameHistory', GameHistorySchema);