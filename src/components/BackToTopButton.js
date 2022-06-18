import React from 'react';
import { useEffect, useState } from 'react';
import ArrowUp from '@mui/icons-material/ArrowUpward';

function BackToTopButton() {
    const [backToTopButton, setBackToTopButton] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if(window.scrollY > 100){
                setBackToTopButton(true);
            }
            else{
                setBackToTopButton(false); 
            }
        })
    }, [])

    const scrollUp = () =>{
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }

    return <div>
        {backToTopButton && (
            <ArrowUp className="arrowUp" onClick={scrollUp} />
        )}
    </div>
}

export default BackToTopButton;