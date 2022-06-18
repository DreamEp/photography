import React, {useState} from 'react';
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
        },
        {
            id : 2,
            imgSrc: Home2,
        },
        {
            id : 3,
            imgSrc: Home3,
        }
    ];

    const [model, setModel] = useState(false);
    const [tempingSrc, setTempingSrc] = useState('');
    const [tempingId, setTempingId] = useState()

    const getImg = (imgSrc, id) => {
        setTempingSrc(imgSrc);
        setTempingId(id);
        setModel(true);
    }

    return(
        <>
        <div className="menu">
            {data.map((item, index) => {
                return(
                    <div className="pics" key ={index} onClick={() => getImg(item.imgSrc, item.id)}>
                        <NavLink to='/Gallery'>
                            <img className="img" src={item.imgSrc} style={{width : '100%'}} alt="My Awesome Image2"/>
                        </NavLink>
                    </div>
                )
            })}
        </div>
        </>
    )
}

export default Home;