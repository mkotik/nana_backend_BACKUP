const db = require("../data/db-config");

const getAllProducts = async () => {
  const soaps = await db("soaps");
  return {
    soaps,
    giftBoxes: [],
  };
};

module.exports = { getAllProducts };
