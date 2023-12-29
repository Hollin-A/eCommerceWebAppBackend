"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VehicleModel = void 0;
const mongoose_1 = require("mongoose");
const VehicleSchema = new mongoose_1.Schema({
    code: { type: String, required: true },
    brand: { type: String, required: true },
    brandModel: { type: String, required: true },
    registration: { type: String, required: true },
    color: { type: String, required: true },
    createDate: { type: Date, default: Date.now },
    updatedDate: { type: Date, default: Date.now },
    timestamps: { createDate: Date, updatedDate: Date },
});
exports.VehicleModel = (0, mongoose_1.model)("vehicles", VehicleSchema);
