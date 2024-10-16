import Switch from '@mui/material/Switch';
import { useThemeStore } from '../utils/themeStore.js';

function Theme(){
    const theme = useThemeStore((state) => state.theme);
    const toggleTheme = useThemeStore((state) => state.toggleTheme);

    document.body.style.background= {color: theme === "light" ? "#41424C" : "#F8F6F0"} ;
    return(
        <div style={{ display: "flex", flexDirection: "row", marginTop: "3%", alignItems: "center", marginLeft: "1.5%" } }>
            
            <h2 style={{ font: "Afacad flux", color: theme === "light" ? "white" : "black",
          }}>Modo oscuro</h2>
            <Switch onClick={toggleTheme} defaultChecked></Switch>
        </div>

        
    )
}

export default Theme