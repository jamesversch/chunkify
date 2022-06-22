import React from 'react';
import { NavLink } from 'react-router-dom';
import chunkifyImg from '../img/chunkify.png';

const Welcome = (props) => {
  return (
    <div className="welcome-page">
      <img src={chunkifyImg} alt="logo" className="welcome-img" />
      <NavLink className="homepage-nav" to="/fractionalize"><button type="button" className="homepage-btn">Begin Fractionalizing a New Plot</button></NavLink>
      <NavLink className="homepage-nav" to="/fractionalize"><button type="button" className="homepage-btn">View Existing Plots</button></NavLink>
    </div>
  );
};

export default Welcome;
