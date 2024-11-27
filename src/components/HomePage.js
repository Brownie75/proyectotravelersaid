import { useEffect, useState } from "react"
import NavBarFill from "./NavBarFill";
import styles from '../css/homepage.module.css'
import mapa from '../mapa.png'
import expandir from '../boton-de-expansion.png'
import recommend from '../recommendations.json'
import { useThemeStore } from "../utils/themeStore";
import { useNavigate } from "react-router-dom";

export default function HomePage() {

    const {theme} = useThemeStore();
    const [collapse, setCollapse] = useState(false);
    const [collapse2, setCollapse2] = useState(false)
    const navigate = useNavigate();
    
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
            default:
                break;
        }  
    }
    const loc_data = JSON.parse(localStorage.getItem("loc"));
    console.log(recommend[loc_data.region][loc_data.city])
    
    return (
        <div>
            <NavBarFill/>
            <div className={styles.Fondo_imagen}>
            </div>
            <div style={{display: "flex", alignItems: "center", justifyContent: "center", padding: "70px 50px"}}>
                <img src={mapa} height={200} width={200} alt="icon_map"></img>
                <div style={{width: "40%", paddingLeft: "50px", color: theme === 'light' ? 'white' : 'black'}}>
                    <h3 className={styles.h3} style={{letterSpacing: "10%"}}>Te encuentras en:</h3>
                    <h3 className={styles.h3} style={{letterSpacing: "10%"}}>{JSON.parse(localStorage.getItem('loc')).city}, {JSON.parse(localStorage.getItem("loc")).city}</h3>
                </div>
            </div>
            <div style={{paddingBottom: "30px"}}>
                <div className={styles.recommendations_selector} onClick={(e) => toggleOpen(e,1)}>
                    <h4>Recomendaciones</h4>
                    <img height={40} width={40} src={expandir} className={styles.expand_img} alt="expandir"></img>
                </div>
                    <div className={styles.recommendations_box} style={{display: collapse ? "block":"none", borderRadius: "25px"}}>
                        { collapse ? 
                        <div style={{paddingTop: "50px"}}>
                            <p></p>
                            <img height={150} width={150} alt="imagen_ref"></img>
                        </div>: ""}
                    </div>
            </div>

            <div style={{display: "flex", justifyContent: "center", color: theme === 'light' ? 'white' : 'black',paddingBottom: "30px"}}>
                <div style={{width: "60%", letterSpacing: "3px"}}>
                    <h3>¿Necesitas cambiar dinero?</h3>
                    <h3>Calcula la conversión a la moneda local</h3>
                </div>
                    <button className={styles.convert_button} onClick={() => navigate("/Divisas")}>
                        Convierte divisas
                    </button>
            </div>

            <div style={{paddingBottom: "30px"}}>
                <div className={styles.recommendations_selector} onClick={(e) => toggleOpen(e,2)}>
                    <h4>Lugares turísticos de la región</h4>
                    <img height={40} width={40} src={expandir} className={styles.expand_img} alt="recom_img"></img>
                </div>
                    <div className={styles.recommendations_box} style={{display: collapse2 ? "block":"none", borderRadius: "25px"}}>
                        { collapse2 ? 
                        <div style={{paddingTop: "50px", display: "flex", justifyContent: "center"}}>
                            <div className={styles.recommend_table}>
                                {recommend[loc_data.region][loc_data.city].recommendations.map((elem, index) => {
                                    return <div key={index} className={styles.recom}>
                                        <h3>{elem.option}</h3>
                                        <p>{elem.desc}</p>
                                    </div>
                                })}
                            </div>
                            <img className={styles.recom_img} src={recommend[loc_data.region][loc_data.city].url} alt="puertaChih"></img>
                        </div>: ""}
                    </div>
            </div>
        </div>
        
    )
}