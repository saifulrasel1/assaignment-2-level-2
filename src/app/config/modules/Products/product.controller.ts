import { Request, Response } from "express";
import { productService } from "./product.service";
import { zodValidationProduct } from "./products.zod.validation";

const createAllProducts = async (req: Request, res: Response) => {
  try {
    const products = req.body.products;
    const zodValidation = zodValidationProduct.parse(products);
    const result = await productService.createAllProductsIntoDb(zodValidation);

    res.status(200).json({
      success: true,
      message: "products added to the mongodb",
      data: result,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "something went wrong",
      err,
    });
  }
};

const getAllProducts = async (req: Request, res: Response) => {
  try {
    const result = await productService.getAllProductsFromDb();
    res.status(200).json({
      success: true,
      message: "all products",
      data: result,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "something went wrong",
      err,
    });
  }
};

// getsingleProduct 
const getSingleProduct = async (req: Request, res: Response) => {
  try {
    const productId = req.params.id;
    const result = await productService.getSingleProductFromDb(productId);
    res.status(200).json({
      success: true,
      message: "single products",
      data: result,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "something went wrong",
      err,
    });
  }
};

// updatesingleproductbyid

const updateSingleProduct = async (req: Request, res: Response) => {
  try {
    const productId = req.params.productId;
    const result = await productService.updateSingleProductFromDb(productId);
    res.status(200).json({
      success: true,
      message: " updated products",
      data: result,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message:  " updatesingeproduct something went wrong",
      error:err
    });
  }
};
const deleteSingleProduct = async (req: Request, res: Response) => {
  try {
    const productId = req.params.id;
    const result = await productService.deleteSingleProduct(productId);
    res.status(200).json({
      success: true,
      message: " deleted product",
      data: result,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message:  " updatesingeproduct something went wrong",
      error:err
    });
  }
};

const searchProduct = async (req: Request, res: Response) => {
  
  try {
    const searchTerm :string = req.query.searchTerm as string;
    console.log('serarch tererl', searchTerm)
      const result = await productService.searchProduct(searchTerm);
      res.status(200).json({
        success: true,
        message: " search product",
        data: result,
      });
  } 
    catch (err) {
    res.status(500).json({
      success: false,
      message:  " search something went wrong",
      error:err
    });
  }
}






export const productController = {
  createAllProducts,
  getAllProducts,
  getSingleProduct,
  updateSingleProduct,
  deleteSingleProduct,
  searchProduct
};
