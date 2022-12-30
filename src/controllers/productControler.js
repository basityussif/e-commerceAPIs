import mongoose from "mongoose";
import {productSchema} from '../models/productModel';

const Product = mongoose.model('Product', productSchema);

export const addNewProduct = (req, res) => {
    let newProduct = new Product(req.body);
    newProduct.save((err, Product) => {
        if(err){
            res.send(err);
        }
        res.json(Product);
    });
}

export const getAllProduct = (req, res) =>{
    Product.find({}, (err, Product) => {
        if(err){
            res.send(err);
        }
        res.json(Product);
    });
}

export const updateProduct = (req, res) => {
    Product.findOneAndUpdate({ _id: req.params.productID}, req.body, {new: true, useFindAndModify: false}, (err, Product) => {
        if(err){
            res.send(err);
        }
        res.json(Product);
    });
}

export const deleteProduct = (req, res) => {
    Product.remove({ _id: req.params.productID}, (err, Product) => {
        if(err){
            res.send(err);
        }
        res.json({ message: "Product deleted successfully"});
    });
}