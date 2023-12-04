const config = {
  roots: ["<rootDir>/src", "<rootDir>/test"],
  verbose: true,
  setupFilesAfterEnv: [],
  testEnvironment: "node",
  setupFiles: [],
  moduleFileExtensions: ["js", "jsx", "ts", "tsx"],
  preset: "ts-jest",
  transform: {
    "^.+\\.(ts|tsx)$": [
      "ts-jest",
      {
        babel: true,
        tsconfig: "tsconfig.json",
      },
    ],
  },
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1",
  },
  testMatch: ["<rootDir>/test/**/*.test.ts"],
};

module.exports = config;
