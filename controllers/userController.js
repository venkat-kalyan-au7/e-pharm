import User from "../models/userModel"


exports.userProfile=(req,res)=>{
     return res.json(req.profile);
}


exports.profileUpdate=(req,res)=>{
    
    User.findOneAndUpdate(
        { _id: req.profile._id },
        { $set: req.body },
        { new: true },
        (err, user) => {
            if (err) {
                return res.status(400).json({
                    error: "You are not authorized to perform this action"
                });
            }
            res.json(user);
        }
    );
}