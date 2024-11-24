import { Request, Response } from 'express';
import { OrderServices } from './order.service';

const createOrder = async (req: Request, res: Response) => {
  try {
    const orderData = req.body;
    const foundProduct = await OrderServices.getProductById(orderData.product);

    if (!foundProduct) {
      res.status(404).json({
        message: 'Product not found',
        success: false,
      });
    } else if (foundProduct.quantity < orderData.quantity) {
      res.status(400).json({
        message: 'Insufficient stock',
        success: false,
      });
    } else {
      foundProduct.quantity -= orderData.quantity;
      foundProduct.inStock = foundProduct.quantity > 0;
      const order = await OrderServices.createOrderIntoDB(orderData);
      await foundProduct.save();
      res.status(201).json({
        message: 'Order created successfully',
        success: true,
        data: order,
      });
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    res.status(400).json({
      message: 'Order creation failed',
      success: false,
      error,
      stack: error.stack,
    });
  }
};

const getAllOrders = async (req: Request, res: Response) => {
  try {
    const data = await OrderServices.getAllOrdersFromDB();
    res.send({
      message: 'Orders retrieved successfully',
      status: true,
      orders: data,
    });
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    res.json({
      message: error.message,
      success: false,
      error,
      stack: error.stack,
    });
  }
};

const getSingleOrder = async (req: Request, res: Response) => {
  try {
    const email = req.params.email;
    const data = await OrderServices.getSingleOrderFromDB(email);
    res.send({
      message: 'Order retrieved successfully',
      status: true,
      data: data,
    });
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    res.json({
      message: error.message,
      success: false,
      error,
      stack: error.stack,
    });
  }
};

const calculateRevenue = async (req: Request, res: Response) => {
  try {
    const totalRevenue = await OrderServices.calculateRevenueFromDB();
    res.status(200).json({
      message: 'Revenu calculated Successfully',
      status: true,
      totalRevenue: { totalRevenue },
    });
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    res.status(500).json({
      message: 'Failed to calculate revenue',
      success: false,
      error,
      stack: error.stack,
    });
  }
};

export const OrderController = {
  createOrder,
  getAllOrders,
  getSingleOrder,
  calculateRevenue,
};
