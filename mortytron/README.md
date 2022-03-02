# Mortytron 3000

### TODO

-    Introductions
-    React
-    `create-react-app`
-    components
-    state
-    props

## What is React?

-   framework (front-end framework)
-   made by facebook
-   javascript library
-   spa (single page application)

### React

-   From the landing page of [React](https://reactjs.org/):
    -   A JavaScript library for building user interfaces
-   Open source project maintained by Facebook
-   React is built around the concept of managing data
    -   Changes to the underlying data result in changes to the UI
    -   In React, state === data
-   Component-based: UI is composed of small pieces
-   Declarative: We describe the final outcome of our code and not the step-by-step process to achieve that result

### Components

-   Components are the building blocks of a webpage (eg. search input, navigation bar, contact us form)
-   Ideally, components should be reusable (which means that their state should be passed into them via props rather than maintaining their own state)
-   Deciding which DOM elements become components and which don't is a skill that comes with practice and experience
-   We will be building all of our components using functions
-   The functions return value contains a mixture of HTML and JS; React calls this `JSX`

// basic component
import React from 'react';

const MyComponent \= () \={
  return (
    <div className\="my-component"\>
      <h1\>Hello World</h1\>
    </div\>
  );
};

export default MyComponent;

### State

-   State (data) is created in a component by using the `State` hook (`useState`)
-   `useState` takes an initial value for state which will be used on the first render
-   `useState` returns the current value of state and a function (a way to set the value)

// it's common to destructure the return value from useState
const \[username, setUsername\] \= useState('');

#### NOTE: We need to use `useState` to keep track of our data so that React will know when changes occur

### Passing Props

-   Child components can be passed pieces of state (data) from their parent component
-   These props are accepted in the child component as an argument (usually called `props`)

// in parent component
import MyComponent from './components/MyComponent.jsx';

// inside the parent's return
<MyComponent studentName\="Alice"\></MyComponent\>

// inside child component
const MyComponent \= (props) \={
  return (
    <div\>
      <h1\>Hello { props.studentName }!</h1\>
    </div\>
  );
};

-   Props are not limited to JS primitives and data structures; you can also pass behaviour from parent-to-child in the form of functions

### Useful Links

-   [ReactJS Docs](https://reactjs.org/docs/getting-started.html)
-   [MDN: Closures](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures)
-   [G4G: useState](https://www.geeksforgeeks.org/what-is-usestate-in-react/) :