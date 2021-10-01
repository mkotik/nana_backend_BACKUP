const express = require("express");
const Products = require("./products-model");
const { categoryNameToId } = require("./products-middleware");
const router = express.Router();

router.get("/categories", async (req, res, next) => {
  try {
    const categories = await Products.getAllCategories();
    res.status(200).json(categories);
  } catch (err) {
    next(err);
  }
});

router.post("/", categoryNameToId, async (req, res, next) => {
  const newProd = { ...req.body, category: req.category };
  try {
    const response = await Products.addNewProduct(newProd);
    res.status(201).json(response);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
