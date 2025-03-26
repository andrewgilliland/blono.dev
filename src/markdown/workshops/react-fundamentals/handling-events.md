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

Now in `Button.jsx` lets add a function called `handleClick` that calls `console.log("Woah!")`. Then add `onClick={handleClick}` to the `button` element.

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

Now click on the button, you should see your message in the console of the developer tools.

_Note:_ The JavaScript function `console.log()` is used to print messages in the browser or terminal's console. It helps you inspect variables, outputs, and program flow during development.

## Inlining Event Handlers

## Passing Props to Event Handlers

## Pass Functions, Don't Call Functions
