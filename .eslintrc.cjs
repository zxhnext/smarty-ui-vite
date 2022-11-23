/*
 * @Description: 
 * @Author: zhaoxiaohan03@kuaishou.com
 * @Date: 2022-11-23 21:35:58
 * @LastEditors: zhaoxiaohan03@kuaishou.com
 * @LastEditTime: 2022-11-23 21:37:12
 */
module.exports = {
  root: true,
  env: {
    browser: true,
    es2020: true,
    node: true,
    jest: true,
  },
  globals: {
    ga: true,
    chrome: true,
    __DEV__: true,
  },
  // 解析 .vue 文件
  parser: "vue-eslint-parser",
  extends: [
    "plugin:json/recommended",
    "plugin:vue/vue3-essential",
    "eslint:recommended",
    "@vue/prettier",
  ],
  plugins: ["@typescript-eslint"],
  parserOptions: {
    parser: "@typescript-eslint/parser", // 解析 .ts 文件
  },
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
    "prettier/prettier": "error",
  },
};
