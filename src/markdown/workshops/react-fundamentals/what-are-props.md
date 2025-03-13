---
title: "What are Props?"
slug: "what-are-props"
description: "Learn what props are and how to use them."
number: 5
---

Props (short for "properties") are a way to pass data from a parent component to a child component. This is how React components communitcate with each other. Props look similar HTML attributes and allow you to pass JavaScript variables, arrays, objects and functions.

## How to Pass Props

Let's say you have a component `Card` and it returns two other components `CardImage` and `CardBody`.

```jsx
const Card = () => {
    return (
        <CardImage />
        <CardBody />
    )
}
```

We want to pass a string value called `url` and a number value called `size` to `CardImage`. We can add the props to the `CardImage` like this:

```jsx
const Card = () => {
    return (
        <CardImage url="https://picsum.photos/200" size={100}/>
        <CardBody />
    )
}
```

## How to Read Props

```jsx
function Howdy(props) {
  return <h1>Howdy, {props.name}</h1>;
}

const element = <Howdy name="Biff" />;
```

In this example, the `Howdy` component receives a `name` prop and uses it to render a greeting message. The `element` renders the `Welcome` component with the `name` prop set to "Biff".

## Default Values for Props

## How to Pass JSX to a Component
