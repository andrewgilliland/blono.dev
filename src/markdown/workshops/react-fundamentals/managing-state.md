---
title: "Managing State"
slug: "managing-state"
description: "Learn how to create state variables in React."
number: 10
---

In applications, we want to see changes in the UI made based off of our interactions. A user could be logged in, or a menu could be open, or a pop up could be visible. These things can all be part of what we call application state. React state is an object that holds dynamic data for a component, allowing it to re-render whenever the state changes.

## Why Not Use a Variable?

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

So we need a state variable to persist between renders, and a way to trigger a render in React. Let's update `Button.jsx` by importing `useState` at the top.

```jsx
// Button.jsx
import { useState } from "react";
```

`useState` is called a React Hook. What is a Hook? A special function that allows you to hook into React and use different features. And Hooks always start with `use`. `useState` allows you to hook into React state.

To use this hook we will add `const [count, setCount] = useState(0);` to the `Button` component.

```jsx
function Button({ message }) {
  const [count, setCount] = useState(0);
  ...
}
```

What you pass to `useState` is the initial state of your variable. Here we passed `0`.

## Multiple State Variables
