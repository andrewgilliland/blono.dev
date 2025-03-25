---
title: "JavaScript in JSX"
slug: "javascript-in-jsx"
description: "Learn how to use JavaScript in JSX."
number: 4
---

JSX is so powerful because it allows you to use JavaScript and markup in the same file. This keeps content and rendering logic in the same place. You are able to define variables, have conditionals, use functions and even loop through arrays.

## Passing Variables into JSX

You can pass a variable into JSX by embedding it within braces `{}`. This allows you to dynamically pass values. First, let's create a `const` variable `src` and set it to `https://picsum.photos/200`.

```jsx
function Card() {
  const src = "https://picsum.photos/200";

  return <div className="card">...</div>;
}
```

Then replace the `src` attribute values with `src={src}`:

```jsx
function Card() {
  const src = "https://picsum.photos/200";

  return (
    <div className="card">
      <img src={src} />
      ...
    </div>
  );
}
```

_Note:_ In JavaScript you can declare variables using three keywords: `var`, `let`, and `const`. Here we used `const`, which declares a variable that cannot be reassigned\*. Learn more [here](https://www.freecodecamp.org/news/var-let-and-const-whats-the-difference/).

## JavaScript Objects in JSX

Now let's extract some of the content out of the markup. We can make a JavaScript object that has properties for each value we extract. Declare a `const` variable and we will name it `card`. The card object will have three properties, `src`, `title`, and `description`.

```jsx
const card = {
  src: "https://picsum.photos/200",
  title: "Lorem, Ipsum.",
  description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, necessitatibus veniam facilis optio rerum consequatur iure omnis velit. Optio, nobis!",
};
```

To use this object in the markup, we will use `{}` and put the property value we want to access.

```jsx
return (
  <div className="card">
    <img src={card.src} />
    <>
      <h2>{card.title}</h2>
      <p>{card.description}</p>
    </>
  </div>
);
```

See how you can change the value of the content in between tags the same way you can change attributes!

## JavaScript Functions in JSX

Let's say you wanted to do some logic on values being used in the markup, we could use a function inside of the JSX to do this. Declare a function `capitalize`, which has a parameter `string` and then returns
the `string` value after using the `toUpperCase` method on it.

```jsx
const capitalize = (string) => {
  return string.toUpperCase();
};
```

_Note:_ JavaScript has built-in functions on data types called methods. Here we are using a string method called `toUpperCase` and there are lots more! Check out the [MDN String documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) to learn more.

Now let's use the `capitalize` function in the markup.

```jsx
return (
  <div className="card">
    <img src={card.src} />
    <>
      <h2>{capitalize(card.title)}</h2>
      <p>{card.description}</p>
    </>
  </div>
);
```
