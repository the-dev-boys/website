import React, { useState } from "react";
import PictureModal from "./PictureModal";


function Picture(props) {
    const [show, setShow] = useState(false)

    return (
        <div>
            <div data-aos-delay={Math.floor(Math.random() * 10)*50} data-aos="zoom-in" data-aos-once="true" onClick={() => setShow(true)}>
                <div  className="transform text-center max-w-sm rounded overflow-hidden shadow-lg transition duration-400 hover:scale-105">
                    <img alt={props.label} className='w-full'  src={props.url} /> 
                    <div className='h-14'>
                        <p className='text-xl mb-2 font-poppins'>{props.label}</p>
                    </div>
                </div>    
            </div>
            
            <PictureModal onClose={() => setShow(false)} show={show} url={props.url}/>            
        </div>


    ) 
}
 

export default Picture;