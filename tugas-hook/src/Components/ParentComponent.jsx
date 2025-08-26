import React, { useState, useCallback } from 'react';
import List from './list.jsx';

export default function ParentComponent() {
  const [count, setCount] = useState(0);

  const getItems = useCallback(() => {
    return [count, count + 1, count + 2];
  }, [count]);

  return (
    <div style={{ textAlign: 'center', marginTop: '20px' }}>
      <button onClick={() => setCount(prev => prev + 1)}>Tambah</button>
      <List getItems={getItems} />
    </div>
  );
}