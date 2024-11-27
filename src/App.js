import NavBar from './components/NavBar.js'
import Theme from './components/Theme.js'
import './css/Banner.css'
import { useThemeStore } from './utils/themeStore.js';
import { Routes, Route } from "react-router-dom";
import IngresarDivisas from './components/Divisas.js';
import ListaHoteles from './components/Hoteles.js';
import HomePage from './components/HomePage.js';

function App() {
  const theme = useThemeStore((state) => state.theme);
  
    
  return (
    <div style={{backgroundColor: theme === "light" ? "#41424C" : "#F8F6F0", minHeight:'100vh' }}>
      <div >
      <NavBar></NavBar>
      <br></br>
      <Theme/>
        <Routes >
          <Route path="/" element={<HomePage></HomePage>}></Route>
          <Route path= "/Divisas" element = {<IngresarDivisas/>}></Route>
          <Route path="/Hoteles" element={<ListaHoteles/>}/>
        </Routes>
        
      
    </div>
    </div>
    
    
  );
}

export default App;
