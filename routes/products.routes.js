const express = require("express")
const router = express.Router()
const upload = require("../config/multerConfig")
const productModel = require("../models/product.model")

router.get("/" , (req,res) => {
    res.send("This productss router")
})

router.post("/create", upload.single("image") , async (req,res) => {
   try {
        let {name , price , discount, bgColor , panelColor , textColor} = req.body

        let product = await productModel.create({
            image:req.file.buffer,
            name,
            price,
            discount,
            bgColor,
            panelColor,
            textColor
        })
 
        res.send(product)

        req.flash("success" , "Product created Successfully")
        res.redirect("/owner/admin")

   } catch (error) {
        res.send("Error occured in creating product" , error)
   }
})

module.exports = router
