import './App.css';
import React, { useState } from 'react';
function App(){
  const [number1, setNumber1] = useState(0);
  const [number2, setNumber2] = useState(0);
  const [total, setTotal] = useState(number1 + number2);
  function calculateTotal() {
    setTotal(number1 + number2);
  }
return (
 

  <div className="App">
    <h1>Adding Two Numbers</h1>

    <div className="number-inputs">
      <input
        type="number"
        value={number1}
        onChange={e => setNumber1(+e.target.value)}
        placeholder="0"
      />
      <input
        type="number"
        value={number2}
        onChange={e => setNumber2(+e.target.value)}
        placeholder="0"
      />
    </div>

    <button onClick={calculateTotal}>Add Them!</button>

    <h2>{total}</h2>
  </div>
);
}

export default App;