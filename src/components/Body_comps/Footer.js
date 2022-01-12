import React from 'react'
import {Link} from "react-router-dom"

function Footer() {
    return (
        <div className='footer-v1'>
            <div className="footer-col1">
                <Link to="/PrivacyPolicy" > Privacy & Policy </Link> 
                <Link to="/AboutUs" > About us </Link> 

            </div>
            <div className="footer-col2">
                <Link to="/WorkWithUs" > Work with us! </Link> 
                
            </div>
            <div className="footer-col3">
                <h2>
                Contact us at:
                </h2>
                
                <p>
                <strong>Email: </strong> david.s@wms.com
                </p>
                <p>
                <strong> WMS servcie hotline: 0049 733 98 63 523</strong>
                </p>

                <p>
                   <strong>Or: </strong>  send a quick message <br/>to our Help - Bot
                </p>

                <input placeholder='message'></input>

                <button>Send</button>
            </div>
        </div>
    )
}

export default Footer
