import React from "react";
import "../css/FoodTag.css";

function FoodTag(props) {
  return <div className="container_foodtag">{props.data}</div>;
}

export default FoodTag;
