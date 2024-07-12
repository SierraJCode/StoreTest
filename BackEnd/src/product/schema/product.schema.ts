import { Schema } from "mongoose";

export const ProductSchema = new Schema({
    name: {type: String, require: true},
    description: {type: String, require: true},
    price: {type: Number, require: true},
    img: {type: String, require: true},
    createAt: {type: Date, require: true}
})