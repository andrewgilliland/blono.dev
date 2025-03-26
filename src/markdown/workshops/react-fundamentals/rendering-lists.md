---
title: "Rendering Lists"
slug: "rendering-lists"
description: "Rendering list basics in React."
number: 7
---

In React, There will often be times where you need to render the same component again but with different data. To do this you will have you data in the format of an array. JavaScript array methods will help you manipulate these arrays. For more info on JavaScript array methods check [this](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array) out.

## Rendering Data in Arrays

In `App.jsx` we have one `Card` component, but say we have two more `Card` components. So three total.

```jsx
// App.jsx
<Section>
  <Card card={card} backgroundColor="rebeccapurple" favorited={true} />
  <Card card={card} backgroundColor="midnightblue" favorited={false} />
  <Card card={card} backgroundColor="deeppink" favorited={true} />
</Section>
```

That's not too bad, but let's say we have more `Card` components we need to render that all have different data. Then this might get problematic. So let's put this data into an array. Luckily there is already an array called `cards` in the `variables.js` file that is being exported. Import `cards` into `App.jsx`.

```jsx
// App.jsx
import { cards } from "./variables";
```

Then delete the `Card` components in the `Section` component. Here we are going to use a `map` array method on the `cards` array. In between the `Section` tags add the following:

```jsx
// App.jsx
<Section>
  {cards.map((card) => {
    return (
      <Card card={card} backgroundColor="rebeccapurple" favorited={true} />
    );
  })}
</Section>
```

_Note:_ The JavaScript array `map` method creates a new array by applying logic that iterates over each element of the array. Here's an example:

```js
const numbers = [1, 2, 3, 4, 5];

const doubled = numbers.map((number) => {
  return number * 2;
});

console.log(numbers); // [1, 2, 3, 4, 5]
console.log(doubled); // [2, 4, 6, 8, 10]
```

You may have noticed that the `cards` array data is not fully being rendered as expected. We will need to update the `Card` component props to reflect this.

```jsx
// App.jsx
<Section>
  {cards.map((card) => {
    return <Card card={card} />;
  })}
</Section>
```

```jsx
// Card.jsx
function Card({ card }) {
  const capitalize = (string) => {
    return string.toUpperCase();
  };

  return (
    <div className="card" style={{ backgroundColor: card.backgroundColor }}>
      <img src={card.src} />
      <>
        <h2>
          {capitalize(card.title)} <span>{card.favorited && "⭐️"}</span>
        </h2>
        <p>{card.description}</p>
      </>
    </div>
  );
}
```

Now we should see the `cards` array data being rendered as expected.

## Rendering Filtered Arrays

Let's say you have a list of data you want to filter through condition. You need to get data that has a certain boolean value, role, or product type. We can filter through array data with the JavaScript array `filter` method. Let's try an example in the `TodoList` component. In `TodoList.jsx`, import `todos` from `variables.js`.

```jsx
// TodoList.jsx
import { todos } from "../variables";
```

Then before we return the markup in `TodoList`, we will create a `incompleteTodos` array using the `filter` array method.

```jsx
// TodoList.jsx
function TodoList() {
    const incompleteTodos = todos.filter((todo) => {
        return !todo.completed;
    });

    return ( ... );
}
```

_Note:_ The JavaScript `filter()` array method creates a new array containing only the elements of the original array that satisfy a given condition. So only elements that return the boolean value `true` will be contained in the new array. Here's an example:

```js
const numbers = [1, 2, 3, 4, 5];

// Use filter to create a new array with only even numbers
const evens = numbers.filter((number) => {
  return number % 2 === 0;
});

console.log(evens); // [2, 4]
```

_Note:_ Here we are also using the `!` operator, also known as the logical NOT operator. This inverts the truthiness of a value. Here's an example:

```jsx
const isLoggedIn = false;

// Use the ! operator to invert the value
if (!isLoggedIn) {
  console.log("User is not logged in.");
}
```

Now we can update the `TodoList` to use the `incompleteTodos` array and `map` over the `TodoItem` component:

```jsx
return (
  <div>
    <h2>Todo List</h2>
    <ul>
      {incompleteTodos.map((todo) => {
        return <TodoItem name={todo.name} completed={todo.completed} />;
      })}
    </ul>
  </div>
);
```

Now we should only be rendering the `todos` that have their `completed` value set to false.

## Keys

If you open up your developer tools in your browser and look at the `Console` tab, you should see this warning `Each child in a list should have a unique "key" prop.` twice. And it says to `Check the render  method` of `App` and `TodoList`. To fix this, you need to give each array item a `key` prop that unquely identifies it from every other item in that array. Add the following in `App.jsx` to fix this:

```jsx
// App.jsx
<Section>
  {cards.map((card) => {
    return <Card key={card.id} card={card} />;
  })}
</Section>
```

And in `TodoList.jsx`:

```jsx
<ul>
  {incompleteTodos.map((todo) => {
    return (
      <TodoItem key={todo.id} name={todo.name} completed={todo.completed} />
    );
  })}
</ul>
```

If you look in the `Console` again, those warnings should be gone. So why do we need the `key` prop? It is React's way off keeping track of each component. This is important if the items in your array move from getting sorted, new items get inserted, or items get deleted. This helps React update the correct component. A few rules to follow with keys:

- JSX elements inside a map must always have keys.
- Keys must be unique in an array that is being rendered.
- Keys must not change. Do not generate them while rendering.
