import {useState} from 'react';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import {BrowserRouter as Router, Routes,Route} from "react-router-dom";


function App() {
  const [user, loginuser] = useState({});
  const [suser, sloginuser] = useState({});
  return (
    <div className="App">
      <Router>
      <Routes>
          <Route exact path="/*" element={(user && user._id) || (suser && suser._id) ? <Home user={user} suser={suser} sloginuser={sloginuser} loginuser={loginuser}/> :<Login sloginuser={sloginuser}  loginuser={loginuser } /> } />
          {/* <Route exact path="/sellerhomepage" element={suser && suser._id ? <Homepage2 sloginuser={sloginuser}/> :<Login sloginuser={sloginuser} loginuser={loginuser } /> } />  */}
          <Route exact path="/login" element={<Login sloginuser={sloginuser} loginuser={loginuser}  />} />
          <Route exact path="/register" element={<Register />} />
        </Routes>
        </Router>
        
    </div>
  );
}

export default App;
