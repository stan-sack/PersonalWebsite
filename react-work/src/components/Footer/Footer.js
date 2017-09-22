import FontAwesome from 'react-fontawesome'
import React from 'react'
import s from './Footer.css'
import ScrollToTop from 'react-scroll-up'


const Footer = () => (
	<footer className={s.footer}>
		<ScrollToTop
			showUnder={0}
			topPosition={0}
			style={{
				position: 'static',
				cursor: 'pointer',
				margin: '6px',
				transitionDuration: '0.2s',
				transitionTimingFunction: 'linear',
				transitionDelay: '0s'
			}}>
			<a>
				<FontAwesome
					name='home'
					size='2x'
					inverse
					aria-hidden='true'
					id={s.homeIcon} />
			</a>
		</ScrollToTop>
	</footer>
)

Footer.propTypes = {}

export default Footer
