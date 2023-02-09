import React, { useState } from "react";

const Counter = () => {
  const [counter, setCounter] = useState(1);

  const handleAdd = () => {
    setCounter(counter + 1);
  };

  const handleLess = () => {
    const newValue = counter > 0 ? counter - 1 : 0;
    setCounter(newValue);
  };

  return (
    <section className="counter">
      <button onClick={handleLess}>-</button>
      <span>{counter}</span>
      <button onClick={handleAdd}>+</button>
    </section>
  );
};

export default Counter;
