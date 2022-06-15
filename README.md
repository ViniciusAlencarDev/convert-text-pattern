# Convert Text Pattern

Convert texts to the desired pattern in a simple way

## Snake Case

```javascript
const { convertToSnakeCase } = require('convert-text-pattern')

const convertedText1 = convertToSnakeCase("Hello_World")
const convertedText2 = convertToSnakeCase("HelloWorld")
const convertedText3 = convertToSnakeCase("Hello-World")
const convertedText4 = convertToSnakeCase("Hello World")

console.log(convertedText1) // result -> hello_world
console.log(convertedText2) // result -> hello_world
console.log(convertedText3) // result -> hello_world
console.log(convertedText4) // result -> hello_world
```
---
## Camel Case

```javascript
const { convertToCamelCase } = require('convert-text-pattern')

const convertedText1 = convertToCamelCase("Hello_World")
const convertedText2 = convertToCamelCase("HelloWorld")
const convertedText3 = convertToCamelCase("Hello-World")
const convertedText4 = convertToCamelCase("Hello World")

console.log(convertedText1) // result -> helloWorld
console.log(convertedText2) // result -> helloWorld
console.log(convertedText3) // result -> helloWorld
console.log(convertedText4) // result -> helloWorld
```
---
## Kebab Case

```javascript
const { convertToKebabCase } = require('convert-text-pattern')

const convertedText1 = convertToKebabCase("Hello_World")
const convertedText2 = convertToKebabCase("HelloWorld")
const convertedText3 = convertToKebabCase("Hello-World")
const convertedText4 = convertToKebabCase("Hello World")

console.log(convertedText1) // result -> hello-world
console.log(convertedText2) // result -> hello-world
console.log(convertedText3) // result -> hello-world
console.log(convertedText4) // result -> hello-world
```

## Let's code 🚀
