const express = require("express")
const app = express()

const cookieParser = require("cookie-parser")
const dotenv = require("dotenv")
const dbConnect = require("./config/dbConnect")

dotenv.config()


app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cookieParser())

dbConnect()

app.get("/" , (req,res) => {
    res.send("welcome to the home route")
})

app.listen(3000 , () => {
    console.log("App is running on PORT 3000")
})