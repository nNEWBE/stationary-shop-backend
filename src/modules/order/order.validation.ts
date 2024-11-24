import { z } from "zod";

// Zod schema for validating Order data
export const OrderValidationSchema = z.object({
    email: z.string().email("Invalid email address"),
    product: z.string().regex(/^[0-9a-fA-F]{24}$/, "Invalid Product ID format"),
    quantity: z.number().int().min(1, "Quantity must be at least 1"),
    totalPrice: z.number().min(0, "Total price must be a positive number"),
});
