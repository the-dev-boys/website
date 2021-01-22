import React, { useState } from "react";
import LoopIcon from '@material-ui/icons/Loop';


function Picture(props) {
	const [rotatedPicture, setRotatedPicture] = useState(false)

	const styles = {}

	if (rotatedPicture) {
		styles.transform = "rotateY(180deg)"
	}
	//pointer-events: none;
	return (
		<div className="w-full h-auto transform text-center rounded transition duration-400 lg:hover:scale-105 bg-transparent picture-card">
			<div style={styles} className="picture-inner shadow-lg relative w-full h-full">
				<div className={"picture-front w-full h-full" + (rotatedPicture ? " pointer-events-none	" : "")} >
					<div data-aos-delay={Math.floor(Math.random() * 10) * 50} data-aos="zoom-in" data-aos-once="true">
						<div className="fixed p-1 mt-1 mr-1 right-0 bg-gray-100 rounded-full shadow-lg">
							<LoopIcon className="hover:animate-spin" onClick={() => setRotatedPicture(!rotatedPicture)} />
						</div>
						<img alt={props.label} className='w-full h-full' src={props.url} onClick={() => props.setSelectedPicture({ url: props.url, label: props.label })} />
						<div className='h-14'>
							<p className='text-xl mb-2 font-poppins'>{props.label}</p>
						</div>
					</div>
				</div>
				<div className="picture-back shadow-lg opacity-95 w-full h-full top-0 absolute grid place-content-center">
					<div className="fixed p-1 mt-1 mr-1 right-0 bg-gray-100 rounded-full shadow-lg">
						<LoopIcon className="hover:animate-spin" onClick={() => setRotatedPicture(!rotatedPicture)} />
					</div>
					<p className="font-poppins text-xl text-center p-6">"{props.description}"</p>
				</div>
			</div>
		</div>
	)
}



export default Picture;