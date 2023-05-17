import React from "react";
import { useStore } from "../stores/store";
import { shallow } from "zustand/shallow";

export default function Count() {
  const [count, increase, decrease] = useStore((state) => {
    console.log("count exec")
    return [state.count, state.increase, state.decrease];
  }, shallow);
  return (
    <section>
      <button onClick={decrease}>-</button>
      <p>{count}</p>
      <button onClick={increase}>+</button>
    </section>
  );
}
