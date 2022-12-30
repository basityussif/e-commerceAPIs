import mongoose from "mongoose";


const Schema = mongoose.Schema;

export const productSchema = new Schema({
   title: {
    type: String,
    reqired: true
   },

   description: {
    type: String,
    required: true
   },

   image: {
    type: String,
    default: " "
   },

   category: {
    type: Array
   },

   size:{
    type: String,
    required: true
   },

   color: {
    type: String,
    required: true
   },

   price: {
    type: Number,
    required: true
   }

}, {timestamps: true});