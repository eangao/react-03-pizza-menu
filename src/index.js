import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

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

// function App() {
//   //   This however will give us an error.
//   // So right here, which we already saw before
//   // and the reason for this error
//   // is that each component can only return exactly one element,
//   // not two elements as we have here.
//   //---- return <h1>Hello React!</h1><Pizza/>;

//   //   So what we should never do
//   // is to nest the component declaration itself.
//   // So like this, this still works actually,
//   // but it's a very, very bad idea
//   ///////////
//   // function Pizza() {
//   //   return <h2>Pizza</h2>;
//   // }

//   return (
//     <div>
//       <h1>Hello React!</h1>
//       {/* I just want you to get this really important concept that we can call each
//       piece of the UI or in other words, each component multiple times here in
//       order to reuse it and that's a fundamental concept of writing React
//       applications. */}
//       <Pizza />
//       <Pizza />
//       <Pizza />
//     </div>
//   );
// }

// // So in React we write new components using functions.
// // So function, and I'm calling this one pizza

// // in React, there are two important rules
// // when we write components as functions.
// // First, the function name needs to start
// // with an uppercase letter like this
// // and second, the function needs to return some markup.
// // So usually in the form of JSX,
// // but we can't even return nothing, like returning null.

// // So never nest the function declarations,
// // but always declare all your components in the top level.
// function Pizza() {
//   return (
//     <div>
//       {/* all the assets of the app will go into this public folder because Webpack,
//       so the module bundler will then basically automatically get them from
//       there.

//        Now we get these yellow underline here and that's because an ESLint
//       rule which says that images always should have an alt prop. */}
//       <img src="pizzas/spinaci.jpg" alt="Pizza Spinaci" />
//       <h2>Pizza Spinaci</h2>
//       <p>Tomato, mozarella, spinach, and ricotta cheese</p>
//     </div>
//   );
// }

// // React v18
// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

//////////////////////////////////////////////////////////////
// What is JSX?
//////////////////////////////////////////////////////////////

// See pdf lecture and video

// We have written some pieces of JSX
// in this course already but what actually is JSX
// and why is it such a big deal in React?

// Well, when we first talked about components,
// we talked about how a component contains its own data,
// logic, and appearance.
// And that makes sense, right?
// Because if a component is a piece of the user interface,
// it means that we must be able to describe exactly
// what that component looks like.

// And so that's where JSX comes into play.
// So, JSX is a declarative syntax that we use
// to describe what components look like
// and how they work based on their data and logic.
// So, it's all about the components appearance.

//////////////////////////////////////////////////////////////////
// Creating More Components
//////////////////////////////////////////////////////////////////

// function App() {
//   return (
//     <div>
//       <Header />
//       <Menu />
//       <Footer />
//     </div>
//   );
// }

// // by the way,
// // we could of course also write these functions
// // as function expressions and arrow functions.
// // So, we could also do const, let's just call it test,
// // equal function like this.
// // Or even simpler, it could be an arrow function.
// // So if you prefer these types of functions,
// // feel free to use those,
// // but I always like to use the regular function keywords
// // as I have been using.
// function Header() {
//   return <h1>Fast React Pizza Co.</h1>;
// }

// function Menu() {
//   return (
//     <div>
//       <h2>Our Menu</h2>
//       <Pizza />
//       <Pizza />
//       <Pizza />
//     </div>
//   );
// }

// function Footer() {
//   return (
//     <footer>{new Date().toLocaleDateString()}. We're currently open</footer>
//   );

//   // //   ust so you can see how
//   // // bad it would be to write components this way without JSX.
//   ///////////// return React.createElement("footer", null, "We're currently open");
// }

// function Pizza() {
//   return (
//     <div>
//       <img src="pizzas/spinaci.jpg" alt="Pizza Spinaci" />
//       <h2>Pizza Spinaci</h2>
//       <p>Tomato, mozarella, spinach, and ricotta cheese</p>
//     </div>
//   );
// }

// // React v18
// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// // here in the actual HTML
// // we will no longer see the name of our components, right?
// // Because once React renders everything into the dom,
// // it only renders the h1 element itself.
// // So the dom doesn't know that this h1 is actually coming
// // from this header component and that these divs,
// // for example, are actually coming from a pizza component.
// // This webpage that is now being rendered here
// // has no idea about any of that.

// ///////////////////////////////////////////////////////
// // JavaScript Logic in Components
// ///////////////////////////////////////////////////////

// function App() {
//   return (
//     <div>
//       <Header />
//       <Menu />
//       <Footer />
//     </div>
//   );
// }

