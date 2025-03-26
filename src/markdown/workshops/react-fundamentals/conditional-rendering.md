---
title: "Conditional Rendering"
slug: "conditional-rendering"
description: "Learn how to conditionally render elements in React."
number: 6
---

In your React components, you may need to display different components or elements based on conditions. This allows you to control what is rendered in the UI using JavaScript expressions like `if`, `ternary operators`, or other logical operations.

## Conditionally Returning a String

Go to our `Card` component. Let's add a ⭐️ emoji after the title in the `h2`. To be consise we will wrap the emoji in a `<span>` element.

```jsx
return (
  <div className="card" style={{ backgroundColor }}>
    <img src={card.src} />
    {/* This is a Fragment */}
    <spandiv>
      <h2>
        {capitalize(card.title)} <span>⭐️</span>
      </h2>

      <p>{card.description}</p>
    </>
  </div>
);
```

Let's say we only want to display the ⭐️ if we have passed a prop `favorited` and it's a boolean value of `true`. We will add the `favorited` value to where we use the `Card` in `App.js` and set it to true:

```jsx
<Section>
  <Card card={card} backgroundColor="rebeccapurple" favorited={true} />
</Section>
```

_Note:_ Notice how we have to use `{}` around the boolean value `true`. This is because it is a JavaScript boolean. If we used quotes around `true`, then it would be evaluated as a JavaScript string.

Inside the `Card` component we will now pass the `favorited` prop, and then us it in our markup. We will put `{}` inside the `span` element and use what is called a ternary operator. If `favorited` is true, we will return the ⭐️, if not we return an empty string by using `""`.

```jsx
function Card({ card, backgroundColor = "midnightblue", favorited }) {
  const capitalize = (string) => {
    return string.toUpperCase();
  };

  return (
    <div className="card" style={{ backgroundColor }}>
      <img src={card.src} />
      <>
        <h2>
          {capitalize(card.title)} <span>{favorited ? "⭐️" : ""}</span>
        </h2>

        <p>{card.description}</p>
      </>
    </div>
  );
}
```

_Note:_ A ternary operator in JavaScript conditional operator that returns one value if true and another value if false. Here's an example

```js
condition ? "This is true" : "This is false";
```

Sometimes you may see a logical AND operator (`&&`) used if you want to render an element or component only if the condition is true.

```jsx
// Card.jsx
<h2>
  {capitalize(card.title)} <span>{favorited && "⭐️"}</span>
</h2>
```

## Conditionally Returning JSX

There are times you may want to some JSX based on a condition. Let's create a new component called `TodoList`. Add the file `TodoList.jsx` to the `components` directory and add the following code:

```jsx
function TodoList() {
  return (
    <div>
      <h2>Todo List</h2>
      <ul></ul>
    </div>
  );
}

export default TodoList;
```

Inside `TodoList.jsx` we will also add a `TodoItem` component with a string prop `name` and a boolean prop `completed`.

```jsx
// TodoList.jsx
function TodoItem({ name, completed }) {
  return <li>{name}</li>;
}

function TodoList() {
  ...
}
```

Then we will add a few `TodoItem` components to the `TodoList`.

```jsx
function TodoList() {
  return (
    <div>
      <h2>Todo List</h2>
      <ul>
        <TodoItem name="Work out" completed={true} />
        <TodoItem name="Read Clean Code" completed={false} />
        <TodoItem name="Learn React" completed={true} />
      </ul>
    </div>
  );
}
```

And let's use the `TodoList` component in `App.jsx` and wrap it in a `Section` component.

```jsx
// App.jsx
return (
  <div>
    <h1>React Fundamentals</h1>
    <Section>
      <Card card={card} backgroundColor="rebeccapurple" favorited={true} />
    </Section>
    <Section>
      <TodoList />
    </Section>
  </div>
);
```

Let's show different JSX in the `TodoItem` based off the value of `completed`. In the `if` block we will return an `li` element with a `className="line-through"`, and in the `else` block we will return the same `li` element.

```jsx
function TodoItem({ name, completed }) {
  if (completed) {
    return <li className="line-through">{name}</li>;
  } else {
    return <li>{name}</li>;
  }
}
```

You now notice all the `TodoItem` components that are `completed` will return the JSX with the `line-through` CSS class applied.

## Conditionally Assigning JSX to a Variable
