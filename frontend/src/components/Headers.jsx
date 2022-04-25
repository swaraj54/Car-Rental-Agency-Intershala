import React, {useState} from 'react';
import {AppBar,Typography, Toolbar,Tabs, Tab,Button} from '@mui/material';
import CarRentalIcon from '@mui/icons-material/CarRental';
import {NavLink} from "react-router-dom";

const Headers = ({props}) => {
  console.log(props)
    const [value, setValue] = useState();
  return (
    <div>
        <AppBar position="sticky">
            <Toolbar>
                <NavLink to="/" style={{color:"white"}} >
                <Typography> <CarRentalIcon/> </Typography>  
                </NavLink>
                <Tabs sx={{ml:"auto"}} textColor="inherit" value={value} indicatorColor="secondary" onChange={(e,val)=>setValue(val)} >
                    <Tab LinkComponent={NavLink} to="/cars" label="Cars"/>
                   { props.suser && props.suser._id ? <Tab LinkComponent={NavLink} to="/add" label="Add Car"/>: null}
                    <Tab LinkComponent={NavLink} to="/about" label="About us"/>
                    { props.user && props.user._id ? <Tab LinkComponent={NavLink} to="/cart" label="Cart"/>: null}
                    <Button variant="contained" onClick={()=>{ props.loginuser({})
                    props.sloginuser({})
                     alert("Logged Out Successfully") }}>Logout</Button>
                </Tabs>
            </Toolbar>
        </AppBar>
    </div>
  )
}

export default Headers;