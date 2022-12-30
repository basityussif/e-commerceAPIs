import mongoose from "mongoose";
import bcrypt from "bcrypt";

const Schema = mongoose.Schema;

export const cartSchema = new Schema({
    userid: {
        type: String,
        required: true
    },
    product: [
        {
            productid:{
                type: String,
                required: true
            },
            quantity: {
                type: Number,
                required: true
            }
        }
    ]
    
}, {timestamps: true});