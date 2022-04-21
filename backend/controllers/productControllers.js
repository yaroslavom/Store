import asyncHandler from "express-async-handler";
import Product from "../models/productModel.js";

// @desc   Fetch all prod
// @route   GET /api/products
// @desc   Public
const getProducts = asyncHandler(async (req, res) => {
    const products = await Product.find({});
    res.json(products);
});

// @desc   Fetch single prod
// @route   GET /api/products/:id
// @desc   Public
const getProductsById = asyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id);

    if (product) {
        res.json(product);
    } else {
        res.status(404);
        throw new Error("Product not found");
    }
});

export { getProducts, getProductsById };
