"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteProduct = exports.updateProduct = exports.addProduct = exports.getProduct = exports.getProducts = void 0;
const product_model_1 = require("../models/product.model");
const getProducts = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const products = yield product_model_1.ProductModel.find().sort({
            updatedDate: -1,
        });
        res.status(200).json({ products });
    }
    catch (error) {
        throw error;
    }
});
exports.getProducts = getProducts;
const getProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const product = yield product_model_1.ProductModel.findById(req.params.id);
        res.status(200).json({ product });
    }
    catch (error) {
        throw error;
    }
});
exports.getProduct = getProduct;
const addProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const body = req.body;
        const product = new product_model_1.ProductModel({
            SKU: body.SKU,
            name: body.name,
            description: body.description,
            quantity: body.quantity,
            unitPrice: body.unitPrice,
            createDate: new Date(),
            updatedDate: new Date(),
        });
        const newProduct = yield product.save();
        res.status(201).json({ message: "product added", product: newProduct });
    }
    catch (error) {
        res.status(400).json({ error });
        // throw error;
    }
});
exports.addProduct = addProduct;
const updateProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { params: { id }, body, } = req;
        const updatedProduct = {
            SKU: body.SKU,
            name: body.name,
            description: body.description,
            quantity: body.quantity,
            unitPrice: body.unitPrice,
            updatedDate: new Date(),
        };
        const updateProduct = yield product_model_1.ProductModel.findByIdAndUpdate(id, updatedProduct, { new: true });
        res.status(200).json({
            message: "Product updated",
            product: updateProduct,
        });
    }
    catch (error) {
        throw error;
    }
});
exports.updateProduct = updateProduct;
const deleteProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const deletedProduct = yield product_model_1.ProductModel.findByIdAndDelete(req.params.id);
        res.status(200).json({
            message: "Product deleted",
            product: deletedProduct,
        });
    }
    catch (error) {
        throw error;
    }
});
exports.deleteProduct = deleteProduct;
