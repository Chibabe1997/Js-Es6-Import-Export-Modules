import React from "react";
import ReactDOM from "react-dom";
import pi,{name,address} from "./math"

ReactDOM.render(
  <ul>
    <li>{pi}</li>
    <li>{name}</li>
    <li>{address}</li>
  </ul>,
  document.getElementById("root")
);
