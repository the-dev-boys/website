import React, { Fragment, useEffect, useState } from 'react'
import Navbar from './Header';
import Content from './Content';
import Loader from './Loader';
import DarkModeButton from './DarkModeButton';
import axios from 'axios';

const apiUrl = 'https://api.cosmicjs.com/v1/meandtheboys-production/objects?pretty=true&hide_metafields=true&type=images&read_key=1pQJxA3Ac0l3jiWdZug6wAQ0Uz1OVWwi5i4TkjZ8OfgjQrDpnp&limit=20&props=slug,metadata,';

function App() {
  const [enableDarkMode, setEnableDarkMode] = useState(false);
  const [pictures, setPictures] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios.get(apiUrl).then(response => {
      setTimeout(() => {
        setIsLoading(false);
        setPictures(response.data.objects)
      }, 2000);
    })
  }, []);

  if(enableDarkMode)
    document.documentElement.classList.add('dark')
  else
    document.documentElement.classList.remove('dark')

  if(isLoading) {
    return(
      <Fragment>
        <main className="absolute h-screen w-screen top-0">
          <Loader /> 
        </main>        
      </Fragment>  
    )
  }

  return (
    <Fragment>
        <div className="transition-colors min-full-screen duration-300 dark:darkmode-bg md:pb-16 lg:pb-24 pt-24">
          <Navbar />
          <Content pictures={ pictures } />
          <DarkModeButton enableDarkMode={enableDarkMode} onClick={() => { setEnableDarkMode(!enableDarkMode) }} />}
        </div>
    </Fragment>
  );
}

export default App;
