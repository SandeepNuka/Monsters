import React, { Component } from "react";
import "./App.css";
import Cardlist from "./components/Cardlist";
import "./Input.css";
class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      SearchField: "",
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => {
        this.setState({ monsters: users });
        console.log(users);
      });
  }

  render() {
    const { monsters, SearchField } = this.state;
    const filters = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(SearchField.toLowerCase())
    );
    return (
      <div className="App">
        <h1> MONSTERS</h1>
        <input
          className="Input"
          type="search"
          placeholder="search the monsters"
          onChange={(e) => this.setState({ SearchField: e.target.value })}
        ></input>
        <Cardlist monsters={filters} />
      </div>
    );
  }
}
export default App;
