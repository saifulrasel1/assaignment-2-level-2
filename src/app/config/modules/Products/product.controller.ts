import { Request, Response } from "express";
import mongoose from "mongoose";
import { productService } from "./product.service";
import { error } from "console";

const createAllProducts = async (req:Request,res:Response) => {
        try{
            const products = req.body.products
            const result = await productService.createAllProductsIntoDb(products)

            res.status(200).json({
                success:true,
                message:"products added to the mongodb",
                data:result
            })
        }catch(err){
            res.status(500).json({
                success:false,
                message:"something went wrong",
                err:error
            })
        }
}

export const productController = {
    createAllProducts
}