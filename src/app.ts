import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import productRouter from './modules/product/product.route';

const app: Application = express();

app.use(express.json());
app.use(cors());

app.use('/api/products', productRouter);

app.get('/', (req: Request, res: Response) => {
  res.send('Stationary Shop API is running !');
});

export default app;
