import React, { useEffect, useState } from "react";
import Picture from './Picture';
import PictureModal from "./PictureModal";
import axios from 'axios';

const apiUrl = 'https://api.cosmicjs.com/v1/meandtheboys-production/objects?pretty=true&hide_metafields=true&type=images&read_key=1pQJxA3Ac0l3jiWdZug6wAQ0Uz1OVWwi5i4TkjZ8OfgjQrDpnp&limit=20&props=slug,metadata,';

function Content() {
  const [selectedPicture, setSelectedPicture] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [pictures, setPictures] = useState([])

  useEffect(() => {
    axios.get(apiUrl).then(response => {
      setIsLoading(false);
      setPictures(response.data.objects)
    })
  }, []);

  if (isLoading) {
    return (<div className="w-full h-full grid font-poppins text-4xl content-center place-content-center"> <p>Fuck off </p> </div>);
  }

  if (selectedPicture)
    document.body.classList.add('overflow-y-hidden')
  else
    document.body.classList.remove('overflow-y-hidden')

  return (
    <main className="p-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-12">
      {pictures.map((photo, i) => {
        return (
          <div className='h-full place-self-center' key={i}>
            <Picture date={photo.metadata.date} url={photo.metadata.image.url} label={photo.metadata.title} description={photo.metadata.description} setSelectedPicture={setSelectedPicture} />
          </div>
        )
      })}
      {selectedPicture && <PictureModal url={selectedPicture.url} onClose={() => setSelectedPicture(false)} />}
    </main>
  )
}

export default Content;