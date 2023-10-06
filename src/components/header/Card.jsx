import React, { useState } from "react";
import { BiShoppingBag } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
import "./card.css";
import { useSelector, useDispatch } from "react-redux";
import Carts from "../UI/cart/Carts";

export const Card = () => {
  const [cardOpen, setCardOpen] = useState(false);
  const closeCard = () => {
    setCardOpen(null);
  };

  const totalQuantity = useSelector((state) => state.cart.totalQuantity);
  const dispatch = useDispatch();

  return (
    <>
      <div className="card" onClick={() => setCardOpen(!cardOpen)}>
        <BiShoppingBag className="cardIcon" />
        <span className="flexCenter">{totalQuantity}</span>
      </div>
      <div className={cardOpen ? "overlay" : "nonoverlay"}></div>
      <div className={cardOpen ? "cartItem" : "cardhide"}>
        <div className="title">
          <div className="flex justify-between">
            <h2>Shopping Cart</h2>
            <button onClick={closeCard}>
              <AiOutlineClose className="icon" size={30} />
            </button>
          </div>
          <div>
            <Carts/>
          </div>
        </div>
      </div>
    </>
  );
};
