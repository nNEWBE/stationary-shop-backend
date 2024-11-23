import { Router } from 'express';
import { ProductController } from './product.controller';

const productRouter = Router();

productRouter.post('/', ProductController.createStationaryProduct);

export default productRouter;
