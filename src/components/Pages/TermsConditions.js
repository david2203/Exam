import React, {useEffect} from 'react'


//page for terms and conditions
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
             <h2>Terms & conditions</h2>
            <p>1. In order to apply to a job, you have to be atleast 18 years old and have a valid CV. </p>
            <p>2. Please do not apply to one job multiple times! </p>
            <p>3. Your email will be shared with third party members if you have used it to apply to a job, in order for you to be contacted! </p>
            <p>4. At the moment you can do many applications to one job, Please dont! </p>
            <p>5. We are working on making the page even more Safe and Easy managable for you. </p>

        </div>
    )
}

export default TermsConditions
