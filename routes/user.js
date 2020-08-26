import express from "express"
const router = express.Router()
import userController from "../controllers/userController"
import {userDataValidation} from "../validations/dataValidator"



router.post('/register',userDataValidation,userController.register)


module.exports = router