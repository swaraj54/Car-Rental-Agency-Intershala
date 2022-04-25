import React from 'react';
import AddCar from "./AddCar";
import Cars from "./car/Cars";
import About from "./About";
import CarDetail from "./car/CarDetail";
import Headers from './Headers';
import {Routes,Route} from "react-router-dom";
import Cart from './Cart';
import Welcome from './Welcome';
import WelcomeCust from './WelcomeCust';

const Home = (props) => {
  return (
    <div>
        <header>
          <Headers props={props}/>
        </header>  
        <main>
          <Routes>
          <Route path="/" element={props.suser && props.suser._id ? <Welcome /> : <WelcomeCust />} ></Route>
            <Route path="/add" element={props.suser && props.suser._id ? <AddCar/> : null}  exact />
            <Route path="/cars" element={<Cars props={props}/>}  exact />
            <Route path="/about" element={<About/>}  exact />
            <Route path="/cars/:id" element={<CarDetail/>} exact />
            <Route path="/cart" element={props.suser && props.suser._id ? null : <Cart/>}  exact />
          </Routes>
      </main> 
    </div>
  )
}

export default Home