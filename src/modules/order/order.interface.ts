import { Types } from 'mongoose';

export interface IOrder {
  email: string; // Customer's email
  product: Types.ObjectId; // Reference to the Product
  quantity: number; // Quantity of the ordered product
  totalPrice: number; // Total price = product price * quantity
}
