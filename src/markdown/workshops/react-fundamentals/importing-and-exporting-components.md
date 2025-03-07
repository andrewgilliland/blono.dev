---
title: "Importing and Exporting Components"
slug: "importing-and-exporting-components"
description: "Learn how to import and export components in React."
number: 2
---

In React, components can be imported and exported to be reused across different parts of your application. This helps in maintaining a modular code structure.

### Exporting a Component

To export a component, you can use either named exports or default exports.

#### Named Export

```jsx
// MyComponent.js
export const MyComponent = () => {
  return <div>Hello, World!</div>;
};
```

#### Default Export

```jsx
// MyComponent.js
const MyComponent = () => {
  return <div>Hello, World!</div>;
};

export default MyComponent;
```

### Importing a Component

To import a component, you use the `import` statement.

#### Importing a Named Export

```jsx
// App.js
import { MyComponent } from "./MyComponent";

const App = () => {
  return (
    <div>
      <MyComponent />
    </div>
  );
};

export default App;
```

#### Importing a Default Export

```jsx
// App.js
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

By using named and default exports, you can organize and reuse your components efficiently in a React application.
