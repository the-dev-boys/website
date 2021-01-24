import React from 'react';
import Brightness4Icon from '@material-ui/icons/Brightness4';

function DarkModeButton(props) {

  return(
    <div className="cursor-pointer fixed right-0 bottom-0 z-50 m-6">
      <div className="w-14 h-14 grid place-content-center rounded-full hover:shadow-lg bg-gray-900 transition duration-300 dark:bg-gray-100" onClick={props.onClick}>
        <Brightness4Icon fontSize="large" className="transition duration-300 text-gray-100 dark:text-gray-900"/>      
      </div>      
    </div>

  )
}

export default DarkModeButton;