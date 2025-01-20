import React, { useEffect, useState } from 'react'
import Navbar from './Header';
import Content from './Content';
import Loader from './Loader';
import DarkModeButton from './DarkModeButton';
import axios from 'axios';

const apiUrl = 'https://api.storyblok.com/v2/cdn/stories/home?version=draft&token=G12QCslFwkSB0ujEOmY8dgtt&cv=1737389355';


function App() {
  const [enableDarkMode, setEnableDarkMode] = useState(false);
  const [pictures, setPictures] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios.get(apiUrl).then(response => {
		console.log(response)
      setTimeout(() => {
        setIsLoading(false);
        setPictures(response.data.story.content.picture_list)
      }, 2000);
    })
  }, []);

  if(enableDarkMode)
    document.documentElement.classList.add('dark')
  else
    document.documentElement.classList.remove('dark')

	if(isLoading) {
		return(
			<main className="absolute h-screen w-screen top-0">
			  <Loader /> 
			</main>
		)
	}
	
	return (
		<div className="transition-colors min-full-screen duration-300 dark:darkmode-bg md:pb-16 lg:pb-24 pt-24">
			<Navbar />
			<Content pictures={ pictures } />
			<DarkModeButton enableDarkMode={enableDarkMode} onClick={() => { setEnableDarkMode(!enableDarkMode) }} />
		</div>
	);
}

export default App
