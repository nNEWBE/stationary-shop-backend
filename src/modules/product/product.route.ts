import { Router } from 'express';
import { ProductController } from './product.controller';

const productRouter = Router();

productRouter.get('/:productId', ProductController.getSingleStationaryProduct);
productRouter.post('/', ProductController.createStationaryProduct);
productRouter.get('/', ProductController.getAllStationaryProducts);
productRouter.put('/:productId', ProductController.updateStationaryProduct);
productRouter.delete('/:productId', ProductController.deleteStationaryProduct);

export default productRouter;
