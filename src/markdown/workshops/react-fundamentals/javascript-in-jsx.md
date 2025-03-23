---
title: "JavaScript in JSX"
slug: "javascript-in-jsx"
description: "Learn how to use JavaScript in JSX."
number: 4
---

## Passing Strings into JSX

You can pass a string into JSX by embedding it within braces `{}`. This allows you to dynamically render string content.

```jsx
export default function Avatar() {
  return (
    <img
      className="avatar"
      src="https://images.pexels.com/photos/2119953/pexels-photo-2119953.png"
      alt="Gray Cat"
    />
  );
}
```

In the `Avatar` component, `https://images.pexels.com/photos/2119953/pexels-photo-2119953.png` and `Gray Cat` are being passed as strings.

But you can set the `src` and `alt` strings to use a JavaScript value by replacing quotes with curly braces.

```jsx
export default function Avatar() {
  const src =
    "https://images.pexels.com/photos/2119953/pexels-photo-2119953.png";
  const alt = "Gray Cat";

  return <img className="avatar" src={src} alt={alt} />;
}
```

## JavaScript Variables in JSX

## JavaScript Functions in JSX

## JavaScript Objects in JSX
