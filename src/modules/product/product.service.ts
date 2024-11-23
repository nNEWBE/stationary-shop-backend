import { IProduct } from './product.interface';
import Product from './product.model';

const createStationaryProductIntoDB = async (productData: IProduct) => {
  const result = await Product.create(productData);
  return result;
};

const getAllStationaryProductsFromDB = async () => {
  const result = await Product.find();
  return result;
};

const getSingleStationaryProductFromDB = async (id: string) => {
  const result = await Product.findById(id);
  return result;
};

export const ProductServices = {
  createStationaryProductIntoDB,
  getAllStationaryProductsFromDB,
  getSingleStationaryProductFromDB,
};
