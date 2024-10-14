import Switch from '@mui/material/Switch';

function Theme(){
    return(
        <div style={{ display: "flex", flexDirection: "row", marginTop: "3%", alignItems: "center", marginLeft: "1.5%" } }>
            
            <h2 style={{ font: "Afacad flux", color: "black"}}>Modo oscuro</h2>
            <Switch />
        </div>
    )
}

export default Theme