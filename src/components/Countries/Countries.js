import React, { useEffect, useState } from 'react';
import Country from '../Country/Country';
import './Countries.css';

const COuntries = () => {
     const [countries, setCountries] = useState([]);
     useEffect(() => {
          fetch('https://restcountries.com/v3.1/all')
               .then(res => res.json())
               .then(data => setCountries(data))
     }, [])
     return (
          <div >
               <h2>Journey react rest country.</h2>
               <div className="container">
                    {countries.map(country => <Country
                         country={country}
                         key={country.name.common}
                    ></Country>)}
               </div>
          </div>
     );
};

export default COuntries;