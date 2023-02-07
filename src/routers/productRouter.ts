import { Router } from 'express';
import productController from '../controllers/productController';

const routers = Router();

routers.get('/', productController.getAll);

export default routers;