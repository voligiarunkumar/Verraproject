import React from "react";
import  ReactDOM  from "react-dom";
import App from './App'
import {createMemoryHistory,createBrowserHistory} from 'history';
const mount = (el) => {
  
  ReactDOM.render(<App/>, el);
 
}
if (process.env.NODE_ENV === "development") {
  const Text = document.querySelector("#_shipping-dev-root");
  if (Text) {
    mount(Text);
  }
}
export { mount };
