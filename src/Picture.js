import React from "react";

function Picture(props) {
  return (
    <div data-aos-delay={Math.floor(Math.random() * 10) * 50} data-aos="zoom-in" data-aos-once="true" onClick={() => props.setSelectedPicture({ url: props.url, label: props.label })}>
      <div className="transform text-center max-w-sm rounded overflow-hidden shadow-lg transition duration-400 hover:scale-105">
        <img alt={props.label} className='w-full' src={props.url} />
        <div className='h-14'>
          <p className='text-xl mb-2 font-poppins'>{props.label}</p>
        </div>
      </div>
    </div>
  )
}


export default Picture;