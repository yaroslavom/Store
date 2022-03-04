import express from 'express';
import dotenv from 'dotenv';
import data from "./data/data.js";

dotenv.config();

const app = express();

app.get("/", (req, res) => {
  res.send("API is running...");
});

app.get("/api/data/", (req, res) => {
  res.send(data.results);
});

app.get("/api/data/:id", (req, res) => {
  console.log(req.params.id);
  res.send([data.results[req.params.id]]);
  console.log(data.results[req.params.id]);
});

const PORT = process.env.PORT || 9090;

app.listen(
  PORT,
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
);
