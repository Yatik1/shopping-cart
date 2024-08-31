const express = require("express")
const router = express.Router()

router.get("/" , (req,res) => {
    res.send("This users router")
})

module.exports = router
