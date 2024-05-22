import { Torder } from "./order.interface";
import { orderModel } from "./order.model";

const createOrderIntoDb = async (payload: Torder) => {
  const result = await orderModel.create(payload);
  return result;
};

const getAllOrderFromDb = async () => {
  const result = await orderModel.find();
  return result;
};

const getOrderByGmailFromDb = async(email:string) => {
    const result = await orderModel.find({email})
    if(!email){
        throw new Error("email not found") 
    }
    return result
}

export const orderService = {
  createOrderIntoDb,
  getAllOrderFromDb,
  getOrderByGmailFromDb
};
