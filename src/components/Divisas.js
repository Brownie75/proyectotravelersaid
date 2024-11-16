import { useState, useEffect } from 'react';




function IngresarDivisas(){
  let [cambio, setCambio] = useState('');
  function handleChange(event){
    setCambio(event.target.value);
  }

  async function Convert() {
    try {
      const response = await fetch(`https://v6.exchangerate-api.com/v6/pair/EUR/GBP/AMOUNT`, {
        headers: {
          Authorization: 'Bearer c86266179d76808931135a54'
        }
        .then(response.json())
      })
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    Convert();
    });

    return(
        <div style={{display:'flex', flex: 'row'}}>
          <div style={{marginLeft: '20%', display:'flex', flex: 'row'}}>
            <input type='number'></input>

          <select onChange={handleChange} name = "select_divisas" id="divisas" style={{marginLeft: '3%'}}>
              <option>Elija una divisa</option>
              <option value = {'/USD'}>Dolar estadounidense</option>
              <option value = {'/MXN'}>Peso mexicano</option>
              <option value = {'/CAD'}>Dolar canadiense</option>
              <option value = {'/AUD'}>Dolar australiano</option>
              <option value = {'/JPY'}>Yen japones</option>
              <option value = {'/EUR'}>Euro</option>
              <option value = {'/GBP'}>Libra esterlina</option>
              <option value = {'KRW'}>Won surcoreano</option>
              <option value = {'/CNY'}>Yuan chino</option>
              <option value = {'/COP'}>Peso colombaino</option>
              <option value = {'/CLP'}>Peso chileno</option>
              <option value = {'/ARS'}>Peso argentino</option>
              <option value = {'/VES'}>Bolivar vanezolano</option>
            </select>
            <div class= "">

            </div>
          </div>

          <div style={{ marginLeft: '10%', display:'flex', flex: 'row'}}>
            <input type='number'></input>

          <select onChange={handleChange} name = "select_divisas" id="divisas" style={{marginLeft: '3%'}}>
              <option>Elija una divisa</option>
              <option value = {'/USD'}>Dolar estadounidense</option>
              <option value = {'/MXN'}>Peso mexicano</option>
              <option value = {'/CAD'}>Dolar canadiense</option>
              <option value = {'/AUD'}>Dolar australiano</option>
              <option value = {'/JPY'}>Yen japones</option>
              <option value = {'/EUR'}>Euro</option>
              <option value = {'/GBP'}>Libra esterlina</option>
              <option value = {'KRW'}>Won surcoreano</option>
              <option value = {'/CNY'}>Yuan chino</option>
              <option value = {'/COP'}>Peso colombaino</option>
              <option value = {'/CLP'}>Peso chileno</option>
              <option value = {'/ARS'}>Peso argentino</option>
              <option value = {'/VES'}>Bolivar vanezolano</option>
            </select>
          </div>
            
        </div>
    )
}


export default IngresarDivisas