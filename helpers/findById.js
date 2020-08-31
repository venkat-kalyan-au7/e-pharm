import User from "../models/userModel"
import Product from "../models/productModel"
import Category from "../models/categoryModel"

/**this helper middleware in finding the user by 
id whenever client requests to the server by route params*/

exports.getUserById=(req,res,next,id)=>{
    User.findById(id).exec((err,user)=>{
        if(err||!user){
            return res.status(400).json({
                error:'User Not Found'
            })
        }
        else{
            req.profile=user
            next()
        }
    })
}

exports.getProductById=(req,res,next,id)=>{
    Product.findById(id).exec((err,product)=>{
        if(err||!product){
            return res.status(400).json({
                error:'Product Not Found'
            })
        }
        else{
            req.product=product
            next()
        }
    })
}

exports.getCategoryById=(req,res,next,id)=>{
    Category.findById(id).exec((err,category)=>{
        if(err||!category){
            return res.status(400).json({
                error:'Category Not Found'
            })
        }
        else{
            req.category=category
            next()
        }
    })
}