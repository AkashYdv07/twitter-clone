import mongoose from "mongoose";

const connectMongoDB = async () =>{
    try{
        const conn = await mongoose.connect(process.env.MONGO_URI);
        console.log(`MONGOdb connected : ${conn.connection.host}`);
    }
    catch(err)
    {
        console.log(`error: ${error.message}`);
        process.exit(1);
    }
}

export default connectMongoDB;