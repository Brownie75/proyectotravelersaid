import { useEffect } from "react"
import NavBarFill from "./NavBarFill";
import styles from '../css/homepage.module.css'
import mapa from '../mapa.png'
import { useThemeStore } from "../utils/themeStore";

export default function HomePage() {

    const {theme} = useThemeStore();
    
    async function getIpInfo(){
        if(!localStorage.getItem("loc")){
            const loc_data = await fetch("https://ipinfo.io?token=7f7adabff145fe")
            .then(response => response.json())
            localStorage.setItem("loc",JSON.stringify(loc_data))
        }
    }
    useEffect(() => {
        getIpInfo();
    }, [])
    
    return (
        <div>
            <NavBarFill/>
            <div className={styles.Fondo_imagen}>
            </div>
            <div style={{display: "flex", alignItems: "center", justifyContent: "center", padding: "50px"}}>
                <img src={mapa} height={200} width={200}></img>
                <div style={{width: "40%", paddingLeft: "50px", color: theme == 'light' ? 'white' : 'black'}}>
                    <h3 className={styles.h3} style={{letterSpacing: "10%"}}>Te encuentras en:</h3>
                    <h3 className={styles.h3} style={{letterSpacing: "10%"}}>{JSON.parse(localStorage.getItem('loc')).city}, {JSON.parse(localStorage.getItem("loc")).city}</h3>
                </div>
            </div>
        </div>
        
    )
}