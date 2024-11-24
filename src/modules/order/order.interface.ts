
export interface IOrder {
  email: string; // Customer's email
  product: string; // Reference to the Product
  quantity: number; // Quantity of the ordered product
  totalPrice: number; // Total price = product price * quantity
}
