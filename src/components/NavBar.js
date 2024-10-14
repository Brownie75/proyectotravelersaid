import MenuIcon from '@mui/icons-material/Menu';


function NavBar(){
    return(
        <header class="banner">
        <a href="" class= "logo_bann"><h1>Traveler's aid</h1></a>
        
        <nav class="btn_banner">
        <ul>
                
            <a class="about_us" href="/html/about_us.html">Acerca de nosotros</a>
                <li>
                    <a href="#" class="menu" ><MenuIcon sx={{ fontSize: 40 }}/></a>
                    
                    
                    <ul class="dropdown">
                        <li><a href="">Divisas</a></li>
                        <li><a href="">Casas de cambio</a></li>
                        <li><a href="">Viajes</a></li>
                        <li><a href="">Hoteles</a></li>
                        
                    </ul>
                </li>
            </ul>
        </nav>
    </header>
    )
}

export default NavBar