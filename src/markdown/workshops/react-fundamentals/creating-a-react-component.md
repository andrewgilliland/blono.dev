---
title: "Creating a React Component"
slug: "creating-a-react-component"
description: "Learn how to create a React component."
number: 1
---

## What is a Component?

Components are the building blocks of every user interface. In React, they are reusable pieces of code that represent just a part of your overall user interface. On the web, we build the structure of these components with HTML elements. This allows you to split up a user interface into independent, reusable, and isolated pieces.

Like HTML elements, React components allow you to compose, order and nest components to build out complex designed user interfaces. As your React projects get larger, you can reuse components to help build out more complex components. This speeds up development, creates more consistently designed applications, and makes your code easier to test.

## Creating a Component

First, go to the `src` directory and open up the `App.jsx` file. Inside you should see:

```jsx
function App() {
  return (
    <div>
      <h1>React Fundamentals</h1>
    </div>
  );
}

export default App;
```

To create a React component, follow these steps:

1. **Import React**: Start by importing React from the 'react' library. _Note:_ Starting in React 17, the JSX Transform feature eliminated the need to explicitly import React in files that use JSX.

   ```jsx
   import React from "react";
   ```

2. **Define the Function**: Define a JavaScript function with any name you chose, here we are naming the component _Card_.

   ```jsx
   function Card() {}
   ```

3. **Add the Markup**: Create a function that returns JSX. This function is your component

   ```jsx
   function Card() {
     return (
       <div>
         <img src="https://picsum.photos/200" />
         <h2>Lorem, Ipsum.</h2>
         <p>
           Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet,
           necessitatibus veniam facilis optio rerum consequatur iure omnis
           velit. Optio, nobis!
         </p>
       </div>
     );
   }
   ```

4. **Use the Component**: Import and use your component in another file.

   ```jsx
   function App() {
     return (
       <div>
         <h1>React Fundamentals</h1>
         <Card />
       </div>
     );
   }

   export default App;
   ```

You've just created and used your first React component!

_Note:_ In JavaScript you can write functions in two ways, so you might see React components declared either way:

1. **Function Declarations**: They are defined using the `function` keyword. They are hoisted, meaning they can be called before their definition in the code.

```jsx
function Card {} { ... }
```

2. **Function Expressions**: They are functions assigned to variables, including arrow functions. They are not hoisted and can only be called after their definition.

```jsx
const Card = () => { ... }
```
