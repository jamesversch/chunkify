import React from 'react';
import data from '../data.json';

const Fractionalize = () => {
  return (
    <div className="fractionalize-page">
      <h1>Begin Fractionalizing a Plot Now!</h1>
      <p className="instructions">{data.fractionalize}</p>
      <input type="text" />
    </div>
  );
};

export default Fractionalize;
