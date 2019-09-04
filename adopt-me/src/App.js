import React from "react";
import { render } from "react-dom";
import Pet from "./Pet";

const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Adopt Me!"),
    React.createElement(Pet, {
      name: "Napoleon",
      animal: "Fish",
      breed: "Betta"
    }),
    React.createElement(Pet, {
      name: "Pat (Kibbles) Kane)",
      animal: "Rabbit",
      breed: "??????"
    }),
    React.createElement(Pet, {
      name: "Striker",
      animal: "Dog",
      breed: "German Shephard/Border Collie"
    })
  ]);
};

render(React.createElement(App), document.getElementById("root"));
