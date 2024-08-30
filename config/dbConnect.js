const mongoose = require("mongoose")

const dbConnect = async () => {
    try{
        await mongoose.connect(process.env.MONGODB_URL)
        console.log("Database is connected !");
        
    } catch (error) {
        console.log("Error Connecting to the Database" , error);
        
    }
}

module.exports = dbConnect
