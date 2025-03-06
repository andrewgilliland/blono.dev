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

To create a React component, follow these steps:

1. **Import React**: Start by importing React from the 'react' library.

   ```jsx
   import React from "react";
   ```

2. **Define the Function**: Define a JavaScript function with any name you chose, here we are naming the component _ReactCard_.

   ```jsx
   const ReactCard = () => {};
   ```

3. **Add the Markup**: Create a function that returns JSX. This function is your component

```jsx
return (
  <div>
    <h1>Woah, React!</h1>
    <p>Check me out, I am a React component.</p>
  </div>
);
```

3. **Export the Component**: Export the component so it can be used in other parts of your application.

   ```jsx
   export default ReactCard;
   ```

4. **Use the Component**: Import and use your component in another file.

   ```jsx
   import ReactCard from "./ReactCard";

   const App = () => {
     return (
       <div>
         <ReactCard />
       </div>
     );
   };

   export default App;
   ```

By following these steps, you can create and use a React component in your application.

<div style={{display: "flex", justifyContent: "flex-end"}}>
[Next Lesson](/workshops/react-fundamentals/importing-and-exporting-components)
</div>
