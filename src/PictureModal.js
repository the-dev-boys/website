import React, { useEffect } from "react";


function PictureModal(props) {
  const closeModal = () => {
    document.getElementById("mainModal").setAttribute("data-aos", "zoom-out")
    document.getElementById("mainModal").setAttribute("data-aos-duration", "500")
    setTimeout(() => {
      props.onClose()
    }, 500);
  }

  const onEscape = ({ key }) => {
    if (key === "Escape")
      closeModal()
  }

  useEffect(() => {
    document.addEventListener("keyup", onEscape)
    return () => document.removeEventListener("keyup", onEscape)
  })


  return (
    <div className="flex justify-center items-center fixed z-10 inset-0 overflow-y-auto translucent" id="mainModal">
      <div className="text-center p-10">
        <div data-aos="zoom-out" data-aos-duration="700" className="fixed inset-0" onClick={closeModal} aria-hidden="true">
          <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
        </div>
        <div data-aos="zoom-in-up" data-aos-delay="300" data-aos-duration="700" className="overflow-hidden rounded-xl shadow-xl max-w-4xl transform" aria-modal="true" aria-labelledby="modal-headline">
          <img alt="Modal" src={props.url} />
        </div>
      </div>
    </div>
  )
}

export default PictureModal;