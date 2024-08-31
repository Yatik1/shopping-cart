const express = require("express")
const router = express.Router()

router.get("/" , (req,res) => {
    res.send("This productss router")
})

module.exports = router