// function Header() {
//   return <h1>Fast React Pizza Co.</h1>;
// }

// function Menu() {
//   return (
//     <div>
//       <h2>Our Menu</h2>
//       <Pizza />
//       <Pizza />
//       <Pizza />
//     </div>
//   );
// }

// function Footer() {
//   // Let's now take a quick first look
//   // at writing logic inside of React components.
//   // Now we have already written some JavaScript logic before
//   // but we always did it just inside the JSX that is returned.
//   // So just like here, right?
//   // But since components are just JavaScript functions,
//   // we can of course do any JavaScript in them that we want.
//   // And that code is then simply executed
//   // as soon as the function is call.
//   // So as soon as the component is initialized.

//   const hour = new Date().getHours();
//   const openHour = 12;
//   const closeHour = 22;
//   const isOpen = hour >= openHour && hour <= closeHour;
//   console.log(isOpen);

//   //   and you saw that alert it happened here twice.
//   // And that's because of the strict mode
//   // that I was telling you before.
//   // So in strict mode, our components are usually rendered twice
//   // and so that's why we got that alert twice as well.
//   // Now, if we
//   // if (hour >= openHour && hour <= closeHour) alert("Were currently open!");
//   // else alert("Sorry were closed");

//   return (
//     <footer>{new Date().toLocaleDateString()}. We're currently open</footer>
//   );
// }

// function Pizza() {
//   return (
//     <div>
//       <img src="pizzas/spinaci.jpg" alt="Pizza Spinaci" />
//       <h2>Pizza Spinaci</h2>
//       <p>Tomato, mozarella, spinach, and ricotta cheese</p>
//     </div>
//   );
// }

// // React v18
// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// ////////////////////////////////////////////////////////
// // Separation of Concerns
// ////////////////////////////////////////////////////////
// // see pdf lecture and video

// // the first place?
// // So why not just keep HTML, CSS and JavaScript
// // in separate places, like we have always done before?
// // And this might sound like a trivial question,

// // something you think is not really relevant at all
// // but it's actually deeply relevant to understand why
// // React was completely designed around components.

// // Now when React and JSX first came out a long time ago,
// // many, many people just hated the way that JSX looks like.
// // And they hated that we are throwing separations
// // of concerns out of the window.
// // But actually, are we really?
// // Is there really no separation of concerns in React?

// // Well, I think that the people who say
// // that React has no separation of concerns, got it all wrong.
// // Because React does actually have separation of concerns.
// // It's just not one concern per file,
// // as we had traditionally but one concern per component.
// // So each component is in fact,
// // only concerned with one piece of the UI.
// // Then within each of these components,
// // of course we still have the three concerns of HTML,
// // CSS and JavaScript all mixed up, as we have been discussing.

// // So compared to the traditional separation of concerns,
// // this is a completely new paradigm
// // that many people were really not used to in the beginning.
// // But now, many years later,
// // we all got used to this and it works just great.

// /////////////////////////////////////////////////////////////////
// // Styling React Applications
// /////////////////////////////////////////////////////////////////
// // So at this point, we know
// // that React components can also contain CSS styles.
// // And so let's now learn about some simple ways
// // of applying CSS to React applications.

// // So in React we have many different ways
// // of styling our components
// // and React doesn't really care about how we do that.
// // It doesn't have an opinion about styling.
// // And the reason for that is that just
// // as we learned in the very beginning
// // React is actually more of a library than a framework.

// // So it doesn't have a preferred way of how we should style
// // our components and in the end our applications, therefore
// // we can choose between many different options.
// // For example, we can use inline styling
// // we can use external CSS or even SAS files.
// // We can use CSS modules, styled components, or even Tailwind
// // CSS is an option to style our components.

// // Now in this lecture
// // we will not go into all of these of course
// // but we will talk about many of them later.
// // For now, I just want to use inline CSS
// // and then also later include an external CSS file.

// function App() {
//   return (
//     <div className="container">
//       <Header />
//       <Menu />
//       <Footer />
//     </div>
//   );
// }

// function Header() {
//   // const style = { color: "red", fontSize: "48px", textTransform: "uppercase" };
//   const style = {};

//   //   So in JSX, we actually need to define inline styles
//   // using a JavaScript object.
//   // So if we need to write a JavaScript object
//   // we first need to enter JavaScript mode.
//   // So that's what the curly braces are for. {}
//   // But then we need another set of curly braces.
//   // And so that is again, to now create an object. {{}}
//   // And so here we can now define some properties.
//   return (
//     // all the CSS property names have
//     // been converted basically in JSX to this camel case notation.

