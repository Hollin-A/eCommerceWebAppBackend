"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.dbConnect = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
const mongoose_1 = __importDefault(require("mongoose"));
dotenv_1.default.config();
const dbConnect = () => {
    const url = process.env.DB_URL;
    mongoose_1.default
        .connect(url)
        .then(() => console.log(`Successfully connected to MongoDB Atlas!`))
        .catch((error) => {
        console.log("Unable to connect to MongoDB Atlas!");
        console.log(error);
    });
};
exports.dbConnect = dbConnect;
