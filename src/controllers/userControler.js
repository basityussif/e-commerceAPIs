import mongoose from "mongoose";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { userSchema} from "../models/userModel";

const user = mongoose.model('User', userSchema);

export const loginRequired = (req, res,next) => {
    if(req.user){
        next();
    }else{
        return res.status(401).json({ message: "Unathorized User!!"});
    }
}


export const register = (req, res) => {
    const newUser = new user(req.body);
    newUser.hashPassword = bcrypt.hashSync(req.body.password, 10);
    newUser.save((err, user) => {
        if(err){
            return res.satus(401).json({ message:"email taken"});
        }else{
            user.hashPassword = undefined;
            return res.json(user);
        }
    });
}

export const login = (req, res) => {
    user.findOne({ email: req.body.email}, (err, user) => {
        if(err) throw err;
        if(!user){
            return res.status(401).json({ message: " Authentication Failed"});
        }else if(user){
            if(!user.comparePassword(req.body.password, user.hashPassword)){
                return res.satus(401).json({ message: "Authentication Failed Wrong Password"});
            }else{
                return res.json({ token: jwt.sign({ email: user.email, username: user.username, _id: user.id }, 'JhayCodes')});
            }
        }
    });
}


