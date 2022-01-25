import React, { useEffect } from 'react'

// page for information about working with WMS
function WorkWithUs() {
    const userName = localStorage.getItem("username")
    function topFunction() {
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    }
    useEffect(() => {
        topFunction()
    }, [])
    return (
        <div className="workWithUsContainer">
            <h2>Hello {userName} </h2>
            <p>We are happy about the fact that you want to work with us :) </p>
            <p> There are multiple ways this can be done, so here is a list for you with possible colaborations: </p>
            <p>1. Sending feedback </p>
            <p>2. Apply as a developer/ marketing consultant via: david.s@wms.com</p>
            <p>3. <button className="button-81">Get connected</button>  (Currently out of function) </p>

        </div>
    )
}

export default WorkWithUs
