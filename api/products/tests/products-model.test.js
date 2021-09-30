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

describe("products-model", () => {
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
    test("product 1 has the correct sales amt", async () => {
      const categories = await Products.getAllCategories();
      expect(categories[0].products[0].sales).toBe(45);
    });
  });

  describe("addNewProduct", () => {
    test("adds a new product", async () => {
      const newProd = {
        name: "testName",
        description: "testDescription",
        price: 9.99,
        featured: false,
        smells_like: "testSmell",
        exfoliation: "Light",
        inventory: 100,
        category: 4,
      };
      await Products.addNewProduct(newProd);
      expect(await db("products")).toHaveLength(7);
    });
    test("returns all 4 categories with new products", async () => {
      const newProd = {
        name: "testName",
        description: "testDescription",
        price: 9.99,
        featured: false,
        smells_like: "testSmell",
        exfoliation: "Light",
        inventory: 100,
        category: 4,
      };
      const response = await Products.addNewProduct(newProd);
      expect(response).toHaveLength(4);
      expect(response[3].products).toHaveLength(1);
    });
    test("adds new product without smells_like, exfoliation, featured", async () => {
      const newProd = {
        name: "testName",
        description: "testDescription",
        price: 9.99,
        inventory: 100,
        category: 4,
      };
      await Products.addNewProduct(newProd);
      const products = await db("products");
      const newlyMadeProd = products[6];
      expect(products).toHaveLength(7);
      expect(newlyMadeProd.featured).toBe(false);
      expect(newlyMadeProd.smells_like).toBe(null);
      expect(newlyMadeProd.exfoliation).toBe(null);
    });
  });
});
