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

What you pass to `useState` is the initial state of your variable. Here we passed `0`. `useState` gives you an array containing two values. First, the state variable. Here we named it `count`. Second, the state setter function. Here we named it `setCount`. The state setter function does two tasks. It updates the state variable and then triggers a render of the component in React.

_Note:_ Just as you are able to destruct objects in JavaScript, you are also able to destruct arrays like you see with `useState`. This allows you to unpack values from an array an assign them to variables in a concise way. Here is an example.

```js
const numbers = [10, 20, 30];

const [first, second] = numbers;

console.log(first); // 10
console.log(second); // 20
```

Now let's see how we can trigger a state update in our `Button` component. We will update our `Button` component like so:

```jsx
// Button.jsx
function Button({ message }) {
  const [count, setCount] = useState(0);

  function incrementCount() {
    setCount(count + 1);
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

Here we are calling `setCount` and passing it `count + 1`. This increments `count` by `1` every time we trigger the event handler.

## Multiple State Variables

Let's say we need another state variable in our `Button` component, we just need to define another `useState` hook. Here we will set a state variale as a boolean to `false`.

```jsx
// Button.jsx
function Button({ message }) {
  const [count, setCount] = useState(0);
  const [on, setOn] = useState(false);

  function incrementCount() {
    setCount(count + 1);
  }

  return (
    <button
      style={{ backgroundColor: on ? "green" : "red" }}
      onClick={() => {
        console.log(message);
        incrementCount();
        setOn(!on);
      }}
    >
      {count}
    </button>
  );
}
```

It is a good idea to have multiple state values if their state is unrelated. But in cases, like a form where you have many fields, it is best practice to use a single state variable that holds and object. But that is a deeper dive into state management.
