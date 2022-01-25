import React, { useEffect } from 'react'

function AboutUs() {

    //a page about Work Made Simple (simple)
    function topFunction() {
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    }
    useEffect(() => {
        topFunction()
    }, [])
    return (
        <div className="aboutUsContainer">
            <h2>Work Made Simple</h2>
            <p> We at Work Made Simple strive to make it as easy as possible for all parties involved when it comes to employing and getting employed!
                Together with Workday, we have created an easy to handle interface for interested job seekers to search and apply for jobs and positions that are related to Dentsu and their partner brands.
                Our mission is to keep the process of employment simple, while maintaining high quality support.
            </p>
        </div>
    )
}

export default AboutUs
