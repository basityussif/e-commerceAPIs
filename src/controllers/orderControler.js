import mongoose from "mongoose";
import {orderSchema} from '../models/orderModel';

const order = mongoose.model('Product', orderSchema);

export const addNewOrder = (req, res) => {
    let newOrder = new order(req.body);
    newOrder.save((err, order) => {
        if(err){
            res.send(err);
        }
        res.json(order);
    });
}

export const getAllOrder = (req, res) =>{
    order.find({}, (err, order) => {
        if(err){
            res.send(err);
        }
        res.json(order);
    });
}

export const updateOrder = (req, res) => {
    order.findOneAndUpdate({ _id: req.params.orderID}, req.body, {new: true, useFindAndModify: false}, (err, order) => {
        if(err){
            res.send(err);
        }
        res.json(order);
    });
}

export const deleteOrder = (req, res) => {
    order.remove({ _id: req.params.orderID}, (err, order) => {
        if(err){
            res.send(err);
        }
        res.json({ message: "Product deleted successfully"});
    });
}