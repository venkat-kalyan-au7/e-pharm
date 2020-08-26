import express from "express"
import morgan from "morgan"
import bodyParser from "body-parser"
import cookieParser from "cookie-parser"
import validator from "express-validator"



//importing routes
import userRoutes from "./routes/user"
const app = express()

app.use(morgan('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))
app.use(cookieParser())

/** This validation middleware checks the request body contains the required fields and 
 whether they are in correct format or not*/ 
app.use(validator())


app.use('/api',userRoutes)
module.exports=app