"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const product_route_1 = __importDefault(require("./app/config/modules/Products/product.route"));
const order_route_1 = __importDefault(require("./app/config/modules/orders/order.route"));
const app = (0, express_1.default)();
// parser
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use("/api/orders", order_route_1.default);
app.use("/api/products", product_route_1.default);
app.get("/", (req, res) => {
    res.send("hlw world");
});
app.all("*", (req, res) => {
    res.status(404).json({
        success: false,
        message: 'your route path problem please correction it'
    });
});
exports.default = app;
