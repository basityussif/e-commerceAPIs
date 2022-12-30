import mongoose from "mongoose";


const Schema = mongoose.Schema;

export const userSchema = new Schema({
  userid: {
    type: String,
    required: true
  },

  product: [
    {
        product:{
            type: String,
            required: true
        },
        quatity: {
            type: Number,
            required: true
        }
    }
  ],

  amount: {
    type: String,
    requied: true
  },

  address: {
    type: String,
    requied: true
  },

  price: {
    type: Number,
    required: true
  }

}, {timestamps: true});