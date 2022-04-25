import React,{useEffect,useState} from 'react';
import {useParams,useNavigate} from 'react-router-dom';
import axios from 'axios';
import {Box, FormLabel, TextField,Button,Checkbox,FormControlLabel, Typography } from '@mui/material';

const CarDetail = () => {
    const [inputs, setInputs] = useState({});
    const id = useParams().id;
    const history = useNavigate();
    useEffect(()=>{
        const fetchHandler = async () => {
            await axios.get(`http://localhost:2323/cars/${id}`)
            .then((res)=> res.data).then(data => setInputs(data.car))
        }
        fetchHandler()
    },[id]);

    const sendRequest = async () => {
        await axios.put(`http://localhost:2323/cars/${id}`, {
          model:String(inputs.model),
          number:String(inputs.number),
          seating:String(inputs.seating),
          rent:Number(inputs.rent),
            image:String(inputs.image),
        }).then(res=> res.data)
    } 
    const handleSubmit = (e) => {
        e.preventDefault();
        sendRequest().then(()=> history("/cars"))
    }
    const handleChange = (e) => {
        setInputs((prevState)=>({
            ...prevState,
            [e.target.name] : e.target.value,
          }));
    }
  return (
    <div>
      { inputs && <form onSubmit={handleSubmit} >
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
        <FormLabel>model</FormLabel>
        <TextField value={inputs.model} onChange={handleChange} margin="normal" fullWidth variant="outlined" name="model" />
        <FormLabel>number</FormLabel>
        <TextField value={inputs.number} onChange={handleChange}  margin="normal" fullWidth variant="outlined" name="number" />
        <FormLabel>seating</FormLabel>
        <TextField value={inputs.seating} onChange={handleChange}  margin="normal" fullWidth variant="outlined" name="seating" />
        <FormLabel>rent</FormLabel>
        <TextField value={inputs.rent} onChange={handleChange}  type="number" margin="normal" fullWidth variant="outlined" name="rent" />
        <FormLabel>Image</FormLabel>
        <TextField value={inputs.image} onChange={handleChange}  margin="normal" fullWidth variant="outlined" name="image" />
        <Button type="submit" variant="contained"> Add Car</Button>
      </Box>
    </form>}
    </div>
  )
}

export default CarDetail