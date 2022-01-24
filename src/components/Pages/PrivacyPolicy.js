import React, {useEffect} from 'react'

function PrivacyPolicy() {
    function topFunction() {
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
      }
    useEffect(()=> {
        topFunction()
    },[])
    return (
        <div className="privacyPolicyContainer">
            <h2>Privacy & Policy</h2>
            <p>1. lorem </p>
            <p>2. lorem </p>
            <p>3. lorem </p>
            <p>4. lorem </p>
            <p>5. lorem </p>

        </div>
    )
}

export default PrivacyPolicy
