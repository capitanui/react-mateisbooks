import express from "express";
const router = express.Router();
import Product from "../models/productModel.js";
import asyncHandler from "express-async-handler";

// @desc   Fetch all products
// @route  GET /api/products
// @access Public

router.get(
  "/",
  asyncHandler(async (req, res) => {
    const products = await Product.find({});

    res.json(products);
  })
);

// @desc   Fetch single product
// @route  GET /api/product/:id
// @access Public

router.get(
  "/:id",
  asyncHandler(async (req, res) => {
    // Find product by code in the database
    const product = await Product.findOne({ code: req.params.id });
    if (product) {
      res.json(product);
    } else {
      res.status(404);
      throw new Error("Product not found");
    }
  })
);

// @desc   Fetch products by category
// @route  GET /api/products/category/:id
// @access Public

router.get(
  "/category/:id",
  asyncHandler(async (req, res) => {
    // Find product by category in the database
    const products = await Product.find({
      category: new RegExp(req.params.id),
    });
    if (products) {
      res.json(products);
    } else {
      res.status(404);
      throw new Error("Products not found");
    }
  })
);

export default router;
