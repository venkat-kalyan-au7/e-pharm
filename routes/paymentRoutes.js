import express from "express"

const router = express.Router()


import {loggedIn,currentUser} from "../middleware/auth"
import {getUserById} from "../helpers/findById"
import {braintreeToken,processPayment} from "../controllers/paymentController"



router.param('userId',getUserById)

router.get('/braintree/getToken/:userId',loggedIn,currentUser,braintreeToken)
router.post('/braintree/payment/:userId',loggedIn,currentUser,processPayment)



module.exports = router