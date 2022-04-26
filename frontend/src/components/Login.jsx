import React,{useState} from 'react';
import {useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = (props) => {
  // console.log("propsp",props)
  const history = useNavigate();
  const [user, setUser] = useState({
    mail:"",
    password:"",
});
const handlechange = (e) => {
  const {name, value} = e.target;
  setUser({
      ...user,
      [name]:value
  })
};
const login = () => {
  axios.post("http://localhost:2323/login", user)
  .then((res)=>{
       alert(res.data.message)
       props.loginuser(res.data.user)
       history('/')
      })
}
const [suser, setSuser] = useState({
  smail:"",
  spassword:"",
});
const shandlechange = (e) => {
const {name, value} = e.target;
setSuser({
    ...suser,
    [name]:value
})
};
const slogin = () => {
axios.post("http://localhost:2323/selllogin", suser)
.then((res)=>{
     alert(res.data.message)
     props.sloginuser(res.data.suser)
     history('/')
    })
}
  return (
  
    <div className='log'>
      <div>
        <h1>Login to Buy Car</h1>
        <input type="text" name="mail" value={user.mail} onChange={handlechange} placeholder="Email.."  /><br/>
        <input type="password" name="password" value={user.password} onChange={handlechange} placeholder="Password.."/>
        <br/>
        <button  onClick={login} >Login</button>
        <div>Or</div>
        <button onClick ={()=> history('/register')}>Register</button>
      </div>
      <div>
        <h1>Login to Sell Car</h1>
        <input type="mail" name="smail" value={suser.smail} onChange={shandlechange} placeholder="Email.."  /><br/>
        <input type="password" name="spassword" value={suser.spassword} onChange={shandlechange} placeholder="Password.."/>
        <br/>
        <button  onClick={slogin} >Login</button>
        <div>Or</div>
        <button onClick ={()=> history('/register')}>Register</button>
      </div>
    </div>
  )
}

export default Login