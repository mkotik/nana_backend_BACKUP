const db = require("../data/db-config");

const categoryNameToId = async (req, res, next) => {
  const { category } = req.body;
  try {
    const currentCategory = await db("categories")
      .where("category_name", category)
      .first();
    req.category = currentCategory.category_id;
    next();
  } catch (err) {
    next({ status: 404, message: "Category not found" });
  }
};

module.exports = { categoryNameToId };
