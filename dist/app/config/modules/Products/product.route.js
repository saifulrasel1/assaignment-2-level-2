"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const product_controller_1 = require("./product.controller");
const router = express_1.default.Router();
router.post('/', product_controller_1.productController.createAllProducts);
// router.get('/',productController.getAllProducts)
router.get('/:productId', product_controller_1.productController.getSingleProduct);
router.put('/:productId', product_controller_1.productController.updateSingleProduct);
router.delete('/:productId', product_controller_1.productController.deleteSingleProduct);
router.get('/', product_controller_1.productController.searchProduct);
exports.default = router;
