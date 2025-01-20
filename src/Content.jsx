import React, { useState } from "react";
import Picture from './Picture';

import PictureModal from "./PictureModal";

function Content(props) {
  const [selectedPicture, setSelectedPicture] = useState(false)

  if(selectedPicture)
    document.body.classList.add('overflow-y-hidden')
  else
    document.body.classList.remove('overflow-y-hidden')

  return (
    <main className="p-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-12">
      {props.pictures.map((photo, i) => {
          return (
            <div className='h-full place-self-center' key={i}>
              <Picture photo={photo} setSelectedPicture={setSelectedPicture} />
            </div>
          )
        })}      
      {selectedPicture && <PictureModal url={selectedPicture.url} onClose={() => setSelectedPicture(false)} />}
    </main>
  )
}

export default Content;