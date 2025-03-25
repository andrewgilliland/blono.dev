---
title: "What is JSX?"
slug: "what-is-jsx"
description: "Learn what JSX is and how to use it in React."
number: 3
---

JSX (JavaScript XML) is a syntax extension that allows you to write HTML-like code inside your JavaScript. JSX is the format of React component files.

## Why Use JSX ?

JSX makes it easier to visualize the structure of your UI components. And by combining the markup and logic within the same file, JSX improves code organization and maintainability. React's ability to efficiently update the DOM based on JSX elements contributes to the performance of React applications.

## Syntax Extension

JSX is not standard JavaScript, it extends the JavaScript syntax. This makes it easier for you to describe what your user interface should look like. JSX is transformed into regular JavaScript code that browsers can understand. Transformation is generally done with tools like [Babel](https://babeljs.io/).

## HTML-like Structure

JSX resembles HTML, which makes it easy for developers familiar with web elements to build React components. JSX is super handy in that allows you to embed JavaScript expressions directly into this markup.

## Embedding JavaScript

You can insert JavaScript expressions into JSX by wrapping them in curly barces `{}`. This allows you to dynamically generate content, handle events, and manipulate data within your UI.

## React Elements

JSX creates React "elements", which are the building blocks of React user interfaces. React elements describe what should be displayed on screen.

## Rules of JSX

### Return a Single Root Element

If you need to return multiple elements in a component, they need to be children of a single root element. Notice how the `Card` component has all of it's elements children of the `div` element. What happens if you get rid of it.

```jsx
function Card() {
  return <div>...</div>;
}
```

### Fragments

Alternatively you can wrap elements in an empty element known as a `Fragment`. The syntax looks like this `<>` for an opening tag and `</>` for a closing tag.

```jsx
function Card() {
  return (
    <div>
      <img src="https://picsum.photos/200" />
      <>
        <h2>Lorem, Ipsum.</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet,
          necessitatibus veniam facilis optio rerum consequatur iure omnis
          velit. Optio, nobis!
        </p>
      </>
    </div>
  );
}
```

Check out [here](https://react.dev/reference/react/Fragment) for more info on `Fragments`.

### Close All Tags

JSX requires all tags to be explicitly closed. Self-closing tags like `<img>` must be written as `<img/>`, or with a corresponding close tag like `<p></p>`. The same is true for React components. A component named `ReactCard` would have to contain a self-closing tag when used in code like `<Card />`.

### Camel Case for Attributes

JSX turns into JavaScript and attributes written in JSX become keys of JavaScript objects. JavaScript has limitations on variable names so you can't use dashes or reserved keywords. Many HTML and SVG attributes are written in camel case. for example, `class` is a reserved keyword, so in React you use `className` instead.

```jsx
function Card() {
  return (
    <div className="card">
      <img src="https://picsum.photos/200" />
      <>
        <h2>Lorem, Ipsum.</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet,
          necessitatibus veniam facilis optio rerum consequatur iure omnis
          velit. Optio, nobis!
        </p>
      </>
    </div>
  );
}
```
