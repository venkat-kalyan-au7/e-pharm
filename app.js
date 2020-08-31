import express from "express"
import morgan from "morgan"
import bodyParser from "body-parser"
import cookieParser from "cookie-parser"
import cors from "cors"
import validator from "express-validator"

//importing routes
import authRoutes from "./routes/authRoutes"
import userRoutes from "./routes/userRoutes"
import adminRoutes from "./routes/adminRoutes"
import queryRoutes from "./routes/queryRoutes"

const app = express()

app.use(morgan('dev'))
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))
app.use(cookieParser())

/** This validation middleware checks the request body contains the required fields and 
 whether they are in correct format or not*/ 
app.use(validator())


app.use('/api',authRoutes)
app.use('/api',userRoutes)
app.use('/api',adminRoutes)
app.use('/api',queryRoutes)

module.exports=app