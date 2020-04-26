const dev =
  process.env.NODE_ENV == null ||
  ["development", "test"].includes(process.env.NODE_ENV);

module.exports = { dev };
