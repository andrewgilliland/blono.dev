---
title: "Creating a React Component"
slug: "creating-a-react-component"
description: "Learn how to create a React component."
number: 1
---

## How to Create a React Component

To create a React component, follow these steps:

1. **Import React**: Start by importing React from the 'react' library.

   ```jsx
   import React from "react";
   ```

2. **Define the Component**: Create a function that returns JSX. This function is your component.

   ```jsx
   const MyComponent = () => {
     return (
       <div>
         <h1>Hello, World!</h1>
       </div>
     );
   };
   ```

3. **Export the Component**: Export the component so it can be used in other parts of your application.

   ```jsx
   export default MyComponent;
   ```

4. **Use the Component**: Import and use your component in another file.

   ```jsx
   import MyComponent from "./MyComponent";

   const App = () => {
     return (
       <div>
         <MyComponent />
       </div>
     );
   };

   export default App;
   ```

By following these steps, you can create and use a React component in your application.
