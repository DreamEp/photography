import React from 'react';
import './header.css';
import { NavLink } from 'react-router-dom';
import DiamondIcon from '@mui/icons-material/Diamond';

const Header = () => {
    return(
        <div className="main-header">
            <NavLink className="navigation" to='/'>
                <DiamondIcon className="logo"/>            
            </NavLink>

        </div>
    )
}

export default Header;