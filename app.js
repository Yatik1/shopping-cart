const express = require("express")
const app = express()

const cookieParser = require("cookie-parser")
const dotenv = require("dotenv")
const dbConnect = require("./config/dbConnect")
const dbgr = require("debug")("development:app")
const expressSession = require("express-session")
const flash = require("flash")
const path = require("path")

const indexRouter = require("./routes/index.routes")
const ownersRouter = require("./routes/owners.routes")
const productsRouter = require("./routes/products.routes")
const usersRouter = require("./routes/users.routes")

dotenv.config()

  
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cookieParser())
app.use(expressSession({
    resave:false,
    saveUninitialized:false,
    secret : process.env.EXPRESS_SECRET_KEY
}))

app.use(flash())
app.use(express.static(path.join(__dirname , "public")))

app.set("view engine" , "ejs")

dbConnect()

app.use("/",indexRouter)

app.use("/owners" , ownersRouter)
app.use("/users",usersRouter)
app.use("/products" , productsRouter)

app.listen(3000 , () => {
    dbgr("App is running on PORT 3000")
})