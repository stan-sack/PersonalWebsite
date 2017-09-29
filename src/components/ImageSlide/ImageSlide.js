import React from 'react'
import PropTypes from 'prop-types'
import s from './ImageSlide.css'
import ProgressiveImage from 'react-progressive-image'
import ClientJS from 'clientjs'

const getComponent = (backgroundImage, children, placeholder, id) => {
	let client = new ClientJS()
	let os = client.getOS().name
	let browser = client.getBrowser().name
	if (os === 'iOS' || browser === 'Mobile Safari') {
		return (
			<ProgressiveImage src={backgroundImage} placeholder={placeholder} className={s.wrapper}>
				{(src) => (
					<div
						id={id}
						style={{
							backgroundImage: `url(${backgroundImage})`,
							backgroundAttachment: 'cover',
							width: '100%',
							height: '100%',
							backgroundPosition: 'center center',
							display: 'flex',
							flexDirection: 'column',
							justifyContent: 'center',
							textAlign: 'center',
							backgroundSize: 'cover'
						}}>
						{children}
					</div>
				)}
			</ProgressiveImage>
		)
	}
	return (
		<ProgressiveImage src={backgroundImage} placeholder={placeholder} className={s.wrapper}>
			{(src) => (
				<div
					id={id}
					className={s.backgroundSlide}
					style={{ backgroundImage: `url(${backgroundImage})` }}>
					{children}
				</div>
			)}
		</ProgressiveImage>
	)
}
const ImageSlide = ({ backgroundImage, children, placeholder, id }) => (
	getComponent(backgroundImage, children, placeholder, id)
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
