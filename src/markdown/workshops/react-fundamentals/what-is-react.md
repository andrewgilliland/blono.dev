---
title: "What is React?"
slug: "what-is-react"
description: "Getting Started with React."
number: 0
---

React is a JavaScript library for building user interfaces. It was developed by Meta and is maintained by Meta and a community of individual developers and companies. React allows you to build applications that can render efficiently in response to data changes. Learn more about React from their official website [here](https://react.dev/).

## What Can You Build with React?

So, why learn React? There's a lot of different things you can build with React, like:

- Static Websites

  By leveraging React frameworks like Next.js or Gatsby, you can build static websites. These frameworks allow you to use React components while generating static HTML files that can be served directly to users.

- Web Applications

  React can also build web applications that have dynamic user interfaces, but also interact with databases and other APIs.

- Mobile Applications

  You can build mobile applications with React using React Native. React Native is a framework that allows you to create cross-platform applications for iOS and Android with a single codebase.

## Needed Tools

To get the most out of this workshop, you will need to install some software and tools. All of these are available for free online.

- VS Code

  Visual Studio Code is an open-source code editor developed by Microsoft. It supports multiple languages, Git integration, and a plethora of extensions to customize the editor. Download VS Code [here](https://code.visualstudio.com/download).

- Node.js and npm

  Node.js is a cross-platform, open-source runtime environment that allows you to execute JavaScript code on the server side. Node Package Manager (npm) is a package manager for JavaScript that allows developers to install, share, and manage dependencies for projects. Download Node.js and npm [here](https://nodejs.org/en/download).

- Git

  Git is a distributed version control system that allows you to track changes in your code, collaborate, and manage your project history efficiently. It enables branching, merging, and reverting changes of your code in projects. Download git [here](https://git-scm.com/downloads).

- A GitHub account

  GitHub is a web-based platform for version control and collaboration. It is built on top of Git, and allows you to host, review, and manage code repositories. Sign up for GitHub [here](https://github.com/).

## Getting the Starter Code Running

To get started with workshop you will need to clone the start repository from GitHub [here](https://github.com/Bloomington-Normal-Developers/react-fundamentals-workshop). Click the green button that says **Code**, then select **HTTPS**. Copy that url to your clipboard. In VS Code, select **Terminal** in the menu and then click on **New Terminal**. In the terminal run:

```bash
git clone https://github.com/Bloomington-Normal-Developers/react-fundamentals-workshop
```

After the repo has been cloned, **cd** into the project:

```bash
cd react-fundamentals-workshop
```

Then run:

```bash
npm install
```

After you have installed you dependencies, run the project with:

```bash
npm run dev
```

Then open a browser and enter [http://localhost:5173/](http://localhost:5173/) into the url bar. You should see your React application running.
