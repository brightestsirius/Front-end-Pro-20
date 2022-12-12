import React, { useState } from "react";

export default function FunctionalExample() {
  let [counter, setCounter] = useState(10); // [value, function for value modification]
  let [address, setAddress] = useState({
    country: `Ukraine`,
    city: `Kyiv`,
    zip: 123,
  });

  const decrement = () => setCounter((prevState) => prevState - 1);
  const increment = () => setCounter((prevState) => prevState + 1);

  const handleCounter = (e) => setCounter(+e.target.value);

  setTimeout(() => {
    setAddress((prevState) => ({ ...prevState, city: `Warsaw` }));
  }, 1000);

  setTimeout(() => {
    setAddress((prevState) => ({ ...prevState, country: `Poland` }));
  }, 1000);

  setTimeout(() => {
    setAddress((prevState) => ({ ...prevState, zip: 546 }));
  }, 1000);

  return (
    <div>
      <button onClick={decrement}>-</button>
      <span>{counter}</span>
      <button onClick={increment}>+</button>

      <hr></hr>
      <input type="number" onBlur={handleCounter} />

      <hr></hr>
      <ul>
        {Object.keys(address).map((k, i) => (
          <li key={i}>{address[k]}</li>
        ))}
      </ul>
    </div>
  );
}
