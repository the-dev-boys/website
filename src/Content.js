import React, { useState } from "react";
import Picture from './Picture';
import PictureModal from "./PictureModal";

const photos = [
    {
        url: '/image/image2.jpg',
        label: '31 December 2020. Happy new year Boys!'
    },
    {
        url: '/image/image3.jpg',
        label: '4 April 2020. Stay safe boys'
    },
    {
        url: '/image/image1.jpg',
        label: '2019. Hello boys'
    },
    {
        url: '/image/image2.jpg',
        label: '31 December 2020. Happy new year Boys!'
    },
    {
        url: '/image/image3.jpg',
        label: '4 April 2020. Stay safe boys'
    },
    {
        url: '/image/image1.jpg',
        label: '2019. Hello boys'
    },
    {
        url: '/image/image2.jpg',
        label: '31 December 2020. Happy new year Boys!'
    },
    {
        url: '/image/image3.jpg',
        label: '4 April 2020. Stay safe boys'
    },
    {
        url: '/image/image1.jpg',
        label: '2019. Hello boys'
    },
]


function Content() {
    const [selectedPicture, setSelectedPicture] = useState(false)

    return (                
        <main className="mt-28 p-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {photos.map((photo, i) => {
                return (
                    <div className='w-auto place-self-center' key={i}>
                        <Picture url={photo.url} label={photo.label} setSelectedPicture={setSelectedPicture} />                           
                    </div>
                )
            })}
            {selectedPicture && <PictureModal url={selectedPicture.url} onClose={() => setSelectedPicture(false)} />}
            
        </main>
    )
}

export default Content;
