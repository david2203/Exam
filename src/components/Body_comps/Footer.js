import React from 'react'

function Footer() {
    return (
        <div className='footer-v1'>
            <div className="footer-col1">
                Helpfull links
            </div>
            <div className="footer-col2">
                Something else
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
