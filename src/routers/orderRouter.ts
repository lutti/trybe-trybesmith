import { Router } from 'express';
import orderController from '../controllers/orderController';

const routers = Router();

routers.get('/', orderController.getAll);

export default routers;