const express = require("express");
const Products = require("./products-model");
const s3 = require("./s3");
const {
  categoryNameToId,
  checkPriceInventoryType,
  checkProdIdExists,
} = require("./products-middleware");
const router = express.Router();

router.get("/categories", async (req, res, next) => {
  try {
    const categories = await Products.getAllCategories();
    res.status(200).json(categories);
  } catch (err) {
    next(err);
  }
});

router.post(
  "/",
  categoryNameToId,
  checkPriceInventoryType,
  async (req, res, next) => {
    const newProd = { ...req.body, category: req.category };
    try {
      const response = await Products.addNewProduct(newProd);
      res.status(201).json(response);
    } catch (err) {
      next(err);
    }
  }
);

router.delete("/:id", checkProdIdExists, async (req, res, next) => {
  const { id } = req.params;
  try {
    const response = await Products.removeProduct(id);
    res.status(200).json(response);
  } catch (err) {
    next(err);
  }
});

router.get("/s3Url", (req, res) => {
  const url = s3.generateUploadURL();
  res.status(200).json({ link: url });
});

module.exports = router;
