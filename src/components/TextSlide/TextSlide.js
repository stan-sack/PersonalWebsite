import React from 'react'
import s from './TextSlide.css'

export default class TextSlide extends React.Component {
	render() {
		return (
			<div className={s.textSlide}>
				<h3 className={s.quote}>
					{
						'Stan began programming during his first year of \
						mechanical engineering and instantly became \
						fascinated with the world of computer science. He \
						shifted his degree towards mechatronics, and on \
						completion with first class honours became free to \
						pledge his full focus toward software engineering. \
						With Stan able to continue his independent \
						development unhindered he soon was drawn from \
						Adelaide to Sydney to begin a career which has since \
						taken him across the world and back, to work on a range diverse \
						and exciting projects with some extremely talented people. \
						To this day he continues to learn and strives to work on \
						software that will make the world a better place.'
					}
				</h3>
			</div>
		)
	}
}
