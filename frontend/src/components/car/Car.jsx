import React from 'react';
import {Button} from "@mui/material";
import {Link} from 'react-router-dom';
import './Car.css';
import axios from 'axios';
import {useNavigate} from "react-router-dom";

const Car = (props) => {
    const history = useNavigate();
    const {_id, model, number, seating, rent, image} = props.ccar;
    
    const deleteHandler = async () => {
      await axios.delete(`http://localhost:2323/cars/${_id}`)
      .then((res)=> res.data)
    }
    const dele = () => {
      alert("Car Deleted" )
      deleteHandler().then(()=> history("/"))
    }
    const sendRequest = async () => {
      await axios.post(`http://localhost:2323/cartproducts`, {
        model:String(model),
        number:String(number),
        seating:String(seating),
        rent:Number(rent),
        image:String(image),
      }).then(res=> res.data);
    } 
      const handleSend = () => {
          alert("Car Successfully Booked" )
          sendRequest().then(()=> history("/cart"))
      }
  return (
    <div className="card">
        <img src={image} />
        <article>Model Name: <b>{model}</b> </article>
        <article>Car Number: <b>{number}</b></article>
        <article>Seating Capacity: <b>{seating} People</b></article>
        <article>Rent per Day: <b>{rent}Rs.</b></article>

        {props.props.user && props.props.user._id ? null : <Button variant="contained" LinkComponent={Link} to={`./${_id}`} sx={{mt:0,height:"20px"}}>Update</Button>}
        {props.props.user && props.props.user._id ? null : <Button variant="contained" onClick={dele()} sx={{mt:0.5,height:"20px"}}>Delete</Button>}
        {props.props.user && props.props.user._id ? <Button onClick={()=> handleSend() }  variant="contained"  sx={{mt:0.5, height:"20px"}} >Add to Cart</Button> : null}
    </div>
  )
}

export default Car