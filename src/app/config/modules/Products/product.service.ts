import { Tproduct } from "./product.interface";
import { ProductModel } from "./product.model";

const createAllProductsIntoDb = async (productData: Tproduct) => {
  const result = await ProductModel.create(productData);
  return result;
};
const getAllProductsFromDb = async () => {
  const result = await ProductModel.find();
  return result;
};

const getSingleProductFromDb = async (id: string) => {
  const result = await ProductModel.findOne({ id :id });
  return result;
};
const updateSingleProductFromDb = async (id : string, update: Tproduct) => {
  const result = await ProductModel.findByIdAndUpdate(id, update, {  new: true});
  return result;
};

// delete singleProduct
const deleteSingleProduct = async (id: string) => {
  const result = await ProductModel.deleteOne({ id });
  return result;
};

const searchProduct = async (searchTerm: string) => {
  let query = {};
  if (searchTerm) {
    query = {
      $or: [
        { name: { $regex: searchTerm, $options: "i" } },
        { tags: { $regex: searchTerm, $options: "i" } },
      ],
    };
  }
  const result = await ProductModel.find(query);
  return result;
};

export const productService = {
  createAllProductsIntoDb,
  getAllProductsFromDb,
  getSingleProductFromDb,
  updateSingleProductFromDb,
  deleteSingleProduct,
  searchProduct,
};
