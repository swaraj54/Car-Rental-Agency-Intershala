import React from 'react';
import '../components/car/Car.css';
import {NavLink} from "react-router-dom";
import {Button} from '@mui/material';

const WelcomeCust = () => {
  return (
    <div className="wel">
        <h1>Welcome to Intershala Car Rental Services</h1>
        <h2>Here you can Buy and Rent your Car.</h2>
        <NavLink to="/cars" style={{color:"white"}}>
        <Button variant="outlined">Click here To Buy Car on Rent</Button>
        </NavLink>
    </div>
  )
}

export default WelcomeCust