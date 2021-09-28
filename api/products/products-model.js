const db = require("../data/db-config");

const getAllProducts = async () => {
  const soaps = await db("soaps as s")
    .select("s.*", "i.img")
    .leftJoin("imgs as i", "i.soap_id", "s.soap_id");
  return {
    soaps,
    giftBoxes: [],
  };
};

module.exports = { getAllProducts };
