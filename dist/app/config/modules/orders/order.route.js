"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const order_controller_1 = require("./order.controller");
const routers = express_1.default.Router();
routers.post('/', order_controller_1.orderController.orderCreate);
routers.get('/', order_controller_1.orderController.getAllOrder);
exports.default = routers;
