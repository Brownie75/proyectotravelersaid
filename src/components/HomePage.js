import { useEffect, useState } from "react"
import NavBarFill from "./NavBarFill";
import styles from '../css/homepage.module.css'
import mapa from '../mapa.png'
import expandir from '../boton-de-expansion.png'
import { useThemeStore } from "../utils/themeStore";

export default function HomePage() {

    const {theme} = useThemeStore();
    const [collapse, setCollapse] = useState(false);
    const [collapse2, setCollapse2] = useState(false)
    
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

    function toggleOpen(e, type) {
        e.target.classList.toggle(styles.checked);
        switch(type){
            case 1: 
                setCollapse(!collapse);
                break;
            case 2:
                setCollapse2(!collapse2);
                break;
        }  
    }
    
    return (
        <div>
            <NavBarFill/>
            <div className={styles.Fondo_imagen}>
            </div>
            <div style={{display: "flex", alignItems: "center", justifyContent: "center", padding: "70px 50px"}}>
                <img src={mapa} height={200} width={200}></img>
                <div style={{width: "40%", paddingLeft: "50px", color: theme == 'light' ? 'white' : 'black'}}>
                    <h3 className={styles.h3} style={{letterSpacing: "10%"}}>Te encuentras en:</h3>
                    <h3 className={styles.h3} style={{letterSpacing: "10%"}}>{JSON.parse(localStorage.getItem('loc')).city}, {JSON.parse(localStorage.getItem("loc")).city}</h3>
                </div>
            </div>
            <div style={{paddingBottom: "30px"}}>
                <div className={styles.recommendations_selector} onClick={(e) => toggleOpen(e,1)}>
                    <h4>Recomendaciones</h4>
                    <img height={40} width={40} src={expandir} className={styles.expand_img}></img>
                </div>
                    <div className={styles.recommendations_box} style={{display: collapse ? "block":"none", borderRadius: "25px"}}>
                        { collapse ? 
                        <div style={{paddingTop: "50px"}}>
                            <p></p>
                            <img height={150} width={150}></img>
                        </div>: ""}
                    </div>
            </div>

            <div style={{display: "flex", justifyContent: "center", color: theme == 'light' ? 'white' : 'black',paddingBottom: "30px"}}>
                <div style={{width: "60%", letterSpacing: "3px"}}>
                    <h3>¿Necesitas cambiar dinero?</h3>
                    <h3>Calcula la conversión a la moneda local</h3>
                </div>
                <button className={styles.convert_button}>
                    Convierte divisas
                </button>
            </div>

            <div style={{paddingBottom: "30px"}}>
                <div className={styles.recommendations_selector} onClick={(e) => toggleOpen(e,2)}>
                    <h4>Lugares turísticos de la región</h4>
                    <img height={40} width={40} src={expandir} className={styles.expand_img}></img>
                </div>
                    <div className={styles.recommendations_box} style={{display: collapse2 ? "block":"none", borderRadius: "25px"}}>
                        { collapse2 ? 
                        <div style={{paddingTop: "50px"}}>
                            <p></p>
                            <img height={150} width={150}></img>
                        </div>: ""}
                    </div>
            </div>
        </div>
        
    )
}