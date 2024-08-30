const express = require("express")
const app = express()

const cookieParser = require("cookie-parser")

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cookieParser())


app.get("/" , (req,res) => {
    res.send("welcome to the home route")
})

app.listen(3000 , () => {
    console.log("App is running on PORT 3000")
})