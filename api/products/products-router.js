const express = require("express");
const Products = require("./products-model");
const router = express.Router();

router.get("/categories", async (req, res, next) => {
  try {
    const categories = await Products.getAllCategories();
    res.status(200).json(categories);
  } catch (err) {
    next(err);
  }
});

router.post("/", async (req, res, next) => {
  try {
    const response = await Products.addNewProduct(req.body);
    res.status(201).json(response);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
