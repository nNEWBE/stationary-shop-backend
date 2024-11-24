/* eslint-disable @typescript-eslint/no-explicit-any */
import { Request, Response } from 'express';
import { OrderServices } from './order.service';
import { OrderValidationSchema } from './order.validation';

const createOrder = async (req: Request, res: Response) => {
    try {
        const orderData = req.body;
        const zodParseData = OrderValidationSchema.parse(orderData);
        const foundProduct = await OrderServices.getProductById(zodParseData.product);

        if (!foundProduct) {
            res.status(404).json({
                message: 'Product not found',
                success: false,
            });
        } else if (foundProduct.quantity < zodParseData.quantity) {
            res.status(400).json({
                message: 'Insufficient stock',
                success: false,
            });
        } else {
            foundProduct.quantity -= zodParseData.quantity;
            foundProduct.inStock = foundProduct.quantity > 0;
            const order = await OrderServices.createOrderIntoDB(zodParseData);
            await foundProduct.save();
            res.status(201).json({
                message: 'Order created successfully',
                success: true,
                data: order,
            });
        }

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

        if (!data) {
            res.status(404).json({
                message: 'Order not found',
                success: false,
            });
        }

        res.send({
            message: 'Order retrieved successfully',
            status: true,
            data: data,
        });

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
            message: 'Revenue calculated successfully',
            status: true,
            totalRevenue: { totalRevenue },
        });

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
