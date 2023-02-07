import { Request, Response } from 'express';
// import { IProduct } from '../interfaces';
import productService from '../services/productService';

const getAll = async (req: Request, res: Response) => {
  const users = await productService.getAll();
  return res.status(200).json(users);
};

// // const login = async (req: Request<{}, {}, TLogin>, res: Response) => {
// const login = async (req: Request, res: Response) => {
//   const { body } = req;

//   const token = await userService.login(body);

//   return res.status(200).json({ token })
// }

export default { getAll };