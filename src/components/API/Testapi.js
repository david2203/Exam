import React from 'react'
import axios from "axios"
function Testapi() {

    axios
  .post('http://localhost:1337/api/restaurants', {
      data : {
        name: 'Dolemon Sushi',
        description: 'Unmissable Japanese Sushi restaurant. The cheese and salmon makis are delicious',
      }
    
  })
  .then(response => {
    console.log(response);
  });
    return (
        <div>
            
        </div>
    )
}

export default Testapi
