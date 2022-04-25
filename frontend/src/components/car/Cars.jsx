import React, { useEffect,useState } from 'react';
import axios from 'axios';
import Car from "./Car";
import './Car.css';

const URL = "http://localhost:2323/cars";

const fetchHandler = async () => {
  return await axios.get(URL).then((res)=>res.data)
}

const Cars = ({props}) => {
  const [cars, setCars] = useState();
  useEffect(()=>{
    fetchHandler().then((data)=> setCars(data.car))
   
  },[]);
  return (
    <div>
      
      <div className="ul">
      {cars && cars.map((ccar, i)=>(
        <div className="li" key={i}>
          <Car props={props} ccar={ccar} key={i}/>
        </div>
      ))}
      </div>
    </div>
  )
}

export default Cars