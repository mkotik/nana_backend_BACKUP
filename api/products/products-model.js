const db = require("../data/db-config");

const getAllCategories = async () => {
  const orders = await db("orders as o")
    .select("o.order_id", "op.*", "p.price")
    .join("orders_products as op", "op.order_id", "o.order_id")
    .join("products as p", "p.product_id", "op.product_id");
  const categories = await db("categories");
  const products = await db("products as p");
  const images = await db("images");

  products.forEach((prod) => {
    let sales = 0;
    let quantitySold = 0;
    prod.orders = orders.filter((order) => {
      return order.product_id === prod.product_id;
    });
    prod.orders.forEach((order) => {
      sales = sales + order.price * order.quantity;
      quantitySold = quantitySold + order.quantity;
    });
    prod.images = images.filter((img) => img.product_id === prod.product_id);
    prod.quantitySold = quantitySold;
    prod.sales = sales;
    delete prod.orders;
    prod.images.forEach((img) => {
      delete img.product_id;
    });
  });
  categories.forEach((category) => {
    category.products = products.filter(
      (prod) => prod.category === category.category_id
    );
  });
  return categories;
};

module.exports = { getAllCategories };
