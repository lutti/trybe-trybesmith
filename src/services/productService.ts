import productModel from '../models/productModel';
import IProduct from '../interfaces';

const getAll = async (): Promise<IProduct[]> => {
  const products = await productModel.getAll();
  return products;
};

export default { getAll };