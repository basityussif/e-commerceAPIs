import mongoose from "mongoose";
import {cartSchema} from '../models/cartModel';

const cart = mongoose.model('cart', cartSchema);

export const addNewCart = (req, res) => {
    let newCart = new cart(req.body);
    newCart.save((err, cart) => {
        if(err){
            res.send(err);
        }
        res.json(cart);
    });
}

export const getAllCart = (req, res) =>{
    cart.find({}, (err, cart) => {
        if(err){
            res.send(err);
        }
        res.json(cart);
    });
}

export const updateCart = (req, res) => {
    cart.findOneAndUpdate({ _id: req.params.cartID}, req.body, {new: true, useFindAndModify: false}, (err, cart) => {
        if(err){
            res.send(err);
        }
        res.json(cart);
    });
}

export const deleteCart = (req, res) => {
    cart.remove({ _id: req.params.cartID}, (err, cart) => {
        if(err){
            res.send(err);
        }
        res.json({ message: "Product deleted successfully"});
    });
}