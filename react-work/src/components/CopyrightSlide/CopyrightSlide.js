import React from 'react'
// import { Card, CardTitle } from 'react-materialize'
import s from './CopyrightSlide.css'

const CopyrightSlide = () => (
	<div className={s.copyrightSlide}>
		<div className={s.content}>
			<div className={s.copyright}>
				<a href='http://www.stantsouvallas.com/'>{`Copyright Stan Tsouvallas ${new Date().getFullYear()}`}</a>
				<br />
				<a href='https://github.com/stan-sack/PersonalWebsite'>View the source code</a>
			</div>
		</div>
	</div>
)

CopyrightSlide.propTypes = {}

export default CopyrightSlide
// <Card className={s.cardStyle}>
