import React from 'react';
import './Country.css';

const Country = (props) => {

     const { name, capital, population, flags } = props.country;
     console.log(props.country);
     return (
          <div className="country">
               <h2>country name : {name.common}</h2>
               <h4>capital : {capital}</h4>
               <p>Country Population : {population}</p>
               <img src={flags.png} alt="" />

          </div>
     );
};

export default Country;