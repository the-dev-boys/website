import React, { Fragment, useState } from 'react'
import Navbar from './Header';
import Content from './Content';
import DarkModeButton from './DarkModeButton';


function App() {
  const [enableDarkMode, setEnableDarkMode] = useState(false);

  if(enableDarkMode)
    document.documentElement.classList.add('dark')
  else
    document.documentElement.classList.remove('dark')

  return (
    <Fragment>
        <div className="transition-colors duration-300 dark:bg-gray-800md:pb-16 lg:pb-24 pt-24 dark:bg-gray-800">
          <Navbar />
          <Content />
          <DarkModeButton enableDarkMode={enableDarkMode} onClick={() => { setEnableDarkMode(!enableDarkMode) }} />
        </div>
    </Fragment>
  );
}

export default App;
