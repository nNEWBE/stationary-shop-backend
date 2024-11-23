import { IProduct } from './product.interface';
import Product from './product.model';

const createStationaryProductIntoDB = async (productData: IProduct) => {
    const result = await Product.create(productData);
    return result;
};

const getAllStationaryProductsFromDB = async () => {
    const result = await Product.find();
    return result;
}

export const ProductServices = {
    createStationaryProductIntoDB,
    getAllStationaryProductsFromDB
};
