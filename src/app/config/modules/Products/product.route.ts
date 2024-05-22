
import express from "express";
import { productController } from "./product.controller";


const router = express.Router()

router.post('/',productController.createAllProducts )
router.get('/',productController.getAllProducts)
router.get('/:productId',productController.getSingleProduct)
router.put('/:productId',productController.updateSingleProduct)
router.delete('/:productId',productController.deleteSingleProduct)
router.get('/',productController.searchProduct)

export default  router