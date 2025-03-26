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

## Conditionally Including JSX

## Conditionally Assigning JSX to a Variable
