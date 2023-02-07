import { Request, Response } from 'express';
// import { IProduct } from '../interfaces';
import productService from '../services/productService';

const getAll = async (req: Request, res: Response) => {
  const users = await productService.getAll();
  return res.status(200).json(users);
};

const createProduct = async (req: Request, res: Response) => {
  const { name, amount } = req.body;
  if (!name || !amount) return res.status(400).json({ message: 'Campos faltantes' });

  const product = await productService.createProduct(req.body);
  return res.status(201).json(product);
};

export default { getAll, createProduct };