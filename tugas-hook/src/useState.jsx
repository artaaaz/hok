import React, { useState } from 'react';
import './State.css'; 

function Counter() {
  const [count, setCount] = useState(0);

  const tambah = () => setCount(count + 1);

  return (
    <div>
      <h1>Hitungan: {count}</h1>
      <button onClick={tambah}>Tambah</button>
    </div>
  );
}

export default Counter;

