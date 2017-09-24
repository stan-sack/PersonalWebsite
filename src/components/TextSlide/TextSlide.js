import React from 'react'
import s from './TextSlide.css'

export default class TextSlide extends React.Component {
	render() {
		return (
			<div className={s.textSlide}>
				<h3 className={s.quote}>
					{
						'Stan began coding during his first year of \
						mechanical engineering and instantly became \
						fascinated with the world of computer science. He \
						shifted his degree towards mechatronics, and on \
						completion with first class honours became free to \
						pledge his full focus toward software development. \
						With Stan able to continue his independent \
						development unhindered he soon was drawn from \
						Adelaide to Sydney to begin his long and inspiring \
						career. One day Stan will return to the world of \
						obotics and automation but for now his main focus \
						is writing elegant snowflakes of code for the \
						powers at be and pursuing the neverending quest for \
						eternal programming knowledge.'
					}
				</h3>
			</div>
		)
	}
}
