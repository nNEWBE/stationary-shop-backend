import { Request, Response } from 'express';
import Product from './product.model';

const createStationaryProduct = async (req: Request, res: Response) => {
  try {
    const body = req.body;
    const data = await Product.create(body);
    res.send({
      message: 'Product created successfully',
      success: true,
      data,
    });

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    res.status(500).json({
      message: 'Validation failed',
      success: false,
      error,
      stack: error.stack,
    });
  }
};

export const ProductController = {
  createStationaryProduct,
};
