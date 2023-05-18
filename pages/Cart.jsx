import React, { useEffect, useState } from "react";
import { useStore } from "../stores/store";
import { shallow } from "zustand/shallow";

export default function Count() {
  // get item from localStorage
  const getCartFromLocal = JSON.parse(localStorage.getItem("cart"));
  const [getCart, setGetCart] = useState(getCartFromLocal);

  const [cart, setCart] = useStore((state) => {
    return [state.cart, state.setCart];
  }, shallow);

  // add item to cart
  const handleClick = (item) => {
    setCart({
      title: item.title,
      price: item.price,
    });
  };
  const handleClear = (item) => {
    console.log("clear", item);
  };

  useEffect(() => {
    // store to localStorage if new item added
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    console.log(getCart);
  }, []);

  return (
    <section>
      <div style={{ display: "flex", gap: "10px" }}>
        {data.map((item, id) => (
          <div key={id}>
            <h4>{item.title}</h4>
            <span style={{ display: "flex", gap: "5x" }}>
              <p>${item.price}</p>
              <button onClick={() => handleClick(item)}>+</button>
            </span>
          </div>
        ))}
      </div>

      <span>Your cart: {cart.length}</span>
      {cart != 0
        ? // cart have a value?
          cart.map((item, id) => (
            <div key={id}>
              <p>{item.title}</p>
              <button onClick={()=>handleClear(item)}>Clear Cart</button>
            </div>
          ))
        : // after refresh getCart will show and map the data
          getCart.map((item, id) => (
            <div key={id}>
              <p>{item.title}</p>
              <button onClick={()=>handleClear(item)}>Clear Cart getCart</button>
            </div>
          ))}
    </section>
  );
}

const data = [
  {
    title: "prod 1",
    price: 20,
  },
  {
    title: "prod 2",
    price: 10,
  },
  {
    title: "prod 3",
    price: 40,
  },
];


// still have a problem if user want to add new to cart after refresh it will replace cart previous
