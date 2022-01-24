import React, {useEffect} from 'react'

function WorkWithUs() {
    function topFunction() {
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
      }
    useEffect(()=> {
        topFunction()
    },[])
    return (
        <div className="workWithUsContainer">
            
        </div>
    )
}

export default WorkWithUs
