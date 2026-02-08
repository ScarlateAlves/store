"use client";

import { useState } from "react";
import { Button } from "../../components/ui/Button";

export default function Contador() {
  const [count, setCount] = useState<number>(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    if (count < 1) return;
    return setCount(count - 1);
  };
  return (
    <div>
      <h1>Contador</h1>
      <div className="flex gap-3 items-center">
        <Button onClick={handleIncrement}>mais</Button>
        <p>Contagem {count}</p>
        <Button onClick={handleDecrement}>menos</Button>
      </div>
    </div>
  );
}
