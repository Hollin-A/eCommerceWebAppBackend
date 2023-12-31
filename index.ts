import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import cors from "cors";


import { dbConnect } from "./config/db.config";

import productRoutes from "./routes/product.route";

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 8000;

app.use(express.json());
app.use(cors());

app.use("/api/v1/products", productRoutes);

dbConnect();

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
