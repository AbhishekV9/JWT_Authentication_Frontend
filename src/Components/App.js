import React, {useState} from "react";
import { Route, Routes } from 'react-router-dom';
import { Header } from './Header';
import { Home } from './Home';
import { Signin } from './Signin';
import { Signup } from './Signup';

function App() {
  const [authorization, setAuthorization] = useState(false);

  const handlesetAuthorization=(value)=>{
    setAuthorization(value)
  }
 
  return (
    <div className="App">
      <Header authorized={authorization} handlesetAuthorization={handlesetAuthorization}/>
      <Routes>
        <Route
          path='/'
          element={<Signup handlesetAuthorization={handlesetAuthorization}/>}
        />
         <Route
          path='/signin'
          element={<Signin handlesetAuthorization={handlesetAuthorization}/>}
        />
        <Route
          path="/home"
          element={<Home handlesetAuthorization={handlesetAuthorization} />}
        />

      </Routes>
    </div>
  );
}

export default App;
