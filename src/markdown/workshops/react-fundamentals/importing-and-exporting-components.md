---
title: "Importing and Exporting Components"
slug: "importing-and-exporting-components"
description: "Learn how to import and export components in React."
number: 2
---

In React, components are generally kept in their own files to promote better organization, readibility, and maintainability of your codebase. This allows you to separate concerns, and make it easier to locate, test, and resuse components. Since they are in different files, components need to be imported and exported to be reused across different parts of your application.

## Create a new JSX file

Go into your `src` directory and add a directory named, you guessed it, `components`. And then inside the directory create a file called `Card.jsx`. Add the following to the file:

```jsx
function Card() {
  return (
    <div>
      <img src="https://picsum.photos/200" />
      <h2>Lorem, Ipsum.</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet,
        necessitatibus veniam facilis optio rerum consequatur iure omnis velit.
        Optio, nobis!
      </p>
    </div>
  );
}
```

_Note:_ You may see some JSX files with the `.js` extension. This is because JSX is a syntax extension of JavaScript, and tools like Babel or TypeScript can transpile JSX into standard JavaScript. Using `.jsx` helps provide clarity of what is contained in the file.

## Exporting a Component

In JavaScript to export a function, you can use either named exports or default exports using the `export` keyword. So you may see React components exported either way.

####Named Export

Add the `export` keyword in front of `function`:

```jsx
export function Card() { ... }
```

### Importing a Named Export

```jsx
// App.jsx
import { Card } from "./components/Card";

const App = () => {
  return (
    <div>
      <h1>React Fundamentals</h1>
      <Card />
    </div>
  );
};

export default App;
```

### Default Export

```jsx
export function Card() { ... }

export default Card;
```

### Importing a Default Export

```jsx
// App.jsx
import Card from "./components/Card";

const App = () => {
  return (
    <div>
      <h1>React Fundamentals</h1>
      <Card />
    </div>
  );
};

export default App;
```

By using named and default exports, you can organize and reuse your components efficiently in a React application.

## What's the Difference? 🤷‍♀️

### Named Exports

1. You can export multiple values from a file using named exports.
2. You must use the exact names of the exported values when importing.

```js
// Export
export const greet = () => console.log("Hello!");
export const farewell = () => console.log("Goodbye!");

// Import
import { greet, farewell } from "./file";
```

### Default Exports

1. A file can only have one default export.
2. You can use any name to refer to the the default export.

```js
// Export
export default function greet() {
  console.log("Hello!");
}

// Import
import greetFunction from "./file";
greetFunction();
```
