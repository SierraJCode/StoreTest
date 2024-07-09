import { Schema } from "mongoose";

export const ProductSchema = new Schema({
    name: {type: String, require: true},
    description: {type: String, require: true},
    price: {type: String, require: true},
    createAt: {type: Date, default: Date.now}
})