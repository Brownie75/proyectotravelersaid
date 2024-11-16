
function NavBar(){
    return(
        <header class="banner">
        <a href="" class= "logo_bann"><h1>Chef en Casa</h1></a>
        <nav class="btn_banner">
            <ul>
                <a class="about_us" href="/html/about_us.html">Acerca de nosotros</a>
                <li>
                    <a href="/Divisas" class="menu" style={{ font: "Afacad flux", color: theme === "light" ? "white" : "black",
          }}><MenuIcon sx={{ fontSize: 40 }}/></a>
                    
                    <ul class="dropdown" style={{ backgroundColor: theme === "light" ? "#41424C" : "#F8F6F0"
        }}>
                        <li><a href="/Divisas"style={{ color: theme === "light" ? "white" : "black"
          }}>Divisas</a></li>
                        <li><a href="/Casas"style={{ color: theme === "light" ? "white" : "black",
          }}>Casas de cambio</a></li>
                        <li><a href="/Viajes"style={{ color: theme === "light" ? "white" : "black",
          }}>Viajes</a></li>
                        <li><a href="/Hoteles"style={{ color: theme === "light" ? "white" : "black",
          }}>Hoteles</a></li>
                        
                    </ul>
                </li>
            </ul>
        </nav>
    </header>
    )
}