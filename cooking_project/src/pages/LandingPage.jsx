import React from "react";
import "../css/LandingPage.css";
import bg_img from "../assets/images/943995.jpg";
import FoodCard from "../components/FoodCard";
import FoodTag from "../components/FoodTag";
import { BsArrowRightCircleFill } from "react-icons/bs";

function LandingPage() {
  return (
    <>
      <div className="grid-container">
        <div className="grid-item-1">
          <img src={bg_img} />
          <h1 className="image-text-1">Delicious recipes.</h1>
          <h1 className="image-text-2">Daily Updated.</h1>
          <p className="image-text-3">Daily new recipes and cooking tips.</p>
        </div>
        <div className="grid-item-2">
          <div className="food_card_1">
            <FoodCard />
          </div>
          <div className="food_card_2">
            <FoodCard />
          </div>
          <div className="food_card_3">
            <FoodCard />
          </div>
          <div className="container_2">
            <h2 className="text-categories">Top Categories</h2>
            <FoodTag data={"Western"} />
            <FoodTag data={"Local"} />
            <FoodTag data={"Eastern"} />
            <FoodTag data={"Fried"} />
            <FoodTag data={"Spicy"} />
          </div>
          <div className="grid-item-3">
            <h2>Click here to view more!</h2>
            <div>
              <BsArrowRightCircleFill className="icons" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default LandingPage;
