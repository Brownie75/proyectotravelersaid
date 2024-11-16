import logo from './logo.svg';
import './App.css';
import {Routes, Route} from 'react-router-dom'
import IngresarDivisas from './components/Divisas';
import Theme from './components/Theme';
import NavBar from './components/NavBar'

function App() {
  return (
    <div style={{backgroundColor: theme === "light" ? "#41424C" : "#F8F6F0", minHeight:'100vh' }}>
      <div >
      <NavBar></NavBar>
      <Theme/>
        <Routes >
          <Route path= "/Divisas" element = {<IngresarDivisas/>}></Route>
          <Route path= "/Casas"></Route>
          <Route path= "/Viajes"></Route>
          <Route path= "/Hoteles"></Route>
        </Routes>
    </div>
    </div>
  );
}

export default App;
