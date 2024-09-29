
import mongoose from "mongoose";

const connectToMongo = async() => {
    try{
        await mongoose.connect(process.env.MONGO_DB_URI);
        console.log("connected to mongodb")
    } catch(err){
        console.log("Error connecting to mongoose "+err)
    }
}


export default connectToMongo