module.exports = {
  rootDir: "../",
  moduleDirectories: ["node_modules", "<rootDir>"],
  transform: {
    "^.+\\.[jt]sx?$": [
      "babel-jest",
      { configFile: "./config/babel.config.js" },
    ],
  },
};
