import React from "react";
import ReactDOM from "react-dom";

const mount = (el) => {
  ReactDOM.render(<h1>Hey Basis</h1>, el);
};

//for work in isolation

if (process.env.NODE_ENV === "development") {
  const rootDom = document.querySelector("#_marketing-section-mfa");

  if (rootDom) {
    mount(rootDom);
  }
}

//will work for integrated env
export { mount };
