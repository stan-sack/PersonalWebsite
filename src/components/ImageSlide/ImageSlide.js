import React from 'react'
import PropTypes from 'prop-types'
import s from './ImageSlide.css'
import ProgressiveImage from 'react-progressive-image'
import ClientJS from 'clientjs'

const getClassName = () => {
	let name = s.backgroundSlide
	let client = new ClientJS()
	let os = client.getOS().name
	let browser = client.getBrowser().name
	if (os === 'iOS' && browser === 'Safari') {
		name = `${name} ${s.safari}`
	}
	return name
}
const ImageSlide = ({ backgroundImage, children, placeholder, id }) => (
	<ProgressiveImage src={backgroundImage} placeholder={placeholder}>
		{(src) => (
			<div
				id={id}
				className={getClassName()}
				style={{ backgroundImage: `url(${backgroundImage})` }}>
				{children}
			</div>
		)}
	</ProgressiveImage>

)

ImageSlide.propTypes = {
	id: PropTypes.string,
	placeholder: PropTypes.string,
	backgroundImage: PropTypes.string,
	children: PropTypes.oneOfType(
		[PropTypes.object, PropTypes.arrayOf(PropTypes.element)]
	)
}

export default ImageSlide
