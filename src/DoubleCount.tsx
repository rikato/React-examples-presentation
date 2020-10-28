import React, { useEffect, useState } from "react";

interface DoubleCountProps {
  amount: number;
}

const DoubleCount: React.FC<DoubleCountProps> = ({ amount }) => {
  const [doubleCountAmount, setDoubleCountAmount] = useState(amount);

  useEffect(() => {
    setDoubleCountAmount(amount * 2);
  }, [amount]);

  return (
    <>
      <p>{doubleCountAmount}</p>
    </>
  );
};

export default DoubleCount;