//     //     So make sure to always write these property values.
//     // Then basically here S strings, because again,
//     // this is in the end just a JavaScript object
//     // and you could even extract this out here.
//     // So just cutting this, let's create a variable here.
//     // <h1 style={{ color: "red", fontSize: "48px", textTransform: "uppercase" }}>
//     //   Fast React Pizza Co.
//     // </h1>

//     //////////////////
//     // still looks the same.
//     // Great. So this is the easiest way
//     // of adding some styling to individual components.
//     // However, when the application gets just a little bit bigger
//     // it can get out of hand
//     // and can be a lot of work to write our styles like this.
//     // So like creating an object
//     // for each of these components, it's perfectly doable
//     // but you don't see many people doing that in the real world.
//     // Now one thing that we can do is to actually
//     // include an external CSS files just
//     // like we have been doing all the time in our applications.
//     // And so that is the easiest way I would say to
//     // style React applications, which is basically the same
//     // as styling any other webpage.
//     // Now in that case we're not really mixing DCSS concern
//     // with the JavaScript and HTML concerns
//     // in the way that we learned in the last lecture
//     // but that's of course not a problem.
//     // And also we will learn how to do that a little bit later
//     // again, using something called styled components.

//     ///////
//     //     So this is a little bit just of semantic HTML right here
//     // or let's say a semantic markup where the header
//     // element is a bit better suited here
//     // than simply having the H-1.
//     <header className="header">
//       <h1 style={style}>Fast React Pizza Co.</h1>
//     </header>
//   );
// }

// function Menu() {
//   return (
//     //     And here, since we were talking about semantic markup
//     // let's actually use the main tag, so the main HTML element
//     <main className="menu">
//       <h2>Our Menu</h2>
//       <Pizza />
//       <Pizza />
//       <Pizza />
//     </main>
//   );
// }

// function Footer() {
//   const hour = new Date().getHours();
//   const openHour = 12;
//   const closeHour = 22;
//   const isOpen = hour >= openHour && hour <= closeHour;
//   console.log(isOpen);

//   return (
//     <footer className="footer">
//       {new Date().toLocaleDateString()}. We're currently open
//     </footer>
//   );
// }

// function Pizza() {
//   return (
//     <div>
//       <img src="pizzas/spinaci.jpg" alt="Pizza Spinaci" />
//       <h3>Pizza Spinaci</h3>
//       <p>Tomato, mozarella, spinach, and ricotta cheese</p>
//     </div>
//   );
// }

// // React v18
// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// // so before we add the classes
// // we need to first import this CSS file.
// // So right now our application has no way
// // of knowing that the CSS file exists in the project.

// // So what we need to do here is to simply import that file.
// // And so once again
// // it is actually web pack that will take care
// // of then taking the styles out
// // of the CSS file and injecting them into our application.
// // So index dot CSS.

// // And you see already things changed here.
// // So the background color is different
// // the font family has changed.
// // Yeah, for now, think that's all.
// // And we also get this nice yellow border
// // at the bottom of the page.
// // So you see that immediately web pack
// // included these styles now in our application now,

// // but now let's add the classes.
// // So you see that we have one container
// // we have a header, we have menu, and we probably have footer.
// // Yeah, so just very straightforward.
// // So here, let's add the class of container
// // and let me first do it in the wrong way.

// // So I will just write class as we would do in HTML
// // but then React will actually warn us.
// // So you see here, Invalid DOM property class
// // did you mean class name?

// // And so this is one of the important rules of JSX.
// // So in JSX we cannot use class, but instead class name.

// // So this is a common beginner mistake, but now
// // you have been warned it still does work here somehow
// // but we are really not supposed to use class in JSX.
// // Now that's probably because class is already
// // a reserved keywords in JavaScript.

// //////////////
// // there are a few more JSX rules like this
// // which we will talk about a little bit later in this section.
// // For now, just notice that the styles that we included here
// // are global styles, so they're not scoped
// // to each particular component, and that's very easy to show.

// // For example, we could add the header class also here.
// // And while that looks kind of the same
// // let's try something else.
// // Let's add maybe the footer class also to the header.
// // Yeah. And again, it doesn't change a lot, but if
// // we inspect the element here, yeah, so right here, then
// // of course both of these classes here.

// // So all of these styles will be applied to this same element
// // and in the end to the same component.
// // And so again, each component does not really contain
// // its own styles but simply uses the global styles
// // that are in index.CSS.
// // And this works fine for small apps,

