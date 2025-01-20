import React, { useState } from "react";
import LoopIcon from './LoopIcon';


function Picture(props) {
	const [rotatedPicture, setRotatedPicture] = useState(false)

	const styles = {}

	if (rotatedPicture) {
		styles.transform = "rotateY(180deg)"
	}

	return (
		<div data-aos-delay={Math.floor(Math.random() * 10) * 50} data-aos="zoom-in" data-aos-once="true" className="relative w-full h-auto text-center transform transition lg:hover:scale-105 picture-card duration-400 ">
			<div style={styles} className="picture-inner shadow-lg relative w-full h-full rounded-lg dark:darkmode-picture transition-colors duration-300">
				<div className={"picture-front w-full h-full" + (rotatedPicture ? " pointer-events-none" : "")} >
					<div className="absolute cursor-pointer svg-block hover:animate-spin dark:text-gray-100 transition-colors p-1 mt-1 mr-1 right-0 bg-gray-100 rounded-full shadow-lg dark:darkmode-picture transition-colors duration-300" onClick={() => setRotatedPicture(!rotatedPicture)}>
						<LoopIcon />
					</div>
					<img alt={props.photo.title} className='w-full h-full rounded-t-lg' src={props.photo.image.filename} onClick={() => props.setSelectedPicture({ url: props.photo.image.filename, label: props.photo.title })} />
					<div className='pt-1 h-16'>
						<p className='text-xl sm:px-2 font-poppins dark:text-gray-100 transition-colors duration-300 '><b>{props.photo.date.split(" ")[0]}.</b> {props.photo.title}</p>
					</div>
				</div>
				<div className="picture-back rounded-lg shadow-lg w-full h-full top-0 absolute grid place-content-center">
					<div className="absolute p-1 mt-1 mr-1 right-0 bg-gray-100 rounded-full shadow-lg dark:darkmode-picture transition-colors cursor-pointer svg-block hover:animate-spin dark:text-gray-100 transition-colors duration-300" onClick={() => setRotatedPicture(!rotatedPicture)}>
						<LoopIcon />
					</div>
					<p className="font-poppins text-xl text-center p-6 dark:text-gray-100 transition-colors duration-300 ">"{props.photo.description}"</p>
				</div>
			</div>
		</div>
	)
}

export default Picture;