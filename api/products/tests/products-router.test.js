const request = require("supertest");
const server = require("../../server");
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

describe("productsRouter", () => {
  describe("[GET] /api/products/categories", () => {
    test("returns a list of categories", async () => {
      const response = await request(server).get("/api/products/categories");
      expect(response.body).toHaveLength(4);
      expect(response.body[0]).toHaveProperty("category_name");
      expect(response.body[3]).toHaveProperty("products");
    });
    test("returns a status 200", async () => {
      const response = await request(server).get("/api/products/categories");
      expect(response.status).toBe(200);
    });
  });

  describe("[POST] /api/products", () => {
    test("adds a new product", async () => {
      const newProd = {
        name: "testName",
        description: "testDescription",
        price: 9.99,
        featured: false,
        smells_like: "testSmell",
        exfoliation: "Light",
        inventory: 100,
        category: "Body Bars",
      };
      await request(server).post("/api/products").send(newProd);
      expect(await db("products")).toHaveLength(7);
    });
    test("returns a status 201", async () => {
      const newProd = {
        name: "testName",
        description: "testDescription",
        price: 9.99,
        featured: false,
        smells_like: "testSmell",
        exfoliation: "Light",
        inventory: 100,
        category: "Gift Boxes",
      };
      const response = await request(server)
        .post("/api/products")
        .send(newProd);
      expect(response.status).toBe(201);
    });
    test("returns a 404 on invalid category", async () => {
      const newProd = {
        name: "testName",
        description: "testDescription",
        price: 9.99,
        featured: false,
        smells_like: "testSmell",
        exfoliation: "Light",
        inventory: 100,
        category: "Gift Packs",
      };
      const response = await request(server)
        .post("/api/products")
        .send(newProd);
      expect(response.status).toBe(404);
    });
  });
});
