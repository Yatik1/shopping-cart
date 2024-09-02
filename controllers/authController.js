const bcrypt = require("bcrypt")
const generateToken = require("../utils/generateToken")
const userModel = require("../models/user.model")

module.exports.registerUser =  async function(req,res) {
    try {
        let {email , fullName , password} = req.body

        if(!email) return res.send("Email is not provided").status(402);
        if(!password) return res.send("Password is not provided").status(402);
        if(!fullName) return res.send("FullName is not provided").status(402);

        let user = await userModel.findOne({email : email})
        if(user) return res.status(401).send("User already existed , try loging in !")

        bcrypt.genSalt(10 , (error , salt) => {
            bcrypt.hash(password , salt , async(error , hash) => {
                if(error) res.send(error.message)
                else{
                    const user = await userModel.create({
                        email ,
                        fullName,
                        password : hash
                    })

                    let token = generateToken(user)
                    res.cookie("token" , token)
                    res.send("User Created Successfully ")
                }
            })
        })
    } catch (error) {
        console.log("Error occured during registering" , error)
    }
}

module.exports.loginUser = async function(req,res) {
    let {email , password} = req.body

    let user = await userModel.findOne({email : email})
    if(!user) return res.status(402).send("InCorrect Email or Password");

    bcrypt.compare(password , user.password , function (err , isUser) {
        if(isUser) {
            let token = generateToken(user)
            res.cookie("token" , token)
            res.status(200).send("You can Login")
        } else {
            res.status(401).send("Incorrect Email or Password")
        }
    })
    
}

module.exports.logoutUser = async function (req,res) {
    res.cookie("token" , "")
    res.redirect("/")
}