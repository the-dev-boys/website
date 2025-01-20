import React from "react";

function Loader() {

  return (
    <div className="w-full h-full flex items-center place-content-center">
      <div>
        <p className="p-style typing dark:text-gray-100">Loading...</p>        
      </div>
    </div>
  )
}

export default Loader;