// // but we will also use something called styled components
// // later in another project.
// // And so then we will have CSS that really only belongs
// // to one single component.

// ///////////////////////////////////////////////////////////////////
// // Passing and Receiving Props
// ///////////////////////////////////////////////////////////////////
// // It's time to introduce
// // yet another fundamental React concept, which is props.

// // And props is essentially
// // how we pass data between components.
// // And in particular, from parent components
// // to child components.

// // So we can imagine props as being
// // like a communication channel
// // between a parent and a child component.

// // So in practice, what we're going to do,
// // is to now customize each of these pizza components
// // that we have right here.
// // So, remember how we created the pizza component
// // which has this image, the pizza name, and the ingredients.
// // But right now all of the pizzas are the same
// // because, well, we didn't have a way of passing
// // different data into them to make each of them customized.
// // But now, as we learn about props,
// // we will be able to do that.

// function App() {
//   return (
//     <div className="container">
//       <Header />
//       <Menu />
//       <Footer />
//     </div>
//   );
// }

// function Header() {
//   const style = {};

//   return (
//     <header className="header">
//       <h1 style={style}>Fast React Pizza Co.</h1>
//     </header>
//   );
// }

// function Menu() {
//   return (
//     <main className="menu">
//       <h2>Our Menu</h2>

//       {/* to define props, we do it in two steps.
//        First, we pass the props
//       into the component,
//         */}
//       <Pizza
//         name="Pizza Spinaci"
//         ingredients="Tomato, mozarella, spinach, and ricotta cheese"
//         photoName="pizzas/spinaci.jpg"
//         price={10}
//       />

//       <Pizza
//         name="Pizza Funghi"
//         ingredients="Tomato, mushrooms"
//         // price="15"

//         //         whenever you want to pass in
//         // something that is not a string,
//         // you just use, again, this JavaScript mode basically.
//         // Because, in fact, you can pass in anything as a prop.
//         // So it doesn't have to be a string or a number.
//         price={15}
//         photoName="pizzas/funghi.jpg"
//       />
//     </main>
//   );
// }

// // and then second, we receive the props in the
// // component that we pass them into.
// function Pizza(props) {
//   console.log(props);
//   return (
//     <div className="pizza">
//       <img src={props.photoName} alt={props.name} />
//       <div>
//         <h3>{props.name}</h3>
//         <p>{props.ingredients}</p>
//         <span>{props.price + 3}</span>
//       </div>
//     </div>
//   );
// }

// function Footer() {
//   const hour = new Date().getHours();
//   const openHour = 12;
//   const closeHour = 22;
//   const isOpen = hour >= openHour && hour <= closeHour;
//   console.log(isOpen);

//   return (
//     <footer className="footer">
//       {new Date().toLocaleDateString()}. We're currently open
//     </footer>
//   );
// }

// // React v18
// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// /////////////////////////////////////////////////////////
// // Props, Immutability, and One-Way Data Flow
// /////////////////////////////////////////////////////////
// // see pdf lecture and video

// // So now that we already know what props are
// // and how we use them in practice, let's quickly review them
// // and even learn some important additional things about props.

// //////////////////////////////////////////////////////////
// // The Rules of JSX
// //////////////////////////////////////////////////////////
// // see pdf lecture and video

// // Many beginners get quite confused
// // when they start using JSX in their own code.
// // And in fact, JSX can be a bit tricky to understand
// // and to master.
// // But that's why I am here by your site,
// // helping you along the way.

// ////////////////////////////////////////////////////////////
// // Rendering Lists
// ////////////////////////////////////////////////////////////

// // that we do in basically all React applications.
// // You will probably do it like 100 times
// // throughout this course
// // and so let's now learn how to render lists in React.
// // But first of all, what do we actually mean
// // by rendering lists?
// // Well, basically rendering a list is when we have an array
// // and we want to create one component
// // for each element of the array.

// function App() {
//   return (
//     <div className="container">
//       <Header />
//       <Menu />
//       <Footer />
//     </div>
//   );
// }

// function Header() {
//   const style = {};

//   return (
//     <header className="header">
//       <h1 style={style}>Fast React Pizza Co.</h1>
//     </header>
//   );
// }

// function Menu() {
//   return (
//     <main className="menu">
//       <h2>Our Menu</h2>

//       <ul className="pizzas">
//         {pizzaData.map((pizza) => (
//           // <Pizza pizzaObject={pizza} />
//           // index.js:773 Warning: Each child in a list should have a unique "key" prop.

