import React from "react";
import ReactDOM from "react-dom/client";

//////////////////////////////////////////////

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

//////////////////////////////////////////////

// function App() {
//   return <h1>Hello React!</h1>;
// }

// // React v18
// const root = ReactDOM.createRoot(document.getElementById("root"));

// // And so the app is now wrapped inside of this strict mode.
// // And strict mode is really not a big deal.
// // The only thing that it does is that during development
// // it will render all components twice
// // in order to find certain bugs.
// // And also React will check
// // if we're using outdated parts of the React API.
// // So strict mode is nothing groundbreaking
// // but it's still a good idea to always activate it
// // when we develop React applications.

// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// // React before 18
// // React.render(<App />, document.getElementById("root"))

//////////////////////////////////////////////////////
// Before We Start Coding: Debugging
//////////////////////////////////////////////////////

/////////////////////////////////////////////////////
// Components as Building Blocks
/////////////////////////////////////////////////////
// SEE PDF LECTURE AND VIDEO

/////////////////////////////////////////////////////
// Creating And Reusing a Component
/////////////////////////////////////////////////////

function App() {
  //   This however will give us an error.
  // So right here, which we already saw before
  // and the reason for this error
  // is that each component can only return exactly one element,
  // not two elements as we have here.
  //---- return <h1>Hello React!</h1><Pizza/>;

  //   So what we should never do
  // is to nest the component declaration itself.
  // So like this, this still works actually,
  // but it's a very, very bad idea
  ///////////
  // function Pizza() {
  //   return <h2>Pizza</h2>;
  // }

  return (
    <div>
      <h1>Hello React!</h1>
      {/* I just want you to get this really important concept that we can call each
      piece of the UI or in other words, each component multiple times here in
      order to reuse it and that's a fundamental concept of writing React
      applications. */}
      <Pizza />
      <Pizza />
      <Pizza />
    </div>
  );
}

// So in React we write new components using functions.
// So function, and I'm calling this one pizza

// in React, there are two important rules
// when we write components as functions.
// First, the function name needs to start
// with an uppercase letter like this
// and second, the function needs to return some markup.
// So usually in the form of JSX,
// but we can't even return nothing, like returning null.

// So never nest the function declarations,
// but always declare all your components in the top level.
function Pizza() {
  return (
    <div>
      {/* all the assets of the app will go into this public folder because Webpack,
      so the module bundler will then basically automatically get them from
      there.
      
       Now we get these yellow underline here and that's because an ESLint
      rule which says that images always should have an alt prop. */}
      <img src="pizzas/spinaci.jpg" alt="Pizza Spinaci" />
      <h2>Pizza Spinaci</h2>
      <p>Tomato, mozarella, spinach, and ricotta cheese</p>
    </div>
  );
}

// React v18
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
