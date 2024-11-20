import NavBarFill from "./NavBarFill";
import styles from '../css/hotels.module.css'
import { useState, useEffect, useMemo } from "react";
import Cookies from "universal-cookie";
import sites_data from "../hotels.json"

export default function ListaHoteles(){

    
    const [hotels, setHotels] = useState([])
    
    const cookies = useMemo(() => new Cookies(),[])
    var sites = useMemo(() => sites_data, [])
        
    useEffect(() => {
        
        async function getInfo(){
            if(!localStorage.getItem("loc")){
                const loc_data = await fetch("https://ipinfo.io?token=7f7adabff145fe")
                .then(response => response.json())
                localStorage.setItem("loc",JSON.stringify(loc_data))
            }
    
            if(localStorage.getItem('hotelInfo')){
                const info = JSON.parse(localStorage.getItem('hotelInfo'));
                setHotels(info);
            } else {
                navigator.geolocation.getCurrentPosition(async (position) => {
                    const {latitude, longitude} = position.coords;
                    
                    if(!document.cookie.includes("auth")){
                        await fetch("https://test.api.amadeus.com/v1/security/oauth2/token",
                            {method: "POST",
                            headers: {
                                "Content-Type":"application/x-www-form-urlencoded"
                            },
                            body: "grant_type=client_credentials&client_id=8RSlR78LTaDAKKGb5updpA93gaPxuPG5&client_secret=N7a23dnbAjPJUnwJ"
                        }
                        ).then(response => response.json())
                        .then(data => {
                            const now = new Date();
                            now.setTime(now.getTime()+(30*60*1000))
                            cookies.set("auth",data.access_token,{expires: now})
                        })
                    }
                    const data = await fetch(`https://test.api.amadeus.com/v1/reference-data/locations/hotels/by-geocode?latitude=${latitude}&longitude=${longitude}&radius=10&radiusUnit=KM`,
                        {headers: {
                            "Authorization": "Bearer "+cookies.get("auth")
                        }}
                    ).then(response => response.json())
                    .then(data => data.data);
                    
                    localStorage.setItem("hotelInfo",JSON.stringify(data));
                })
                    
            }
        }
        getInfo()
    },[cookies]);

    return(
    <>
        <NavBarFill/>
        <div className={styles.Fondo_imagen}>
        </div>
        <div className={styles.Contenedor}>
            <div className={styles.buscador}></div>
            <div className={styles.lista}>
                {   
                    hotels.map((item,index) => {
                    return(
                        <div className={styles.cont_hotel} key={index}>
                            <div style={{"width": "70%", "marginRight": "5%"}}>
                                <h2>{item.name}</h2>
                                <a href={sites[index] ? sites[index].url : ""}><button className={styles.site_button}>Sitio web</button></a>
                            </div>
                            <div>
                                <img className={styles.imagen} height={200} width={200}
                                    src={sites[index] ? sites[index].img : ""}
                                />
                            </div>
                        </div>
                    )
                    })
                }
            </div>
        </div>
    </>
    )
}