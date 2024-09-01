const jwt = require('jsonwebtoken')
const userModel = require("../models/user.model")

module.exports = async function (req,res,next) {
    if(!req.cookies) {
        req.flash("error" , "You need to login first")
        return res.redirect("/")
    } 

    try {
        let decoded = jwt.verify(req.cookies.token , process.env.JWT_SECRET_KEY)
        let user = await userModel.findOne({email : decoded.email}).select("-password")

        req.user = user

        next()
    } catch (error) {
        req.flash("error" , error)
        return res.redirect("/")
    }
}