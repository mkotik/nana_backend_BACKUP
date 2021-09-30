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
  const newProd = req.body;
  const img = req.body.image;
  delete newProd.image;
  try {
    const response = await Products.addNewProduct(newProd);
    if (img) {
      await Products.addNewImage(img);
    }
    res.status(201).json(response);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
