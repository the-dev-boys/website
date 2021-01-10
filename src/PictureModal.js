import React from "react";

function PictureModal(props) {

    if (!props.show) {
        return null
    }

    return (

        <div className="flex justify-center items-center fixed z-10 inset-0 overflow-y-auto">
            <div className="text-center p-10">
                <div className="fixed inset-0 transition-opacity" onClick={props.onClose} aria-hidden="true">
                    <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
                </div>
                <span className="hidden sm:inline-block sm:align-middle" aria-hidden="true">&#8203;</span>
                <div className="flex rounded-xl shadow-xl transform transition-all max-w-4xl" role="dialog" aria-modal="true" aria-labelledby="modal-headline">
                    <img className="inline-block rounded-xl shadow-xl" alt="Piture" src={props.url}/>                    
                </div>
            </div>
        </div>
    )
}

export default PictureModal;