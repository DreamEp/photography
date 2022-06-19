import React from 'react';
import { NavLink } from 'react-router-dom';
import './home.css';
import Home1 from '../img/home1.jpg';
import Home2 from '../img/home2.jpg';
import Home3 from '../img/home3.jpg';   

const Home = () => {
    let data = [
        {
            id : 1,
            imgSrc: Home1,
            description: 'Landscape',
        },
        {
            id : 2,
            imgSrc: Home2,
            description: 'Portrait',

        },
        {
            id : 3,
            imgSrc: Home3,
            description: 'Photoshop',
        }
    ];

    return(
        <>
        <div className="menu">
            {data.map((item, index) => {
                let description = item.description.toLocaleLowerCase();
                return(
                    <div className={`pics ${description}`}>
                        <NavLink to={{pathname: description, state: {clickedName: description}}} >
                            <img className="img" src={item.imgSrc} style={{width : '100%'}} alt={item.description}></img>
                        </NavLink>
                        <h3 className="description">{item.description}</h3>
                    </div>
                )
            })}
        </div>
        </>
    )
}

export default Home;