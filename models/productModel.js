import mongoose from "mongoose"
const {ObjectId} =mongoose.Schema

const productSchema =new mongoose.Schema({
    productName:{
        type:String,
        required:true,
        unique:true
    },
    description:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    category:{
        type:ObjectId,
        ref:'Category',
        required:true
    },
    quantity:{
        type:Number,
        
    },
    sold:{
        type:Number,
        default:0  
    },
    photo:{
        data:Buffer,
        contentType:String
    },
    freeDelivery:{
        type:Boolean
    }

},
    {timestamps:true}
)


module.exports = mongoose.model('Product',productSchema)