# tailwind-color-adder

### An automation script used to add all the colors variable from root css to tailwind for easy usage

<div align=center>
<a href="https://www.npmjs.com/package/tailwind-color-adder">
<img src="https://img.shields.io/npm/dt/tailwind-color-adder.svg">
<img src="https://img.shields.io/npm/v/tailwind-color-adder">
</a>
</div>
<hr>

## Use-case

- In react project, when you add or change the variable colors in your css files, tailwind does not process them as their own variables.
- You cannot use them as "bg-variableColor".
- You can use this script to automatically scan for css variables in your app.css and add all the colors in required format to tailwind.config.js file.


## Usage

Run npx script in root folder

```
npx tailwind-color-adder
```

_([npx](https://medium.com/@maybekatz/introducing-npx-an-npm-package-runner-55f7d4bd282b) comes with npm 5.2+ and higher)_

Alternatively,<br>
To globally install this package

```
npm i -g tailwind-color-adder
```

Then,<br>
Run this script after changing root colors in file and run this file from root of the directory, tailwind config will automatically change

```
tailwind-color-adder
```

## Files

_app.css_
```
:root{
  --varColor:#823761;
  --varUnaddedColor:#456780;
}
```

### Before

_tailwind.config.js_
```
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        varColor: "var(--varColor)",
      },
    },
  },
  plugins: [],
};
```

### After

_tailwind.config.js_
```
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
 "varColor": "var(--varColor)",
 "varUnaddedColor": "var(--varUnaddedColor)"
},
    },
  },
  plugins: [],
};
```

## Issues
Issues and suggestions are welcome.
https://github.com/tanishchugh01/tailwindColorAdder/issues
