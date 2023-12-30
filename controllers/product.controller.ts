import { Response, Request } from "express";
import { IProduct } from "../types/product";
import { ProductModel } from "../models/product.model";

const getProducts = async (req: Request, res: Response): Promise<void> => {
  try {
    const products: IProduct[] = await ProductModel.find().sort({
      updatedDate: -1,
    });
    res.status(200).json({ products });
  } catch (error) {
    throw error;
  }
};

const getProduct = async (req: Request, res: Response): Promise<void> => {
  try {
    const product: IProduct | null = await ProductModel.findById(req.params.id);
    res.status(200).json({ product });
  } catch (error) {
    throw error;
  }
};

const addProduct = async (req: Request, res: Response): Promise<void> => {
  try {
    const body = req.body as Pick<
      IProduct,
      "SKU" | "name" | "description" | "quantity" | "unitPrice"
    >;

    const product: IProduct = new ProductModel({
      SKU: body.SKU,
      name: body.name,
      description: body.description,
      quantity: body.quantity,
      unitPrice: body.unitPrice,
      createDate: new Date(),
      updatedDate: new Date(),
    });

    const newProduct: IProduct = await product.save();

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

    const updateProduct: IProduct | null = await ProductModel.findByIdAndUpdate(
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

export { getProducts, getProduct, addProduct, updateProduct, deleteProduct };
