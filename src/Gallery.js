import React, {useState} from 'react';
import './gallery.css';
import CloseIcon from '@mui/icons-material/Close';
import ArrowRightIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowLeftIcon from '@mui/icons-material/ArrowBackIosNew';

import Img1 from './img/1.png';
import Img2 from './img/2.jpg';
import Img3 from './img/3.jpg';
import Img4 from './img/4.png';
import Img5 from './img/5.jpg';
import Img6 from './img/6.jpg';
import Img7 from './img/7.jpg';
import Img8 from './img/8.jpg';
import Img9 from './img/9.png';
import Img10 from './img/10.jpg';
import Img11 from './img/11.jpg';


const Gallery = () => {

    let data = [
        {
            id : 1,
            imgSrc: Img1,
        },
        {
            id : 2,
            imgSrc: Img2,
        },
        {
            id : 3,
            imgSrc: Img3,
        },
        {
            id : 4,
            imgSrc: Img4,
        },
        {
            id : 5,
            imgSrc: Img5,
        },
        {
            id : 6,
            imgSrc: Img6,
        },
        {
            id : 7,
            imgSrc: Img7,
        },
        {
            id : 8,
            imgSrc: Img8,
        },
        {
            id : 9,
            imgSrc: Img9,
        },
        {
            id : 10,
            imgSrc: Img10,
        },
        {
            id : 11,
            imgSrc: Img11,
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

    const nextImg = (index) => {
        if(index+1 < data.length){
            const imgSrc = data[index+1].imgSrc;
            getImg(imgSrc, index);
            setTempingId(index+1);
        }        
    }

    const previousImg = (index) => {
        if(index > 0){
            const imgSrc = data[index-1].imgSrc;
            getImg(imgSrc, index);
            setTempingId(index-1);
        }   
        
    }

    /*document.addEventListener('mousemove', function(e) {
        let rightArrow = document.getElementById('right');
        let leftArrow = document.getElementById('left');

        if (!rightArrow.contains(e.target)) {
            rightArrow.style.visibility = 'visible';
        }
    });*/

    return (
        <>
        <div className={model ? "model open" : "model"}>
            <img  src={tempingSrc} alt="My Awesome Image3" />
            <CloseIcon onClick={() => setModel(false)}/>
            <ArrowRightIcon id="right" className="right" onClick={() => nextImg(tempingId)} />
            <ArrowLeftIcon id="left" className="left" onClick={() => previousImg(tempingId)}/>
        </div>

        <div className="gallery">
            {data.map((item, index) => {
                return(
                    <div className="pics" key ={index} onClick={() => getImg(item.imgSrc, item.id)}>
                        <img className="img" src={item.imgSrc} style={{width : '100%'}} alt="My Awesome Image2"/>
                    </div>
                )
            })}
        </div>
        </>
    )
}

export default Gallery;