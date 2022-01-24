import React, {useEffect} from 'react'

function TermsConditions() {
    function topFunction() {
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
      }
    useEffect(()=> {
        topFunction()
    },[])
    return (
        <div className="termsConditionsContainer">
            
        </div>
    )
}

export default TermsConditions
