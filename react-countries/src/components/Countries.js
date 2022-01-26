import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Countries = () => {
  const [data, setData] = useState([]);

  useEffect(() => {

    axios.get('https://restcountries.com/v3.1/all').then((res) => setData(res.data));

    console.log(data);

  }, []);

  return (
    <div className='countries'>
      <ul className="countries-list">
        {data.map((country) => (
          <li>{country.name.common}</li>
        ))}
      </ul>
    </div>
  );
};

export default Countries;
