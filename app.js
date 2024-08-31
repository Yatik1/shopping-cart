const express = require("express")
const app = express()

const cookieParser = require("cookie-parser")
const dotenv = require("dotenv")
const dbConnect = require("./config/dbConnect")
const dbgr = require("debug")("development:app")

const ownersRouter = require("./routes/owners.routes")
const productsRouter = require("./routes/products.routes")
const usersRouter = require("./routes/users.routes")

dotenv.config()


app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cookieParser())

dbConnect()

app.get("/" , (req,res) => {
    res.send("welcome to the home route")
})

app.use("/owner" , ownersRouter)
app.use("/user",usersRouter)
app.use("/products" , productsRouter)

app.listen(3000 , () => {
    dbgr("App is running on PORT 3000")
})