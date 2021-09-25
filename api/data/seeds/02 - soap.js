const soaps = [
  {
    name: "Sweet Orange Hibiscus",
    ingredients:
      "Saponified 100% Extra Virgin Olive Oil, Virgin Coconut Oil, Castor Oil, Avocado Oil, Shea Butter, Rose Kaolin Clay, Ground Annatto, Turmeric,  Hibiscus Tea and an Essential Oil Blend of Sweet Orange, Lemongrass, Rosemary and Cedarwood. ",
    price: 8.0,
    featured: true,
    smells_like: "Oranges",
    exfoliation: "None",
    inventory: 30,
    body_bar: true,
    face_bar: false,
    for_babies: false,
  },
  {
    name: "Lavender",
    ingredients:
      "Saponified 100% Extra Virgin Olive Oil, Virgin Coconut Oil, Castor Oil, Avocado Oil, Shea Butter, Kaolin Clay, Alkanet Root, Fresh Lavender Buds & an Essential Oil Blend of Lavender, Peru Balsam, Bergamot, Clary Sage and Cedarwood. ",
    price: 8.0,
    featured: true,
    smells_like: "Lavender",
    exfoliation: "Light",
    inventory: 25,
    body_bar: false,
    face_bar: true,
    for_babies: true,
  },
  {
    name: "Honeycomb",
    ingredients:
      "Saponified 100% Extra Virgin Olive Oil, Virgin Coconut Oil, Castor Oil, Avocado Oil, Shea Butter, Kaolin Clay, Oatmeal, Turmeric & Raw Honey. ",
    price: 9.0,
    featured: true,
    smells_like: "Honey",
    exfoliation: "None",
    inventory: 22,
    body_bar: true,
    face_bar: true,
    for_babies: false,
  },
  {
    name: "Pink Himalayan Salt",
    ingredients:
      "Saponified 100% Extra Virgin Olive Oil, Virgin Coconut Oil, Castor Oil, Avocado Oil, Shea Butter, Kaolin Clay, Pink Himalayan Salt and an Essential Oil Blend of Eucalyptus, Rosemary, Lemongrass, Spearmint and Cedarwood.",
    price: 9.0,
    featured: true,
    smells_like: "Cedarwood",
    exfoliation: "Medium",
    inventory: 25,
    body_bar: true,
    face_bar: false,
    for_babies: false,
  },
  {
    name: "Mint & Thyme",
    ingredients:
      "Saponified 100% Extra Virgin Olive Oil, Virgin Coconut Oil, Castor Oil, Avocado Oil, Shea Butter, Kaolin Clay, Fresh Thyme, Dried Peppermint Leaves & an Essential Oil Blend of Peppermint, Spearmint, Thyme, Lavender and Cedarwood. ",
    price: 9.0,
    featured: false,
    smells_like: "Cedarwood",
    exfoliation: "None",
    inventory: 17,
    body_bar: false,
    face_bar: true,
    for_babies: false,
  },
  {
    name: "Spearmint Loofah",
    ingredients:
      "Saponified 100% Extra Virgin Olive Oil, Virgin Coconut Oil, Castor Oil, Avocado Oil, Shea Butter, Kaolin Clay, Chlorella, Chlorophyl,  Loofah Sponge & an Essential Oil Blend of Spearmint, Peppermint, Eucalyptus and Cedarwood. ",
    price: 10.0,
    featured: true,
    smells_like: "Peppermint",
    exfoliation: "High",
    inventory: 22,
    body_bar: true,
    face_bar: true,
    for_babies: true,
  },
];

exports.soaps = soaps;

exports.seed = function (knex) {
  return knex("soaps").insert(soaps);
};
