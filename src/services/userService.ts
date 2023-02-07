import jwt from 'jsonwebtoken';
import userModel from '../models/userModel';
import { IUser } from '../interfaces';

const createUser = async (user: IUser): Promise<IUser> => {
  const resultUser = await userModel.createUser(user);
  return resultUser;
};

const generateToken = (user: IUser) => {
  const payload = { id: user.id, username: user.username };
  return jwt.sign(payload, process.env.JWT_SECRET as string, {
    algorithm: 'HS256', expiresIn: '1d',
  });
};

const addNewUser = async (user: IUser) => {
  await userModel.createUser(user);
  return generateToken(user);
};

export default { createUser, addNewUser };