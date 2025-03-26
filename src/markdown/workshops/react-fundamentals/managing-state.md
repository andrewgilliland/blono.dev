---
title: "Managing State"
slug: "managing-state"
description: "Learn how to create state variables in React."
number: 10
---

In applications, we want to see changes in the UI made based off of our interactions. A user could be logged in, or a menu could be open, or a pop up could be visible. These things can all be part of what we call application state. React state is an object that holds dynamic data for a component, allowing it to re-render whenever the state changes.

## Why Not Use a Regular Variable?

You may ask yourself, why not just use a variable in your component to keep track of a value you want to see updated in. Let's update our `Button` component like so:

```jsx
function Button({ message }) {
  let count = 1;

  function incrementCount() {
    count = count + 1;
  }

  return (
    <button
      onClick={() => {
        console.log(message);
        incrementCount();
      }}
    >
      {count}
    </button>
  );
}
```

Why does this not work? First, local variables do not persist between renders. Second, nothing trigger a render. React needs some way to realize it has to rerender.

## Creating a State Variable with useState

## Multiple State Variables
