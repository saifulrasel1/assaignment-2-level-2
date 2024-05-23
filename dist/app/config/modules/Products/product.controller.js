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
exports.productController = void 0;
const product_service_1 = require("./product.service");
const products_zod_validation_1 = require("./products.zod.validation");
const createAllProducts = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const products = req.body.products;
        const zodValidation = products_zod_validation_1.zodValidationProduct.parse(products);
        const result = yield product_service_1.productService.createAllProductsIntoDb(zodValidation);
        res.status(200).json({
            success: true,
            message: "products added to the mongodb",
            data: result,
        });
    }
    catch (err) {
        res.status(500).json({
            success: false,
            message: "something went wrong",
            err,
        });
    }
});
// getsingleProduct
const getSingleProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const productId = req.params.id;
        const result = yield product_service_1.productService.getSingleProductFromDb(productId);
        res.status(200).json({
            success: true,
            message: "single products",
            data: result,
        });
    }
    catch (err) {
        res.status(500).json({
            success: false,
            message: "something went wrong",
            err,
        });
    }
});
// updatesingleproductbyid
const updateSingleProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const productId = req.params.productId;
        const updateProduct = req.body;
        const result = yield product_service_1.productService.updateSingleProductFromDb(productId, updateProduct);
        res.status(200).json({
            success: true,
            message: " updated products",
            data: result,
        });
    }
    catch (err) {
        res.status(500).json({
            success: false,
            message: " updatesingeproduct something went wrong",
            error: err,
        });
    }
});
const deleteSingleProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const productId = req.params.id;
        const result = yield product_service_1.productService.deleteSingleProduct(productId);
        res.status(200).json({
            success: true,
            message: " deleted product",
            data: result,
        });
    }
    catch (err) {
        res.status(500).json({
            success: false,
            message: " updatesingeproduct something went wrong",
            error: err,
        });
    }
});
const searchProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { searchTerm } = req.query;
    if (searchTerm) {
        try {
            const result = yield product_service_1.productService.searchProduct(searchTerm);
            res.status(200).json({
                success: true,
                message: " search product",
                data: result,
            });
        }
        catch (err) {
            res.status(500).json({
                success: false,
                message: " search something went wrong",
                error: err,
            });
        }
    }
    else {
        getAllProducts(req, res);
    }
});
const getAllProducts = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield product_service_1.productService.getAllProductsFromDb();
        res.status(200).json({
            success: true,
            message: "all products",
            data: result,
        });
    }
    catch (err) {
        res.status(500).json({
            success: false,
            message: "something went wrong",
            err,
        });
    }
});
exports.productController = {
    createAllProducts,
    getAllProducts,
    getSingleProduct,
    updateSingleProduct,
    deleteSingleProduct,
    searchProduct,
};
