import MenuIcon from '@mui/icons-material/Menu';

function NavBar(){
    return(
        <header class="banner">
        <a href="" class= "logo_bann"><h1>Traveler's aid</h1></a>
        <nav class="btn_banner">
            <ul>
                <a class="about_us" href="/html/about_us.html">Acerca de nosotros</a>
                <li>
                    <a href="#" class="menu"><MenuIcon/></a>
                    
                    
                    <ul class="dropdown">
                        <li><a href="">Inicio</a></li>
                        <li><a href="">Perfil</a></li>
                        <li><a href="">Contacto</a></li>
                        <li><a href="">Registro/Inicio de sesión</a></li>
                        
                    </ul>
                </li>
            </ul>
        </nav>
    </header>
    )
}

export default NavBar