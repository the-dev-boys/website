import React, { useState } from "react";
import LoopIcon from '@material-ui/icons/Loop';


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
						<div className="absolute p-1 mt-1 mr-1 right-0 bg-gray-100 rounded-full shadow-lg dark:darkmode-picture transition-colors duration-300">
							<LoopIcon className={"cursor-pointer svg-block hover:animate-spin dark:text-gray-100 transition-colors duration-300" + (rotatedPicture ? " hidden" : "")} onClick={() => setRotatedPicture(!rotatedPicture)} />
						</div>
						<img alt={props.label} className='w-full h-full rounded-t-lg' src={props.metadata.image.url} onClick={() => props.setSelectedPicture({ url: props.metadata.image.url, label: props.metadata.title })} />
						<div className='pt-1 h-16'>
							<p className='text-xl sm:px-2 font-poppins dark:text-gray-100 transition-colors duration-300 '><b>{props.metadata.date}.</b> {props.metadata.title}</p>
						</div>
				</div>
				<div className="picture-back rounded-lg shadow-lg w-full h-full top-0 absolute grid place-content-center">
					<div className="absolute p-1 mt-1 mr-1 right-0 bg-gray-100 rounded-full shadow-lg dark:darkmode-picture transition-colors duration-300 ">
						<LoopIcon className="cursor-pointer svg-block hover:animate-spin dark:text-gray-100 transition-colors duration-300" onClick={() => setRotatedPicture(!rotatedPicture)} />
					</div>
					<p className="font-poppins text-xl text-center p-6 dark:text-gray-100 transition-colors duration-300 ">"{props.metadata.description}"</p>
				</div>
			</div>
		</div>
	)
}

export default Picture;