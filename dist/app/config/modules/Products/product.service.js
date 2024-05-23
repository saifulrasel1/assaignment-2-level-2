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
exports.productService = void 0;
const product_model_1 = require("./product.model");
const createAllProductsIntoDb = (productData) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield product_model_1.ProductModel.create(productData);
    return result;
});
const getAllProductsFromDb = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield product_model_1.ProductModel.find();
    return result;
});
const getSingleProductFromDb = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield product_model_1.ProductModel.findOne({ id: id });
    return result;
});
const updateSingleProductFromDb = (id, update) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield product_model_1.ProductModel.findByIdAndUpdate(id, update, { new: true });
    return result;
});
// delete singleProduct
const deleteSingleProduct = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield product_model_1.ProductModel.deleteOne({ id });
    return result;
});
const searchProduct = (searchTerm) => __awaiter(void 0, void 0, void 0, function* () {
    let query = {};
    if (searchTerm) {
        query = {
            $or: [
                { name: { $regex: searchTerm, $options: "i" } },
                { tags: { $regex: searchTerm, $options: "i" } },
            ],
        };
    }
    const result = yield product_model_1.ProductModel.find(query);
    return result;
});
exports.productService = {
    createAllProductsIntoDb,
    getAllProductsFromDb,
    getSingleProductFromDb,
    updateSingleProductFromDb,
    deleteSingleProduct,
    searchProduct,
};
