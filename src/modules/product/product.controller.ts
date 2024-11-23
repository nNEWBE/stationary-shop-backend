import { Request, Response } from 'express';
import { ProductServices } from './product.service';

const createStationaryProduct = async (req: Request, res: Response) => {
  try {
    const body = req.body;
    const data = await ProductServices.createStationaryProductIntoDB(body);
    res.send({
      message: 'Product created successfully',
      success: true,
      data,
    });

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    res.json({
      message: 'Validation failed',
      success: false,
      error,
      stack: error.stack,
    });
  }
};

const getAllStationaryProducts = async (req: Request, res: Response) => {
  try {
    const data = await ProductServices.getAllStationaryProductsFromDB();
    res.send({
      message: 'Products retrieved successfully',
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

const getSingleStationaryProduct = async (req: Request, res: Response) => {
  try {
    const id = req.params.productId;
    const data = await ProductServices.getSingleStationaryProductFromDB(id);
    res.send({
      message: 'Product retrieved successfully',
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

export const ProductController = {
  createStationaryProduct,
  getAllStationaryProducts,
  getSingleStationaryProduct,
};
