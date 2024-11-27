import MenuIcon from '@mui/icons-material/Menu';
import { useThemeStore } from '../utils/themeStore.js';


  
function NavBar(){
    const theme = useThemeStore((state) => state.theme);
    return(
        <header class="banner" style={{ backgroundColor: theme === "light" ? "#41424C" : "#F8F6F0",
        }}>
        <a href="" class= "logo_bann" style={{ font: "Afacad flux", color: theme === "light" ? "white" : "black",
          }}><h1>TRAVELER'S AID</h1></a>
        
        <nav class="btn_banner">
        <ul style={{ backgroundColor: theme === "light" ? "#41424C" : "#F8F6F0",
        }}>
                
            
                <li>
                    <a href="/Divisas" class="menu" style={{ font: "Afacad flux", color: theme === "light" ? "white" : "black",
          }}><MenuIcon sx={{ fontSize: 40 }}/></a>
                    
                    <ul class="dropdown" style={{ backgroundColor: theme === "light" ? "#41424C" : "#F8F6F0"
        }}>
                        <li><a href="/Divisas"style={{ color: theme === "light" ? "white" : "black"
          }}>Divisas</a></li>
                        <li><a href="/Casas"style={{ color: theme === "light" ? "white" : "black",
          }}>Casas de cambio</a></li>
                        <li><a href="#"style={{ color: theme === "light" ? "white" : "black",
          }}>Viajes</a></li>
                        <li><a href="Hoteles"style={{ color: theme === "light" ? "white" : "black",
          }}>Hoteles</a></li>
                        
                    </ul>
                </li>
            </ul>
        </nav>
    </header>
    )
}

export default NavBar