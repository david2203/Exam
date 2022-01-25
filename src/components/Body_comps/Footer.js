import React from 'react'
import {Link} from "react-router-dom"

function Footer() {
    return (

        // footer content
        <div className='footer-v1'>
            <div className="topPart">
                <div className="upper">
                <div className="footer-col1">
                    <h2>Resources</h2>
                    <Link to="/PrivacyPolicy" > Privacy & Policy </Link> 
                    <Link to="/AboutUs" > About us </Link> 

                </div>
                <div className="footer-col2">
                <h2> Get connected </h2>
                    <Link to="/WorkWithUs" > Work with us! </Link> 
                    
                </div>
                <div className="footer-col3">
                    <h2>Social:</h2>
                    <a href="https://facebook.com" > Facebook </a> 
                    <a href="https://youtube.com" > Youtube </a> 
                    <a href="https://github.com/david2203/Exam" > Github </a> 
                    <a href="https://linkedin.com" > Linked-in </a> 

                </div>
                </div>
                
                <div className="footer-col4">
                    <div>
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
                    </div>
                    <div className="messageBox">
                        <textarea placeholder='message' className="input-81"></textarea>

                        <button className="button-81">Send</button>
                    </div>
                </div>
                
            </div>

            <div className="lowerPart">
               <p> &copy;2022 WMS </p><Link to="/terms" > Terms </Link> <Link to="/privacyPolicy" > Privacy </Link> 
            </div>
            
        </div>
    )
}

export default Footer
