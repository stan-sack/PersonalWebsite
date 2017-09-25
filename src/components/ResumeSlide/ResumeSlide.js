import React from 'react'
import s from './ResumeSlide.css'
import resumeImg from './cv_for_website.png'
import placeholder from './placeholder.png'
import ProgressiveImage from 'react-progressive-image'

export default class ResumeSlide extends React.Component {
	state = { scale: 3.2 }

	zoomIn() {
		if (this.state.scale > 5) {
			return
		}
		this.setState({ scale: this.state.scale + 0.3 })
	}

	zoomOut() {
		if (this.state.scale < 0.5) {
			return
		}
		this.setState({ scale: this.state.scale - 0.3 })
	}

	render() {
		return (
			<div className={s.resumeSlide}>
				<div className={s.resumeSlideOuter}>
					<div className={s.pdfInner}>
						<ProgressiveImage src={resumeImg} placeholder={placeholder}>
							{(src) => (
								<img
									className={s.pdfContainer}
									src={src} />
							)}
						</ProgressiveImage>
					</div>
				</div>
			</div>
		)
	}
}

ResumeSlide.propTypes = {}

// <div className={s.zoomButtons}>
// 	<MediaQuery query='(min-device-width: 1000px)' className={s.cardSlide}>
// 		<FontAwesome
// 			className={s.zoomInButton}
// 			name='plus-circle'
// 			size='4x'
// 			aria-hidden='true'
// 			onClick={() => this.zoomIn()} />
// 		<br />
// 		<FontAwesome
// 			className={s.zoomOutButton}
// 			name='minus-circle'
// 			size='4x'
// 			aria-hidden='true'
// 			onClick={() => this.zoomOut()} />
// 	</MediaQuery>
// 	<MediaQuery query='(max-device-width: 1000px)' className={s.cardSlide}>
// 		<FontAwesome
// 			className={s.zoomInButton}
// 			name='plus-circle'
// 			size='3x'
// 			aria-hidden='true'
// 			onClick={() => this.zoomIn()} />
// 		<br />
// 		<FontAwesome
// 			className={s.zoomOutButton}
// 			name='minus-circle'
// 			size='3x'
// 			aria-hidden='true'
// 			onClick={() => this.zoomOut()} />
// 	</MediaQuery>
// </div>
