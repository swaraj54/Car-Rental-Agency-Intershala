import { FormLabel, TextField,Button} from '@mui/material';
import {Box} from '@mui/system';
import axios from 'axios';
import React,{useState} from 'react';
import {useNavigate} from 'react-router-dom';

const AddCar = () => {
  const history = useNavigate();
  const [ inputs, setInputs ] = useState({
    model:"",
    number:"",
    seating:"",
    rent:"",
    image:""
  });
  const handleChange = (e) => {
    setInputs((prevState)=>({
      ...prevState,
      [e.target.name] : e.target.value,
    }));
  };
  const sendRequest = async ()=>{
    await axios.post("http://localhost:2323/cars",{
      model:String(inputs.model),
      number:Number(inputs.number),
      seating:Number(inputs.seating),
      rent:Number(inputs.rent),
      image:String(inputs.image),
    }).then((res)=> res.data)
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    sendRequest().then(()=> alert("Car added for Rent")).then(()=> history("/cars"))
  }
  return (
    <form onSubmit={handleSubmit} >
      <Box 
      display="flex"
       flexDirection="column" 
        justifyContent={"center"}
        maxWidth={700}
        alignContent={"center"}
        alignSelf="center"
        marginLeft={"auto"}
        marginRight="auto"
        marginTop={5}
      >
        <FormLabel>Model</FormLabel>
        <TextField value={inputs.model} onChange={handleChange} margin="normal" fullWidth variant="outlined" name="model" />
        <FormLabel>Number</FormLabel>
        <TextField value={inputs.number} onChange={handleChange}  margin="normal" fullWidth variant="outlined" name="number" />
        <FormLabel>Seating</FormLabel>
        <TextField value={inputs.seating} onChange={handleChange}  margin="normal" fullWidth variant="outlined" name="seating" />
        <FormLabel>Rent</FormLabel>
        <TextField value={inputs.rent} onChange={handleChange}  type="number" margin="normal" fullWidth variant="outlined" name="rent" />
        <FormLabel>Image</FormLabel>
        <TextField value={inputs.image} onChange={handleChange}  margin="normal" fullWidth variant="outlined" name="image" />
        <Button type="submit" variant="contained"> Add Car</Button>
      </Box>
    </form>
  )
}

export default AddCar;