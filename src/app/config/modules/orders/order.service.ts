import { Torder } from "./order.interface";
import { orderModel } from "./order.model";

const createOrderIntoDb = async (payload: Torder) => {
  const result = await orderModel.create(payload);
  return result;
};

const getAllOrderFromDb = async (email: string) => {
  const query = email ? { email } : {};

  const result = await orderModel.find(query);

  return result;
};

export const orderService = {
  createOrderIntoDb,
  getAllOrderFromDb,
};
