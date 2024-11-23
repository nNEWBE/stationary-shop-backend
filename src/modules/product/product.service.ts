import { IProduct } from './product.interface';
import Product from './product.model';

const createStationaryProductIntoDB = async (productData: IProduct) => {
  const result = await Product.create(productData);
  return result;
};

export const ProductService = {
  createStationaryProductIntoDB,
};
