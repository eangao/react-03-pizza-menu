import React from "react";
import ReactDOM from "react-dom/client";

function App() {
  return <h1>Hello React!</h1>;
}

// React v18
const root = ReactDOM.createRoot(document.getElementById("root"));

// And so the app is now wrapped inside of this strict mode.
// And strict mode is really not a big deal.
// The only thing that it does is that during development
// it will render all components twice
// in order to find certain bugs.
// And also React will check
// if we're using outdated parts of the React API.
// So strict mode is nothing groundbreaking
// but it's still a good idea to always activate it
// when we develop React applications.

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// React before 18
// React.render(<App />, document.getElementById("root"))

//////////////////////////////////////////////////////
// Before We Start Coding: Debugging
//////////////////////////////////////////////////////

/////////////////////////////////////////////////////
// Components as Building Blocks
/////////////////////////////////////////////////////
// SEE PDF LECTURE AND VIDEO
