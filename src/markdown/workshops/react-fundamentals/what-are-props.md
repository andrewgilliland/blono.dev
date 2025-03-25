---
title: "What are Props?"
slug: "what-are-props"
description: "Learn what props are and how to use them."
number: 5
---

Props (short for "properties") are a way to pass data from a parent component to a child component. This is how React components communitcate with each other. Props look similar HTML attributes and allow you to pass JavaScript variables, arrays, objects and functions.

## How to Pass Props

Let's say you want to pass information from the `App` component to the `Card` component. We can take the `card` object and put in it the `App` component.

```jsx
function App() {
  const card = {
    src: "https://picsum.photos/200",
    title: "Lorem, Ipsum.",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, necessitatibus veniam facilis optio rerum consequatur iure omnis velit. Optio, nobis!",
  };

  return <div>...</div>;
}
```

Then we add a `card` prop to the `Card` component and pass the `card` object using `{}`.

```jsx
return (
  <div>
    <h1>React Fundamentals</h1>
    <Section>
      <Card card={card} />
    </Section>
  </div>
);
```

_Note:_ In HTML-like elements in JSX any values passed are techically called props and not attributes.

## How to Read Props

You now read the `card` value inside the props of the `Card` component. Add the `props` parameter to the `Card` component.

```jsx
function Card(props) { ... }
```

The `card` value is now a property on the `props` object and can be accessed like so:

```jsx
function Card(props) {
  const capitalize = (string) => {
    return string.toUpperCase();
  };

  return (
    <div className="card">
      <img src={props.card.src} />

      <>
        <h2>{capitalize(props.card.title)}</h2>
        <p>{props.card.description}</p>
      </>
    </div>
  );
}
```

To clean the code up a bit, we can destructor the `props` value and use the `card` variable directly:

```jsx
function Card({card}) { ... }
```

In the code we can access the `src`, `title`, and `description` values directly on the `card` object.

```jsx
function Card({ card }) {
  const capitalize = (string) => {
    return string.toUpperCase();
  };

  return (
    <div className="card">
      <img src={card.src} />
      <>
        <h2>{capitalize(card.title)}</h2>
        <p>{card.description}</p>
      </>
    </div>
  );
}
```

## Default Values for Props

Sometimes you want a default value for a prop if the user does not pass one to the component. Here we will add a `backgroundColor` prop. Then on the `style` prop of the `div` element, we will set the `backgroundColor` style to the `backgroundColor` prop.

```jsx
function Card({ card, backgroundColor }) {
  const capitalize = (string) => {
    return string.toUpperCase();
  };

  return (
    <div className="card" style={{ backgroundColor: backgroundColor }}>
      ...
    </div>
  );
}
```

If you look at your browser, you will notice the `Card` component is not displayed. This is because where we called the `Card` component in the `App` we did not pass the `backgroundColor` prop. If we check out the developer tools and look in the `Console` tab, we see that `backgroundColor` is note defined. We can fix that by passing `backgroundColor` to the `Card` component in `App.jsx`.

```jsx
<Card card={card} backgroundColor="rebeccapurple" />
```

Now the `Card` component should be visible. But if we wanted to set a default value just in case a value was not passed we can do so in `Card.jsx` by setting `backgroundColor = 'midnightblue'`.

```jsx
function Card({ card, backgroundColor = "midnightblue" }) { ... }
```

Now if we do not set the `backgroundColor` it will default to this value. But we can overwrite its value by passing a `backgroundColor` prop where `Card` is used.

## How to Pass JSX to a Component

We can also use JSX to nest other components in the components we have built. Wrapper or layout components are great for this!
