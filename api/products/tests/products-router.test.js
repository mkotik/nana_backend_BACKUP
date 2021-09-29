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

describe("[GET] /api/products", () => {
  test("returns a list of categories", async () => {
    const response = await request(server).get("/api/products");
    expect(response.body).toHaveLength(4);
    expect(response.body[0]).toHaveProperty("category_name");
    expect(response.body[3]).toHaveProperty("products");
  });
  test("returns a status 200", async () => {
    const response = await request(server).get("/api/products");
    expect(response.status).toBe(200);
  });
});
