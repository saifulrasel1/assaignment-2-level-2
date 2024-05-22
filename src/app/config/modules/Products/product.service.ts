import { Tproduct } from "./product.interface"
import { ProductModel } from "./product.model";


const createAllProductsIntoDb = async(productData:Tproduct) => {
    const result = await ProductModel.create(productData)
    return result;
}

export const productService = {
    createAllProductsIntoDb
}