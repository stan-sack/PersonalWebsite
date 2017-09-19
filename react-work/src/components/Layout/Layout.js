/**
* React Static Boilerplate
* https://github.com/kriasoft/react-static-boilerplate
*
* Copyright © 2015-present Kriasoft, LLC. All rights reserved.
*
* This source code is licensed under the MIT license found in the
* LICENSE.txt file in the root directory of this source tree.
*/

import React from 'react'
// import cx from 'classnames';
import Header from '../Header'
import Footer from '../Footer'
import ImageSlide from '../ImageSlide'
import TextSlide from '../TextSlide'
import CardSlide from '../CardSlide'
import ChartSlide from '../ChartSlide'
import MenuBar from '../MenuBar'
import ResumeSlide from '../ResumeSlide'

import s from './Layout.css'

const Layout = () => (
	<div ref={node => (this.root = node)} className={s.content}>
		<Header />
		<div id='top' />
		<ImageSlide backgroundImage='/img/slide1.jpg'>
			<h1>STAN TSOUVALLAS</h1>
			<h2>SOFTWARE ENGINEER</h2>
			<MenuBar />
		</ImageSlide>
		<TextSlide>
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
		</TextSlide>
		<ImageSlide backgroundImage='/img/slide3.jpg'>
			<h1>Portfolio</h1>
		</ImageSlide>
		<CardSlide />
		<ImageSlide backgroundImage='/img/slide3.jpg'>
			<h1>Skill Set</h1>
		</ImageSlide>
		<ChartSlide />
		<ImageSlide backgroundImage='/img/slide3.jpg'>
			<h1>Resume</h1>
		</ImageSlide>
		<ResumeSlide />
		<Footer />
	</div>
)

export default Layout
