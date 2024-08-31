const mongoose = require("mongoose")
const dbgr = require("debug")("development:mongoose")

const dbConnect = async () => {
    try{
        await mongoose.connect(process.env.MONGODB_URL)
        dbgr("Database is connected");
        
    } catch (error) {
        dbgr("Error Connecting to the Database" , error);
        
    }
}

module.exports = dbConnect
