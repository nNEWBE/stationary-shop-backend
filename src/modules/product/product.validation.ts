import { z } from "zod";

// Zod schema for validating Product data
export const ProductValidationSchema = z.object({
    name: z.string().min(1, { message: "Name is required" }),
    brand: z.string().min(1, "Brand is required"),
    price: z.number().min(0, "Price must be a positive number"),
    category: z
        .enum([
            "Writing",
            "Office Supplies",
            "Art Supplies",
            "Educational",
            "Technology",
        ]),
    description: z.string().min(1, "Description is required"),
    quantity: z.number().int().min(0, "Quantity must be a positive number"),
    inStock: z.boolean(),
});
