import React, { useState } from "react";
import Picture from './Picture';
import PictureModal from "./PictureModal";

const photos = [
  {
    url: 'https://picsum.photos/1457/1000',
    label: '31 December 2020. Happy new year Boys!',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  },
  {
    url: 'https://picsum.photos/1457/1000',
    label: '4 April 2020. Stay safe boys',
    description: 'blabla',
  },
  {
    url: 'https://picsum.photos/1457/1000',
    label: '2019. Hello boys',
    description: 'blabla',
  },
  {
    url: 'https://picsum.photos/1457/1000',
    label: '31 December 2020. Happy new year Boys!',
    description: 'blabla',
  },
  {
    url: 'https://picsum.photos/1457/1000',
    label: '4 April 2020. Stay safe boys',
    description: 'https://picsum.photos/1457/1000',
  },
  {
    url: 'https://picsum.photos/1457/1000',
    label: '2019. Hello boys',
    description: 'blabla',
  },
  {
    url: 'https://picsum.photos/1457/1000',
    label: '31 December 2020. Happy new year Boys!',
    description: 'blabla',
  },
  {
    url: 'https://picsum.photos/1457/1000',
    label: '4 April 2020. Stay safe boys',
    description: 'blabla',
  },
  {
    url: 'https://picsum.photos/1457/1000',
    label: '2019. Hello boys',
    description: 'blabla',
  },
]


function Content() {
  const [selectedPicture, setSelectedPicture] = useState(false)
  

  return (
    <main className="mt-28 p-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-12">
      {photos.map((photo, i) => {
        return (
          <div className='h-full place-self-center' key={i}>
            <Picture url={photo.url} label={photo.label} description={photo.description} setSelectedPicture={setSelectedPicture} />
          </div>
        )
      })}

      {selectedPicture && <PictureModal url={selectedPicture.url} onClose={() => setSelectedPicture(false)} />}
    </main>
  )
}

export default Content;