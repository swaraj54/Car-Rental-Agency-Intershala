import React from 'react';
import '../components/car/Car.css';
import {NavLink} from "react-router-dom";
import {Button} from '@mui/material';

const Welcome = () => {
  return (
    <div className="wel">
        <h1>Welcome to Intershala Car Rental Services</h1>
        <h2>Here you can Buy and Rent your Car.</h2>
        <NavLink to="/add" style={{color:"white"}}>
        <Button variant="outlined">Click here To Add your Car for rent</Button>
        </NavLink>
    </div>
  )
}

export default Welcome