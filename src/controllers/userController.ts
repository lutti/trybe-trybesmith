import { Request, Response } from 'express';
import userService from '../services/userService';

const signIn = async (req: Request, res: Response) => {
  const token = await userService.addNewUser(req.body);
  return res.status(201).json({ token });
};

export default { signIn };