import orderModel from '../models/orderModel';
import { IOrder } from '../interfaces';

const getAll = async (): Promise<IOrder[]> => {
  const orders = await orderModel.getAll();
  return orders;
};

export default { getAll };