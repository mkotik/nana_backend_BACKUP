const orders_products = [
  { order_id: 1, product_id: 1, quantity: 1 },
  { order_id: 1, product_id: 3, quantity: 2 },
  { order_id: 2, product_id: 1, quantity: 5 },
  { order_id: 2, product_id: 2, quantity: 1 },
  { order_id: 2, product_id: 6, quantity: 2 },
];

exports.orders_products = orders_products;

exports.seed = function (knex) {
  return knex("orders_products").insert(orders_products);
};
