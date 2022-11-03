#!/usr/bin/env node

// sample files can be found in test

const fs = require("fs");

const rootPath = "./src/app.css";
const tailwindConfigPath = "./tailwind.config.js";

let appcss = fs.readFileSync(rootPath, { encoding: "utf-8" });
let tailwind = fs.readFileSync(tailwindConfigPath, { encoding: "utf-8" });

let rootInd = appcss.indexOf(":root");
let rootEndInd = appcss.indexOf("}", rootInd) + 1;

let rootString = appcss.slice(rootInd, rootEndInd);

let colorArray = rootString.match(/([\w]+)(?=:)/g);
//matches variable name of the css
//example in "var-color:#ffffff" it will match "var-color"

console.log("Colors found:", colorArray);

const colorInd = tailwind.indexOf("colors");
const colorEndInd = tailwind.indexOf("}", colorInd) + 1;
let colorsObjStart = tailwind.indexOf("{", colorInd);

var newColorsObj = {};
colorArray.forEach((color) => (newColorsObj[color] = "var(--" + color + ")"));

let newTailWind =
  tailwind.slice(0, colorsObjStart) +
  JSON.stringify(newColorsObj, undefined, " ") +
  tailwind.slice(colorEndInd);

fs.writeFileSync("./tailwind.config.js", newTailWind);

// if error is trown code is blocked, will not reach here
console.log("Colors added sucessfully");