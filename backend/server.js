import express from "express";
import dotenv from "dotenv";
import colors from "colors";
import connectDB from "./config/db.js";
import products from "./data/products.js";

dotenv.config();

connectDB();

const app = express();

app.get("/", (req, res) => {
  res.send("API is running...");
});

app.get("/api/data/", (req, res) => {
  res.send(products);
});

app.get("/api/data/:id", (req, res) => {
  console.log(req.params.id);
  res.send([products[req.params.id]]);
  console.log(products[req.params.id]);
});

const PORT = process.env.PORT || 9090;

app.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold
  )
);
