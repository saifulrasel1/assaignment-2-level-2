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
exports.orderController = void 0;
const order_service_1 = require("./order.service");
const order_zod_validation_1 = require("./order.zod.validation");
const orderCreate = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const newOrder = req.body.orders;
        const zodvalidate = order_zod_validation_1.zodvalidator.parse(newOrder);
        const result = yield order_service_1.orderService.createOrderIntoDb(zodvalidate);
        res.status(200).json({
            success: true,
            message: "order Added to mongodb",
            data: result,
        });
    }
    catch (error) {
        res.status(200).json({
            success: false,
            message: "order not added to mongodb",
            error: error,
        });
    }
});
const getAllOrder = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email } = req.query;
        const result = yield order_service_1.orderService.getAllOrderFromDb(email);
        res.status(200).json({
            success: true,
            message: "all order found from  mongodb",
            data: result,
        });
    }
    catch (error) {
        res.status(200).json({
            success: false,
            message: "no order found from mongodb",
            error: error,
        });
    }
});
exports.orderController = {
    orderCreate,
    getAllOrder,
};
