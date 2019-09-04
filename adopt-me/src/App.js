const Pet = ({ name, animal, breed }) => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, name),
    React.createElement("h2", {}, animal),
    React.createElement("h2", {}, breed)
  ]);
};

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

ReactDOM.render(React.createElement(App), document.getElementById("root"));
