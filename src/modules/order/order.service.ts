import Product from '../product/product.model';
import { IOrder } from './order.interface';
import Order from './order.model';

const getProductById = async (id: string) => {
  const result = await Product.findById(id);
  return result;
};

const createOrderIntoDB = async (orderData: IOrder) => {
  const result = await Order.create(orderData);
  return result;
};

const getAllOrdersFromDB = async () => {
  const result = await Order.find();
  return result;
};

const getSingleOrderFromDB = async (email: string) => {
  const result = await Order.findOne({ email });
  return result;
};

const calculateRevenueFromDB = async (): Promise<number> => {
  const result = await Order.aggregate([
    {
      $group: {
        _id: null,
        totalRevenue: { $sum: { $multiply: ['$quantity', '$totalPrice'] } },
      },
    },
  ]);
  return result.length > 0 ? result[0].totalRevenue : 0;
};

export const OrderServices = {
  getProductById,
  createOrderIntoDB,
  getAllOrdersFromDB,
  getSingleOrderFromDB,
  calculateRevenueFromDB,
};
