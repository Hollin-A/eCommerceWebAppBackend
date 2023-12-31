import { Response, Request } from "express";
import { Product } from "../types/product";
import { ProductModel } from "../models/product.model";
import * as fs from "fs";

const getProducts = async (req: Request, res: Response): Promise<void> => {
  try {
    const products: Product[] = await ProductModel.find().sort({
      updatedDate: -1,
    });
    res.status(200).json({ products });
  } catch (error) {
    throw error;
  }
};

const getFavouriteProducts = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const products: Product[] = await ProductModel.find({
      favourite: true,
    }).sort({
      updatedDate: -1,
    });
    res.status(200).json({ products });
  } catch (error) {
    throw error;
  }
};

const getProduct = async (req: Request, res: Response): Promise<void> => {
  try {
    const product: Product | null = await ProductModel.findById(req.params.id);
    res.status(200).json({ product });
  } catch (error) {
    throw error;
  }
};

const addProduct = async (req: Request, res: Response): Promise<void> => {
  try {
    const body = req.body as Pick<
      Product,
      "SKU" | "name" | "description" | "quantity" | "unitPrice"
    >;

    const product: Product = new ProductModel({
      SKU: body.SKU,
      name: body.name,
      description: body.description,
      quantity: body.quantity,
      unitPrice: body.unitPrice,
      images: req.file && req.file.filename,
      favourite: false,
      createDate: new Date(),
      updatedDate: new Date(),
    });

    const newProduct: Product = await product.save();

    res.status(201).json({ message: "product added", product: newProduct });
  } catch (error) {
    res.status(400).json({ error });
    // throw error;
  }
};

const updateProduct = async (req: Request, res: Response): Promise<void> => {
  try {
    const {
      params: { id },
      body,
    } = req;

    const updatedProduct = {
      SKU: body.SKU,
      name: body.name,
      description: body.description,
      quantity: body.quantity,
      unitPrice: body.unitPrice,
      updatedDate: new Date(),
    };

    const updateProduct: Product | null = await ProductModel.findByIdAndUpdate(
      id,
      updatedProduct,
      { new: true }
    );
    res.status(200).json({
      message: "Product updated",
      product: updateProduct,
    });
  } catch (error) {
    throw error;
  }
};

const getImage = async (req: Request, res: Response): Promise<void> => {
  const {
    params: { filename },
  } = req;

  const filepath = `images/${filename}`;

  // Check if file exists
  if (fs.existsSync(filepath)) {
    // Read file and send in response
    const fileContent = fs.readFileSync(filepath, "utf8");
    res.send(fileContent);
  } else {
    // File not found
    res.status(404).send("File not found");
  }
};

const toggleFavouriteProduct = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const {
      params: { id },
    } = req;

    const product: Product | null = await ProductModel.findById(id);
    if (!product) {
      res.status(404).json({
        message: "Product not found",
      });
      return;
    }

    product.favourite = !product.favourite;

    const updatedProduct: Product | null = await ProductModel.findByIdAndUpdate(
      id,
      product,
      { new: true }
    );
    res.status(200).json({
      message: "Product favourite toggled",
      product: updatedProduct,
    });
  } catch (error) {
    throw error;
  }
};

const deleteProduct = async (req: Request, res: Response): Promise<void> => {
  try {
    const deletedProduct = await ProductModel.findByIdAndDelete(req.params.id);
    res.status(200).json({
      message: "Product deleted",
      product: deletedProduct,
    });
  } catch (error) {
    throw error;
  }
};

export {
  getProducts,
  getFavouriteProducts,
  getImage,
  getProduct,
  addProduct,
  updateProduct,
  toggleFavouriteProduct,
  deleteProduct,
};
