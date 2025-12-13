// jest.config.js
export default {
  testEnvironment: "jsdom",  // Enables browser-like environment
  transform: {
    "^.+\\.jsx?$": "babel-jest", // Transforms JS/JSX using Babel
  },
  moduleFileExtensions: ["js", "jsx"], // Recognize JS and JSX files
  setupFilesAfterEnv: ["@testing-library/jest-dom/extend-expect"], // Optional, adds extra matchers
};
