import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from './Card';

const Countries = () => {
  const [data, setData] = useState([]);
  const [sortedData, setSortedData]= useState([]);
  const [playOnce, setPlayOnce] =  useState(true);

  useEffect(() => {
    if (playOnce) {
      axios.get('https://restcountries.com/v3.1/all').then((res) => {
        setData(res.data)
        setPlayOnce(false);
      });
    }

    const sortedCountry = () => {
      const countryObj = Object.keys(data).map((i) => data[i]);
      const sortedArray = countryObj.sort((a,b) => {
        return b.population - a.population
      });
      console.log(sortedArray)
    };
    sortedCountry();
  }, [data]);

  return (
    <div className='countries'>
      <ul className="countries-list">
        {data.map((country) => (
          <Card country={country} key={country.name}/>
        ))}
      </ul>
    </div>
  );
};

export default Countries;
