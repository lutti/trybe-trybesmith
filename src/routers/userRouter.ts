import { Router } from 'express';
import userController from '../controllers/userController';

const routers = Router();

routers.post('/', userController.signIn);

export default routers;