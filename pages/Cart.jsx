import React, { useEffect, useState } from "react";
import { useStore } from "../stores/store";
import { shallow } from "zustand/shallow";

export default function Count() {
  const [cart, setCart, setRemoveCart] = useStore((state) => {
    return [state.cart, state.setCart, state.setRemoveCart];
  }, shallow);

  const handleClick = (item) => {
    setCart({
      title: item.title,
      price: item.price,
    });
  };
  const handleRemove = (index) => {
    setRemoveCart(index);
    console.log("rmv");
  };

  const total = cart.reduce((acc, item) => acc + item.price, 0);

  return (
    <section>
      <div style={{ display: "flex", gap: "10px" }}>
        {data.map((item, id) => (
          <div key={id}>
            <h4>{item.title}</h4>
            <p>${item.price}</p>
            <button onClick={() => handleClick(item)}>Add</button>
          </div>
        ))}
      </div>

      <br />
      <div style={{ display: "flex", gap: "10px" }}>
        <span>Cart: {cart.length}</span>
        <span>Total: {total}</span>
      </div>
      <div style={{ display: "flex", gap: "10px" }}>
        {cart.map((item, id) => (
          <div key={id}>
            <p>{item.title}</p>
            <button onClick={() => handleRemove(id)}>Rmv</button>
          </div>
        ))}
      </div>
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
