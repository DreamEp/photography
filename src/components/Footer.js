import React from 'react';
import './footer.css';
import { NavLink } from 'react-router-dom';


const Footer = () => {
    return(
        <div className="main-footer">
            <div className="container">
                <div className="row">
                    {/* Column 1 */}
                    <div className="col" style={{marginTop: '-1.3em'}}>
                        <h4>
                            <a href="" target="_blank">About Us</a>
                        </h4>
                        <div className="list-unstyled">
                            <li>123</li>
                            <li>456</li>
                            <li>789</li>
                        </div>                    
                    </div>

                    {/* Column 2 */}
                    <div className="col">
                        <h4>
                            <a href="" target="_blank">About Us2</a>
                        </h4>
                        <div className="list-unstyled">
                            <li>1232</li>
                            <li>4562</li>
                            <li>7892</li>
                        </div>                    
                    </div>

                    {/* Column 3 */}
                    <div className="col">
                        <h4>
                            <a href="" target="_blank">About Us3</a>
                        </h4>
                        <div className="list-unstyled">
                            <li>1233</li>
                            <li>4563</li>
                            <li>7893</li>
                        </div>                    
                    </div>
                </div>                
            </div>
            <hr/>
            <div className="row">
                <p className="col-sm">
                    &copy; {new Date().getFullYear()} DreamEp INC | All rights reserved | <NavLink to='/privacy-policy' >Privacy Policy</NavLink> |  <NavLink to='/terms-and-conditions' >Terms and Conditions</NavLink>
                </p>
            </div>
        </div>
    )
}

export default Footer;
