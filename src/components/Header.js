import { useEffect, useState } from 'react';
import './header.css';
import { NavLink } from 'react-router-dom';
import DiamondIcon from '@mui/icons-material/Diamond';


const Header = () => {
    //const [home, setHome] = useState(true);
    const [logo, setLogo] = useState(false);

    /*
    const location = useLocation();
    console.warn(location.pathname);
    if(location.pathname != "/"){
        setHome(false);
    }*/

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if(window.scrollY < 30){
                
                setLogo(true);
            }
            else{
                setLogo(false); 
            }
        })
    }, [])

    return <div className="main-header"/*{home ? "main-header" : "header"}*/>
        {logo && (
            <NavLink className="navigation" to='/'>
                <DiamondIcon className="logo"/>            
            </NavLink>
        )}
    </div>
}

export default Header;