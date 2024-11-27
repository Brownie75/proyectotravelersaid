import { useState} from 'react';

import { useThemeStore } from '../utils/themeStore.js';
import DragHandleIcon from '@mui/icons-material/DragHandle';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';



function IngresarDivisas(){
  const theme = useThemeStore((state) => state.theme);
  const [selectValues, setSelectValues] = useState({
    select_divisas: "",
    select_divisas2: "",
    valor:""
  });

  const [conversionResult, setConversionResult] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSelectValues((prevValues) => ({
      ...prevValues,
      [name]: value
    }));
  };
  

  async function Convert() {
    const { select_divisas, select_divisas2, valor } = selectValues;
    console.log(`https://v6.exchangerate-api.com/v6/pair${select_divisas}${select_divisas2}/${valor}`)
    const api =`https://v6.exchangerate-api.com/v6/pair${select_divisas}${select_divisas2}/${valor}`
    
    console.log(api)
    try {
      const response = await fetch(api, {
        headers: {
          Authorization: 'Bearer c86266179d76808931135a54'
        }
        
      })
      if (!response.ok) throw new Error("Error al obtener datos");
      
      const data = await response.json();
      
      console.log(data);
      setConversionResult(data.conversion_result);
    } catch (e) {
      console.log(e);
    }
  }

    return(
        <div style={{ marginTop: '8%'}}>
          <div style={{display:"flex", flexDirection:"column"}}>
          <h1 style={{ font: "Afacad flux", color: theme === "light" ? "white" : "black",
          }}>Conversor de divisas para viajeros</h1>
          </div>
            
          <div>

          <div style={{marginLeft: '20%', display:'flex', flex: 'row'}}>

<Box sx={{ minWidth: 150 }}>

<FormControl fullWidth style={{marginTop:"5%"}}>
  <InputLabel id="demo-simple-select-label">Divisa</InputLabel>
  <Select
    onChange={ handleChange} name = "select_divisas" id="divisas" value={setSelectValues.select_divisas} style={{marginLeft: '3%', backgroundColor:"#DEDFE4"}}
  >
    <MenuItem value = {'/USD'}>USD</MenuItem>
              <MenuItem value = {'/MXN'}>MXN</MenuItem>
              <MenuItem value = {'/CAD'}>CAD</MenuItem>
              <MenuItem value = {'/AUD'}>AUD</MenuItem>
              <MenuItem value = {'/JPY'}>JPY</MenuItem>
              <MenuItem value = {'/EUR'}>EUR</MenuItem>
              <MenuItem value = {'/GBP'}>GBP</MenuItem>
              <MenuItem value = {'KRW'}>KRW</MenuItem>
              <MenuItem value = {'/CNY'}>CNY</MenuItem>
              <MenuItem value = {'/COP'}>COP</MenuItem>
              <MenuItem value = {'/CLP'}>CLP</MenuItem>
              <MenuItem value = {'/ARS'}>ARS</MenuItem>
              <MenuItem value = {'/VES'}>VES</MenuItem>
  </Select>
</FormControl>
        </Box >
        <Box  component="form"
      sx={{ '& > :not(style)': { m: 1, width: '25ch' } }}
      noValidate
      autoComplete="off">
            <TextField id= "standard-basic" label="Cantidad" variant="standard"  name="valor" onChange= {handleChange} value={setSelectValues.valor}  style={{ font: "Afacad flux", color: theme === "light" ? "white" : "black", marginLeft: "10%", fontSize: "40"
          }}/>
        </Box>
            
    
            <DragHandleIcon fontSize= "large" style={{ font: "Afacad flux", color: theme === "light" ? "white" : "black", marginLeft: "10%", fontSize: "40"
          }}></DragHandleIcon>
            <div style={{marginLeft: '10%', display:'flex', flex: 'row'}}>
            <Box sx={{ minWidth: 150 }}>

<FormControl fullWidth>
  <InputLabel id="demo-simple-select-label">Divisa</InputLabel>
  <Select
    onChange={ handleChange} name = "select_divisas2" id="divisas2" value={setSelectValues.select_divisas2} style={{marginLeft: '3%', backgroundColor:"#DEDFE4"}}
  >
    <MenuItem value = {'/USD'}>USD</MenuItem>
              <MenuItem value = {'/MXN'}>MXN</MenuItem>
              <MenuItem value = {'/CAD'}>CAD</MenuItem>
              <MenuItem value = {'/AUD'}>AUD</MenuItem>
              <MenuItem value = {'/JPY'}>JPY</MenuItem>
              <MenuItem value = {'/EUR'}>EUR</MenuItem>
              <MenuItem value = {'/GBP'}>GBP</MenuItem>
              <MenuItem value = {'KRW'}>KRW</MenuItem>
              <MenuItem value = {'/CNY'}>CNY</MenuItem>
              <MenuItem value = {'/COP'}>COP</MenuItem>
              <MenuItem value = {'/CLP'}>CLP</MenuItem>
              <MenuItem value = {'/ARS'}>ARS</MenuItem>
              <MenuItem value = {'/VES'}>VES</MenuItem>
  </Select>
</FormControl>
        </Box >
            <div style={{}}>
            
            </div>
            

            </div>
            
          </div>
          
          <p style={{ marginLeft:"30%",  color: theme === "light" ? "white" : "black", fontSize: "1.5rem", alignText: "center"}}>
          Cantidad convertida: {conversionResult}
          </p>
          <Button variant="contained" onClick={() => Convert()} style={{marginLeft:"50%", marginTop:"5%"}}>Convertir</Button>
          
          </div>
          
          
        </div>
    )
}


export default IngresarDivisas