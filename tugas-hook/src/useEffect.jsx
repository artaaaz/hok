import React, { useState, useEffect } from 'react';


function DataFetcher() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

 
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(json => {
        setData(json);
        setLoading(false);
      });
  }, []); 

  if (loading) return <p>Loading...</p>;

  return <pre>{JSON.stringify(data, null, 2)}</pre>;
}