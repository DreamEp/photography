import React from 'react';
import './footer.css';
import { NavLink } from 'react-router-dom';
import InstagramIcon from '@mui/icons-material/Instagram';
import PinterestIcon from '@mui/icons-material/Pinterest';


const Footer = () => {
    return(
        <div className="main-footer">
            <div className="container">
                {/* Ajout de cliquable dans le footer 
                <div className="row">
                    <div className="col">
                        <h4 classname="clickable-footer">
                            <a href="http://localhost:3000/" target="_blank" rel="noopener noreferrer">About Us</a>
                        </h4>
                        <div className="list-unstyled">
                            <li>1231</li>
                            <li>4561</li>
                            <li>7891</li>
                        </div>                    
                    </div>

                    <div className="col">
                        <h4 classname="clickable-footer">
                            <a href="http://localhost:3000/" target="_blank" rel="noopener noreferrer">About Us2</a>
                        </h4>
                        <div className="list-unstyled">
                            <li>1232</li>
                            <li>4562</li>
                            <li>7892</li>
                        </div>                    
                    </div>

                    <div className="col">
                        <h4 classname="clickable-footer">
                            <a href="http://localhost:3000/" target="_blank" rel="noopener noreferrer">About Us3</a>
                        </h4>
                        <div className="list-unstyled">
                            <li>1233</li>
                            <li>4563</li>
                            <li>7893</li>
                        </div>                    
                    </div>
                </div>  */}   
                <InstagramIcon />    
                <PinterestIcon />       
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
