import mongoose from "mongoose";

const Schema = mongoose.Schema;

const friendsSchema = new mongoose.Schema({

    user_id: {
        type: Schema.Types.ObjectId,
        ref: "User"
    },

    friends: [{
        friend_id: {
            type: Schema.Types.ObjectId,
            ref: "User"
        },
        status: {
            type: String,
            enum: ["pending", "accepted", "rejected"],
            default: "pending" // Default status is "pending"
        }
    }]
    
});

const Friends = mongoose.model('Friends', friendsSchema);
export default Friends;
