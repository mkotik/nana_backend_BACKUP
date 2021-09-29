const Products = require("../products-model");
const db = require("../../data/db-config");

beforeAll(async () => {
  await db.migrate.rollback();
  await db.migrate.latest();
});
beforeEach(async () => {
  await db.seed.run();
});
afterAll(async () => {
  await db.destroy();
});

it("sanity check", () => {
  expect(true).not.toBe(false);
});

describe("getAllProducts", () => {
  test("returns 4 categories", async () => {
    const categories = await Products.getAllCategories();
    expect(categories).toHaveLength(4);
  });
  test("each category has the product property", async () => {
    const categories = await Products.getAllCategories();
    expect(categories[0]).toHaveProperty("products");
  });
  test("each product has the right properties", async () => {
    const categories = await Products.getAllCategories();
    expect(categories[0].products[0]).toHaveProperty("images");
    expect(categories[0].products[0]).toHaveProperty("quantitySold");
    expect(categories[0].products[0]).toHaveProperty("sales");
    expect(categories[0].products[0].quantitySold).toBeTruthy();
    expect(categories[0].products[0].sales).toBeTruthy();
  });
});
