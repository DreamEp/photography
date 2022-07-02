import React, {useState} from 'react';
import './gallery.css';
import { useLocation } from 'react-router-dom';
import CloseIcon from '@mui/icons-material/Close';
import ArrowRightIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowLeftIcon from '@mui/icons-material/ArrowBackIosNew';

import Img1 from '../img/1.jpg';
import Img2 from '../img/2.jpg';
import Img3 from '../img/3.jpg';
import Img4 from '../img/4.jpg';
import Img5 from '../img/5.jpg';
import Img6 from '../img/6.jpg';
import Img7 from '../img/7.jpg';
import Img8 from '../img/8.png';
import Img9 from '../img/9.jpg';
import Img10 from '../img/10.jpg';
import Img11 from '../img/11.jpg';


const Gallery = () => {

    let clickedName = useLocation().pathname;
    console.warn(clickedName);

    //let  = [];

    let landscape = [
        {
            id : 1,
            imgSrc: Img3,
        },
        {
            id : 2,
            imgSrc: Img6,
        },
        {
            id : 3,
            imgSrc: Img7,
        },
        {
            id : 4,
            imgSrc: Img9,
        },
    ];

    let portrait = [
        {
            id : 1,
            imgSrc: Img4,
        },
        {
            id : 2,
            imgSrc: Img5,
        },
        {
            id : 3,
            imgSrc: Img11,
        },
    ];

    let photoshop = [];

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
    const [afk, setAfk] = useState(false);
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

    // Create an afk checker if the user is inactive on the image show, to hide or not the arrows
    var timeoutInMiliseconds = 4000;
    var timeoutId; 

    function resetTimer() { 
        setAfk(false);
        window.clearTimeout(timeoutId)
        startTimer();
    }
    
    function startTimer() { 
        timeoutId = window.setTimeout(doInactive, timeoutInMiliseconds)
    }
    
    function doInactive() {
        setAfk(true);
    }
    
    function setupTimers () {
        document.addEventListener("mousemove", resetTimer, false);
        document.addEventListener("mousedown", resetTimer, false);
        document.addEventListener("touchmove", resetTimer, false);
        
        startTimer();
    }

    //To call before render
    function chooseImageToDisplay () {
        if(clickedName === "/landscape"){
            data = landscape;
        }
        else if(clickedName === "/portrait"){
            data = portrait;
        }
        else{
            data = photoshop;
        }
    }
    
    return (
        <>
        {/* Displayed image when clicked */}
        <div className={model ? "model open" : "model"} >
            <img  src={tempingSrc} alt="My Awesome Image3" onMouseMove={() => setupTimers()} onClick={() => nextImg(tempingId)}/>
            <CloseIcon onClick={() => setModel(false)}/>
            <ArrowRightIcon className={afk ? "right hidden" : "right"} onClick={() => nextImg(tempingId)} />
            <ArrowLeftIcon className={afk ? "left hidden" : "left"} onClick={() => previousImg(tempingId)}/>
        </div>

        {/* Display all the images in a gallery with onClick listener to diplay the image full size */}
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