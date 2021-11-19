import React from "react";
import ReactDOM from "react-dom";

import { App } from "./App";

const mount = (el) => {
  ReactDOM.render(<App />, el);
};

//for work in isolation

if (process.env.NODE_ENV === "development") {
  const rootDom = document.querySelector("#_marketing-section-mfa");

  if (rootDom) {
    mount(rootDom);
  }
}

//will work for integrated env
// HvfHNyTszELQETrpMR37
export { mount };
