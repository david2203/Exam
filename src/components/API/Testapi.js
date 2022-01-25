import React from 'react'
import axios from "axios"
function Testapi() {
 // API page for testing out diffrent apis (mainly in order to get to know strapi V4 and how they handle requests)
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
