# 🛍️ [Stationery Shop](https://stationary-shop-six.vercel.app/)

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


```

## 📦 Installation Guides

**1. Install Dependencies:**

```bash
npm install
```

**2. Set up .env file: Create a .env file in the root directory and add:**

```bash
PORT=5000
DATABASE_URL=mongodb+srv://<username>:<password>@<cluster>.mongodb.net/<database>
```

**3. Compile TypeScript:**

```bash
npm run build
````

**4. Start the Server:**

- Production Mode

```bash
npm run start:prod
```

- Development Mode

```bash
npm run start:dev
```

## 🚀 Api Endpoints

| Method   | Endpoint         | Description                             | Response Status |
| -------- | ---------------- | --------------------------------------- | --------------- |
| `POST`   | `/products`      | Create a new product                    | `201 Created`   |
| `GET`    | `/products`      | Get all products                        | `200 OK`        |
| `GET`    | `/products/:id`  | Get a single product by ID              | `200 OK`        |
| `PUT`    | `/products/:id`  | Update a product by ID                  | `200 OK`        |
| `DELETE` | `/products/:id`  | Delete a product by ID                  | `200 OK`        |
| `POST`   | `/orders`        | Create a new order                      | `201 Created`   |
| `GET`    | `/orders`        | Get all orders                          | `200 OK`        |
| `GET`    | `/orders/:email` | Get orders for a specific user by email | `200 OK`        |
| `GET`    | `/revenue`       | Calculate total revenue from all orders | `200 OK`        |

This table gives an overview of the available API endpoints for the Stationery Shop application.
