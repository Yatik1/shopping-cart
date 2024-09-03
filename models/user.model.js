const mongoose = require("mongoose")

const userSchema = mongoose.Schema({
    fullName: {
        type:String,
        trim:true,
        minLen:4
    } ,
    email:String,
    password:String,
    cart : [{
        type:mongoose.Schema.Types.ObjectId,
        ref:"product"
    }],
    isAdmin:Boolean,
    orders: {
        type:Array,
        default:[]
    },
    contact:Number,
    picture:String
})

module.exports = mongoose.model("user" , userSchema)