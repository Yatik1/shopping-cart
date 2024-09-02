const express = require("express")
const router = express.Router()
const {registerUser,loginUser, logoutUser} = require("../controllers/authController")

router.get("/" , (req,res) => {
    res.send("This users router")
})

router.post("/register" , registerUser )
router.post("/login" , loginUser)
router.post("/logout" , logoutUser)

module.exports = router
