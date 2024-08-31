const express = require("express")
const router = express.Router()

const ownerModel = require("../models/owner.model")

router.get("/" , (req,res) => {
    res.send("This owner router")
})

router.post("/create" , async (req,res) => {
    let owner = await ownerModel.find()
    if(owner.length > 0) {
        return res.send(503 , "You don't have permission to create owner account")
    }

    let {fullName , email , password} = req.body
    
    let createdOwner = await ownerModel.create({
        fullName ,
        email , 
        password
    })

    return res.send(createdOwner).status(200)

})

module.exports = router

