# 🛒 Stationery Shop
## 📋 Objective
The **Stationery Shop** is a backend application built using **Express** with **TypeScript**, integrating **MongoDB** with **Mongoose** to manage stationery products and orders. The application ensures data integrity through schema validation and provides APIs for seamless CRUD operations.

## ✨ Features
1. **Stationery Product Management**:
   - Add, update, delete, and retrieve stationery products.
   - Supports detailed error handling (e.g., 404 when products are not found).
   - Includes in-stock quantity management.

2. **Order Management**:
   - Place orders for products.
   - Automatically update product stock after orders.
   - Retrieve orders or calculate total revenue.

3. **Validation**:
   - Zod and Mongoose validations ensure robust data integrity.

4. **Error Handling**:
   - Detailed error messages with appropriate HTTP status codes (e.g., 404, 400, 500).

5. **Modular Structure**:
   - Organized, scalable folder structure for large applications.

---

## 🛠️ Technologies Used

- **TypeScript**: Type-safe backend development.
- **Express**: Lightweight web framework for APIs.
- **MongoDB**: NoSQL database for storage.
- **Mongoose**: ODM library for schema validation and database operations.
- **Zod**: Schema validation library.
- **ESLint** & **Prettier**: For code quality and formatting.

---

## 📂 Folder Structure
```plaintext

src
├── app
│   └── config
│       └── index.ts                # MongoDB connection and configurations
├── modules
│   ├── order
│   │   ├── order.controller.ts     # Order controllers
│   │   ├── order.interface.ts      # Order interfaces
│   │   ├── order.model.ts          # Mongoose schema for orders
│   │   ├── order.route.ts          # Order routes
│   │   ├── order.service.ts        # Business logic for orders
│   │   └── order.validation.ts     # Zod validation for orders
│   ├── product
│       ├── product.controller.ts   # Product controllers
│       ├── product.interface.ts    # Product interfaces
│       ├── product.model.ts        # Mongoose schema for products
│       ├── product.route.ts        # Product routes
│       ├── product.service.ts      # Business logic for products
│       └── product.validation.ts   # Zod validation for products
├── app.ts                          # Application entry point
├── server.ts                       # Server setup
.env                                # Environment variables
.gitignore                          # Ignored files
.prettierrc                         # Prettier configuration
package.json                        # Dependencies and scripts
tsconfig.json                       # TypeScript configuration


````
