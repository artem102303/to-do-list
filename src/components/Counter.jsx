import { useState } from "react";
export default function Counter() {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);

  const handleIncrease = () => {
    const next = count + Number(step);
    setCount(next);
  };

  const handleDecrease = () => {
    const next = count - Number(step);
    if (next < 0) {
      setCount(0);
      return;
    }
    setCount(next);
  };

  return (
    <div className="counter">
      <h1
        style={{
          color: count >= 50 ? "red" : "black",
        }}
      >
        {count}
      </h1>

      <div className="controls">
        <button onClick={handleDecrease}>-</button>
        <button onClick={handleIncrease}>+</button>
      </div>

      <div style={{ marginTop: "10px" }}>
        <label>Крок: </label>
        <input
          type="number"
          value={step}
          min="1"
          onChange={(e) => setStep(e.target.value)}
        />
      </div>
    </div>
  );
}