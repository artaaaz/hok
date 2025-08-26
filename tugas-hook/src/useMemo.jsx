import React, { useState, useMemo } from 'react';

function expensiveCalculation(num) {
  console.log('🔄 Perhitungan ulang...');
  let result = 0;
  for (let i = 0; i < 1000000000; i++) { // Simulasi perhitungan berat
    result += num;
  }
  return result;
}

export default function ExpensiveCalculation() {
  const [number, setNumber] = useState(1);
  const [theme, setTheme] = useState(false); // false = light, true = dark

  const calculation = useMemo(() => expensiveCalculation(number), [number]);

  const themeStyle = {
    backgroundColor: theme ? '#333' : '#fff',
    color: theme ? '#fff' : '#000',
    padding: '10px',
    textAlign: 'center'
  };

  return (
    <div style={themeStyle}>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(parseInt(e.target.value))}
      />
      <h2>Hasil: {calculation}</h2>
      <button onClick={() => setTheme(prev => !prev)}>Ganti Tema</button>
    </div>
  );
}