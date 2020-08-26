import User from "../models/userModel"
import errors from "../errors/dataBaseErrors"

exports.register = (req, res) => {
    console.log("req.body", req.body);
    const user = new User(req.body);
    user.save((err, user) => {
        if (err) {
            return res.status(400).json({
                err:errors.dataBaseErrors(err)
            });
        }
        res.json({
            user
        });
    });
};
