import Switch from '@mui/material/Switch';
import { useThemeStore } from '../utils/themeStore.js';

function Theme(){
    const theme = useThemeStore((state) => state.theme);
    const toggleTheme = useThemeStore((state) => state.toggleTheme);

    
    return(
        <div style={{ display: "flex", flexDirection: "row", alignItems: "center", marginLeft: "1.5%" } }>
            <h2 style={{ font: "Afacad flux", color: theme === "light" ? "white" : "black",
          }}>Cambiar tema</h2>
            <Switch onClick={toggleTheme} ></Switch>
            
          
        </div>

        
    )
}

export default Theme