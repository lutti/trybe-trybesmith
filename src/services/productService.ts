import productModel from '../models/productModel';
import { IProduct } from '../interfaces';

const getAll = async (): Promise<IProduct[]> => {
  const products = await productModel.getAll();
  return products;
};

const createProduct = async (prod: IProduct): Promise<IProduct> => {
  const product = await productModel.createProduct(prod);
  return product;
};

export default { getAll, createProduct };