import React, { useState } from "react";
import DoubleCount from "./DoubleCount";

const Counter = () => {
  const [count, setCount] = useState(0);

  const handleAddCountClick = () => {
    setCount(count + 1);
  };

  return (
    <>
      <p>{count}</p>
      <button onClick={handleAddCountClick}>+1</button>
      <DoubleCount amount={count} />
    </>
  );
};

export default Counter;
