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

const updateStationaryProduct = async (req: Request, res: Response) => {
  try {
    const id = req.params.productId;
    const body = req.body;
    const data = await ProductServices.updateStationaryProductFromDB(id, body);
    res.send({
      message: 'Product updated successfully',
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

const deleteStationaryProduct = async (req: Request, res: Response) => {
  try {
    const id = req.params.productId;
    const deletedProduct =
      await ProductServices.deleteStationaryProductFromDB(id);
    if (!deletedProduct) {
      res.status(404).json({
        message: 'Product not found',
        success: false,
      });
    } else {
      res.send({
        message: 'Product deleted successfully',
        status: true,
        data: {},
      });
    }

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
  updateStationaryProduct,
  deleteStationaryProduct,
};
