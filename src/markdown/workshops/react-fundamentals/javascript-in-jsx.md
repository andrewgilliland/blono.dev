---
title: "JavaScript in JSX"
slug: "javascript-in-jsx"
description: "Learn how to use JavaScript in JSX."
number: 4
---

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

## JavaScript Objects in JSX

## JavaScript Functions in JSX
