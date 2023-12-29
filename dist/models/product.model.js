"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductModel = void 0;
const mongoose_1 = require("mongoose");
const ProductSchema = new mongoose_1.Schema({
    SKU: { type: String, required: true },
    name: { type: String, required: true },
    description: { type: String, required: true },
    unitPrice: { type: Number, required: false },
    quantity: { type: Number, required: true },
    createDate: { type: Date, default: Date.now },
    updatedDate: { type: Date, default: Date.now },
    timestamps: { createDate: Date, updatedDate: Date },
});
exports.ProductModel = (0, mongoose_1.model)("products", ProductSchema);
