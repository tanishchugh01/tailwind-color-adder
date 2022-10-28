# tailwind-color-adder

## An automation script used to add all the colors variable from root css to tailwind for easy usage

<hr>

### Usage

- When you add or change the variable colors in your css files, tailwind does not process them as their own variables.
- You cannot use them as "bg-variableColor".
- You can use this script to automatically scan for css variables in your app.css and add all the colors in required format to tailwind.config.js file.

<hr>

Run npx script in root folder

```
npx tailwind-color-adder
```
_([npx](https://medium.com/@maybekatz/introducing-npx-an-npm-package-runner-55f7d4bd282b) comes with npm 5.2+ and higher)_

<hr>
To globally install this package

```
npm i -g tailwind-color-adder
```

Then,

Run this script after changing root colors in file and run this file from root of the directory, tailwind config will automatically change

```
tailwind-color-adder
```

<hr>

Issues and suggestions are welcome.
https://github.com/tanishchugh01/tailwindColorAdder/issues
