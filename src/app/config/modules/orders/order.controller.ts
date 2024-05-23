import { Response, Request } from "express";

import { orderService } from "./order.service";
import { zodvalidator } from "./order.zod.validation";

const orderCreate = async (req: Request, res: Response) => {
  try {
    const newOrder = req.body.orders;
    const zodvalidate = zodvalidator.parse(newOrder);
    const result = await orderService.createOrderIntoDb(zodvalidate);
    res.status(200).json({
      success: true,
      message: "order Added to mongodb",
      data: result,
    });
  } catch (error) {
    res.status(200).json({
      success: false,
      message: "order not added to mongodb",
      error: error,
    });
  }
};

const getAllOrder = async (req: Request, res: Response) => {
  try {
    const {email} = req.query
    const result = await orderService.getAllOrderFromDb(email as string);
    res.status(200).json({
      success: true,
      message: "all order found from  mongodb",
      data: result,
    });
  } catch (error) {
    res.status(200).json({
      success: false,
      message: "no order found from mongodb",
      error: error,
    });
  }
};



export const orderController = {
  orderCreate,
  getAllOrder,
  
};
