import NavBar from './components/NavBar.js'
import Theme from './components/Theme.js'
import './css/Banner.css'
import { useThemeStore } from './utils/themeStore.js';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const theme = useThemeStore((state) => state.theme);
  
    
  return (
    <div style={{backgroundColor: theme === "light" ? "#41424C" : "#F8F6F0", minHeight:'100vh' }}>
      <div >
      <NavBar/>
      <br></br>
      <Theme/>
        <BrowserRouter>
        <Routes>
        
        </Routes>
        </BrowserRouter>
      
    </div>
    </div>
    
    
  );
}

export default App;
