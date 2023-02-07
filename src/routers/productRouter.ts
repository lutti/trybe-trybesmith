import { Router } from 'express';
import productController from '../controllers/productController';

const routers = Router();

routers.get('/', productController.getAll);
routers.post('/', productController.createProduct);

export default routers;