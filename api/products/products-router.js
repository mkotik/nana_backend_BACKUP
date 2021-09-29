const express = require("express");
const Products = require("./products-model");
const router = express.Router();

router.get("/", async (req, res, next) => {
  try {
    const categories = await Products.getAllCategories();
    res.status(200).json(categories);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
