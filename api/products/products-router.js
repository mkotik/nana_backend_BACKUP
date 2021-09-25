const express = require("express");
const Products = require("./products-model");
const router = express.Router();

router.get("/", async (req, res, next) => {
  try {
    const products = await Products.getAllProducts();
    res.status(200).json(products);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
