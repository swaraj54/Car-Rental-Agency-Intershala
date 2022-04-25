import React,{useState} from 'react';
import {useNavigate } from 'react-router-dom';
import axios from 'axios';

const Register = () => {
  const history = useNavigate();
  const [user, setUser] = useState({
    name:"",
    mail:"",
    password:"",
    repassword:""
});
const handlechange = (e) => {
  const {name, value} = e.target;
  setUser({
      ...user,
      [name]:value
  })
};
const register = () => {
  const { name, mail, password,repassword} = user;
  if(name && mail && password && (password===repassword)){
      axios.post("http://localhost:2323/register", user)
      .then((res)=> {alert(res.data.message)
          res.data.message === "Already registered" ? history('/register') : history('/login')})
  } else {
     alert("Invalid") 
  }

}
const [suser, setSuser] = useState({
  sname:"",
  smail:"",
  spassword:"",
  srepassword:""
});
const shandlechange = (e) => {
const {name, value} = e.target;
setSuser({
    ...suser,
    [name]:value
})
};
const sregister = () => {
const { sname, smail, spassword,srepassword} = suser;
if(sname && smail && spassword && (spassword===srepassword)){
    axios.post("http://localhost:2323/sellregister", suser)
    .then((res)=> {alert(res.data.message)
        res.data.message === "Already registered" ? history('/register') : history('/login')})
    
} else {
   alert("Invalid") 
}

}
  return (
    <div>
      <div>
        <h1>Register as Buyer</h1>
        <input type="text" name="name" value={user.name} onChange={handlechange} placeholder="Name.."  />
        <input type="text" name="mail" value={user.mail} onChange={handlechange} placeholder="Email.."  />
        <input type="password" name="password" value={user.password} onChange={handlechange} placeholder="Password.."/>
        <input type="password" name="repassword" value={user.repassword} onChange={handlechange} placeholder="Re-Enter Password.."/>
        <button onClick={register}>Register</button>
        <div>Or</div>
        <button onClick={()=> history('/login')}>Login</button>
      </div>
      <div>
        <h1>Register as Seller</h1>
        <input type="text" name="sname" value={suser.sname} onChange={shandlechange} placeholder="Name.."  />
        <input type="text" name="smail" value={suser.smail} onChange={shandlechange} placeholder="Email.."  />
        <input type="password" name="spassword" value={suser.spassword} onChange={shandlechange} placeholder="Password.."/>
        <input type="password" name="srepassword" value={suser.srepassword} onChange={shandlechange} placeholder="Re-Enter Password.."/>
        <button onClick={sregister}>Register</button>
        <div>Or</div>
        <button onClick={()=> history('/login')}>Login</button>
      </div>
    </div>
  )
}

export default Register