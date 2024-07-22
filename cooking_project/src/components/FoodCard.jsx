import React from "react";
import "../css/FoodCard.css";
import img_card from "../assets/images/OIP.jpeg";

function FoodCard() {
  return (
    <div className="container">
      <img src={img_card} />
    </div>
  );
}

export default FoodCard;
