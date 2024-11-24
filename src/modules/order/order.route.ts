import { Router } from 'express';
import { OrderController } from './order.controller';

const orderRouter = Router();
orderRouter.get('/revenue', OrderController.calculateRevenue);
orderRouter.get('/:email', OrderController.getSingleOrder);
orderRouter.post('/', OrderController.createOrder);
orderRouter.get('/', OrderController.getAllOrders);

export default orderRouter;
