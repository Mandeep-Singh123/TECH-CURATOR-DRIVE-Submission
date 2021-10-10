import { StrictMode } from "react";
import ReactDOM from "react-dom";

import SimpleForm from "./App";
const rootElement = document.getElementById("root");

ReactDOM.render(
  <StrictMode>
    <SimpleForm />
  </StrictMode>,
  rootElement
);
