import React from "react";
import "./cardlist.css";
import Card from "./Card";

const Cardlist = (props) => (
  <div className="cardlist">
    {props.monsters.map((monster) => (
      <Card monster={monster} />
    ))}
  </div>
);

export default Cardlist;
