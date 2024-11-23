import { Router } from 'express';
import { ProductController } from './product.controller';

const productRouter = Router();

productRouter.post('/', ProductController.createStationaryProduct);
productRouter.get('/', ProductController.getAllStationaryProducts);

export default productRouter;
