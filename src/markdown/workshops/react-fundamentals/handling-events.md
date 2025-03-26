---
title: "Handling Events"
slug: "handling-events"
description: "Handling events in applications is pretty useful. So let's learn about it."
number: 9
---

At some point you are probably going to have want a way to have a respond to user input. You will use event handlers in your JSX to do so. These can be in response to interactions such as a click, hover, focus on a form input, and more.

## Adding Event Handlers

We are going to add a new component, so in the `components` directory create a file called `Button.jsx` and add the following code:

```jsx
// Button.jsx
function Button() {
  return <button>Click me!</button>;
}

export default Button;
```

Then let's add a `Button` component in `App.jsx`:

```jsx
import Button from "./components/Button";
import Card from "./components/Card";
import Section from "./components/Section";
import TodoList from "./components/TodoList";
import { cards } from "./variables";

function App() {
  return (
    <div>
      <h1>React Fundamentals</h1>
      <Section>
        <Button />
      </Section>
      ...
    </div>
  );
}
```

Now in `Button.jsx` lets add a function called `handleClick` that calls `console.log("Woah!")`. Then add `onClick={handleClick}` to the `button` element. A convention to follow when creating event handlers is to start with `handle` and follow with the name of the event. And event handlers are generally defined inside the components you use them in\*.

```jsx
// Button.jsx
function Button() {
  function handleClick() {
    console.log("Woah!");
  }

  return <button onClick={handleClick}>Click me!</button>;
}

export default Button;
```

Now click on the button, you should see your message in the console of the developer tools. Other event props that exist to pass event handlers include `onHover`, `onSubmit`, `onMouseEnter`, and more.

_Note:_ The JavaScript function `console.log()` is used to print messages in the browser or terminal's console. It helps you inspect variables, outputs, and program flow during development.

## Inlining Event Handlers

Since this event handler is only used once, we can inline it with the `onClick` prop. Update your `Button.jsx` to the following:

```jsx
function Button({ message }) {
  return (
    <button
      onClick={function handleClick() {
        console.log("Woah!");
      }}
    >
      Click me!
    </button>
  );
}
```

We can refactor this to use the same handler, but be more consise:

```jsx
function Button({ message }) {
  return (
    <button
      onClick={() => {
        console.log("Woah!");
      }}
    >
      Click me!
    </button>
  );
}
```

_Note:_ When you use the syntax for a JavaScript function that looks like this:

```js
 () => {...}
```

It is called an anonymous arrow function. You might have noticed that syntax in our array methods.

## Passing Props to Event Handlers

Since you declared your event handler inside you `Button` component, you have access to props. So lets add a `message` prop and use it within our event handler.

```jsx
// App.jsx
function App() {
  return (
    <div>
      <h1>React Fundamentals</h1>
      <Section>
        <Button message="You really did click me!" />
      </Section>
      ...
    </div>
  );
}
```

```jsx
// Button.jsx
function Button({ message }) {
  return (
    <button
      onClick={() => {
        console.log(message);
      }}
    >
      Click me!
    </button>
  );
}
```

## Pass Functions, Don't Call Functions

Take note when you are passing functions to event handlers, the functions must be passed and not called. What's the difference? Let's call the function in the `onClick` prop in `Button` by following `handleClick` with `()`.

```jsx
function Button() {
  function handleClick() {
    console.log("Woah!");
  }

  return <button onClick={handleClick()}>Click me!</button>;
}
```

If you look in the console, you will see that the function was called immediately. This is because JavaScript inside `{}` will execute right away. If the `handleClick` function is pass as an `onClick` event handler, React will remember it and only call it when a click happens. So with event handlers remember:

```jsx
// Do this - pass the function
<button onClick={handleClick}>Click me!</button>

// Not this - call the function
<button onClick={handleClick()}>Click me!</button>
```

_Note:_ React logs twice in development mode due to React Strict Mode, which helps identify side effects by intentionally invoking certain methods and effects twice.
