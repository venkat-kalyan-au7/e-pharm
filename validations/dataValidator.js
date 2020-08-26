//validating user data while registration


exports.userDataValidation=(req,res,next)=>{
    
    req.check('name','Name Field Is Required').notEmpty()
    req.check("email","email is not valid")
    .matches(/.+\@.+\..+/).withMessage('Please Enter A Valid Email')
    req.check("password", "Password should be combination of one uppercase , one lower case, one special char, one digit and min 8 , max 20 char long")
       .matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/, "i");
    const errors = req.validationErrors()
    if(errors){
        const firstError = errors.map(error=>error.msg)[0]
        return res.status(400).json({error:firstError})
    }
    next()
}