//           //  So we have this warning saying that each child
//           // in a list should have a unique key property.
//           // So basically what this means is that each time we render
//           // a list like this.
//           // Where is it?
//           // Yeah so each time we render a list with the map method,
//           // each of the items that gets rendered
//           // needs a unique key property.
//           // So key is basically a prop that is internal to React,
//           // which it needs in order for some performance optimizations
//           //           For now, what matters is that we pass something here
//           // that is unique to each element.
//           // So to each pizza in this case, and that is the name.
//           // So the name in this example is always unique.
//           // So we can use that one as the unique key
//           // and so then the warning here is gone.
//           <Pizza pizzaObject={pizza} key={pizza.name} />
//         ))}
//       </ul>

//       {/* <Pizza
//         name="Pizza Spinaci"
//         ingredients="Tomato, mozarella, spinach, and ricotta cheese"
//         photoName="pizzas/spinaci.jpg"
//         price={10}
//       />

//       <Pizza
//         name="Pizza Funghi"
//         ingredients="Tomato, mushrooms"
//         price={15}
//         photoName="pizzas/funghi.jpg"
//       /> */}
//     </main>
//   );
// }

// function Pizza(props) {
//   console.log(props);
//   return (
//     <li className="pizza">
//       <img src={props.pizzaObject.photoName} alt={props.pizzaObject.name} />
//       <div>
//         <h3>{props.pizzaObject.name}</h3>
//         <p>{props.pizzaObject.ingredients}</p>
//         <span>{props.pizzaObject.price}</span>
//       </div>
//     </li>
//   );
// }

// function Footer() {
//   const hour = new Date().getHours();
//   const openHour = 12;
//   const closeHour = 22;
//   const isOpen = hour >= openHour && hour <= closeHour;
//   console.log(isOpen);

//   return (
//     <footer className="footer">
//       {new Date().toLocaleDateString()}. We're currently open
//     </footer>
//   );
// }

// // React v18
// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

/////////////////////////////////////////////////////////////////
// Conditional Rendering With &&
/////////////////////////////////////////////////////////////////
// Another very important technique
// that we use all the time in React development
// is conditional rendering.
// So in this video, and the next two,
// we will talk about three ways of rendering some JSX,
// or even an entire component,
// based on a condition
// and starting in this lecture with the & operator.

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {
  const style = {};

  return (
    <header className="header">
      <h1 style={style}>Fast React Pizza Co.</h1>
    </header>
  );
}

function Menu() {
  const pizzas = pizzaData;
  // const pizzas = []; // empty array = truthy value
  const numPizzas = pizzas.length;

  return (
    <main className="menu">
      <h2>Our Menu</h2>
      {/*react render 0 not boolean value(True or False) in short circuiting 
      
      Now because of this behavior here that I just showed you, so that
      sometimes a zero can show up in the UI, many people say that we should
      actually never use the & operator to do conditional rendering. Now I don't
      really agree with that because sometimes it's nice to very quickly do some
      conditional rendering with this, but also usually, I do prefer the ternary
      operator to do conditional rendering. */}
      {numPizzas > 0 && (
        <ul className="pizzas">
          {pizzas.map((pizza) => (
            <Pizza pizzaObject={pizza} key={pizza.name} />
          ))}
        </ul>
      )}
    </main>
  );
}

function Pizza(props) {
  console.log(props);
  return (
    <li className="pizza">
      <img src={props.pizzaObject.photoName} alt={props.pizzaObject.name} />
      <div>
        <h3>{props.pizzaObject.name}</h3>
        <p>{props.pizzaObject.ingredients}</p>
        <span>{props.pizzaObject.price}</span>
      </div>
    </li>
  );
}

function Footer() {
  const hour = new Date().getHours();
  const openHour = 12;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;
  console.log(isOpen);

  return (
    <footer className="fo oter">
      {/* {new Date().toLocaleDateString()}. We're currently open */}

      {/* And so now what we want to do is to basically only render something here
      inside of the footer if the restaurant is currently open. And so that's
      what conditional rendering is all about. So it's basically rendering some
      piece of the UI, no matter if that's a piece of JSX, or if it's an entire
      component, based on a certain condition. And again, in this case, the
      condition is simply whether the restaurant is currently open or not. 
      
      we're going to do conditional rendering
      with the & operator
      and that works because of short circuiting.
      Now, in case you're not sure what short circuiting means,*/}
      {/*react render  true or False value in short circuiting */}
      {isOpen && (
        <div className="order">
          <p>
            We're open untill {closeHour}:00. Come visit us or order online.
          </p>
          <button className="btn">Order</button>
        </div>
      )}
    </footer>
  );
}

// React v18
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
