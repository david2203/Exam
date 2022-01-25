import React, {useEffect} from 'react'

//page for privacy and policy
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
            <p>1. We care about your data and its safety. </p>
            <p>2. Cookies are only used if you have allowed them</p>
            <p>3. Your email will be shared with third party members if you have used it to apply to a job, in order for you to be contacted! </p>
            <p>4. At the moment you can do many applications to one job, Please dont! </p>
            <p>5. We are working on making the page even more Safe and Easy managable for you. </p>

        </div>
    )
}

export default PrivacyPolicy
