
import express from "express";
import { orderController } from "./order.controller";



const routers = express.Router()
routers.post('/', orderController.orderCreate)
routers.get('/', orderController.getAllOrder)


export default  routers