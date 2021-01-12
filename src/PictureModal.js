import React, { useEffect } from "react";

function PictureModal(props){

    const onEscape = ({key}) => {
        if (key === "Escape"){
            props.onClose()
        }
    }

    useEffect(() => {
        document.addEventListener("keyup", onEscape)
        return () => document.removeEventListener("keyup", onEscape)
    }, )

    return (        
        <div className="flex justify-center items-center fixed z-10 inset-0 overflow-y-auto">
            <div className="text-center p-10">
                <div className="fixed inset-0 transition-opacity" onClick={props.onClose} aria-hidden="true">
                    <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
                </div>
                <div className="flex overflow-hidden rounded-xl shadow-xl transform transition-all max-w-4xl" srole="dialog" aria-modal="true" aria-labelledby="modal-headline">
                    <img alt="Piture" src={props.url}/>                    
                </div>
            </div>
        </div>
    )
}

export default PictureModal;