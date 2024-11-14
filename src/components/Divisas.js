import { useState, useEffect } from 'react';




function IngresarDivisas(){
  let [cambio, setCambio] = useState('');
  function handleChange(event){
    setCambio(event.target.value);
  }

  async function Convert() {
    try {
      const response = await fetch('https://v6.exchangerate-api.c8', {
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
        <div>
          <h1 style={{marginTop:'200px', color: 'black'}}>Hola</h1>
            <select onChange={handleChange}>
              <option value = {'USD'}>Dolar</option>
            </select>
            
        </div>
    )
}


export default IngresarDivisas