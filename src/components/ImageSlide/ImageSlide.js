import React from 'react'
import PropTypes from 'prop-types'
import s from './ImageSlide.css'
import ProgressiveImage from 'react-progressive-image'

const ImageSlide = ({ backgroundImage, children, placeholder }) => (
	<ProgressiveImage src={backgroundImage} placeholder={placeholder}>
		{(src) => (
			<div
				className={s.backgroundSlide}
				style={{ backgroundImage: `url(${src})` }}>
				{children}
			</div>
		)}
	</ProgressiveImage>

)

ImageSlide.propTypes = {
	placeholder: PropTypes.string,
	backgroundImage: PropTypes.string,
	children: PropTypes.oneOfType(
		[PropTypes.object, PropTypes.arrayOf(PropTypes.element)]
	)
}

export default ImageSlide
