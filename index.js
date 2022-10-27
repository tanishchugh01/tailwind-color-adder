#!/usr/bin/env node

const fs = require("fs");

const rootPath = "./src/app.css";
const tailwindConfigPath = "./tailwind.config.js";

let appcss = fs.readFileSync(rootPath, { encoding: "utf-8" });
let tailwind = fs.readFileSync(tailwindConfigPath, { encoding: "utf-8" });

let rootInd = appcss.indexOf(":root");
let rootEndInd = appcss.indexOf("}", rootInd) + 1;

let rootString = appcss.slice(rootInd, rootEndInd);

let colorArray = rootString.match(/([\w]+)(?=:)/g);

const colorInd = tailwind.indexOf("colors");
const colorEndInd = tailwind.indexOf("}", colorInd) + 1;
let colorsObjStart = tailwind.indexOf("{", colorInd);

// console.log(colors);
var newColorsObj = {};
colorArray.forEach((color) => (newColorsObj[color] = "var(--" + color + ")"));

let newTailWind =
  tailwind.slice(0, colorsObjStart) +
  JSON.stringify(newColorsObj, undefined, " ") +
  tailwind.slice(colorEndInd);

// console.log(newTailWind);

fs.writeFileSync("./tailwind.config.js", newTailWind);
