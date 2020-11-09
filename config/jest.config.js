module.exports = {
  rootDir: "../",
  moduleDirectories: ["node_modules", "<rootDir>"],
  setupFilesAfterEnv: ["./config/jest.setup.js"],
  transform: {
    "^.+\\.[jt]sx?$": [
      "babel-jest",
      { configFile: "./config/babel.config.js" },
    ],
  },
};
