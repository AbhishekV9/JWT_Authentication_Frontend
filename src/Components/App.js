import { Route, Routes } from 'react-router-dom';
import { Header } from './Header';
import { Home } from './Home';
import { Signin } from './Signin';
import { Signup } from './Signup';

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route
          path='/'
          element={<Signup/>}
        />
         <Route
          path='/signin'
          element={<Signin/>}
        />
        <Route
          path="/home"
          element={<Home/>}
        />

      </Routes>
    </div>
  );
}

export default App;
