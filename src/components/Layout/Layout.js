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
import ScrollableAnchor from 'react-scrollable-anchor'
import Header from '../Header'
import Footer from '../Footer'
import ImageSlide from '../ImageSlide'
import TextSlide from '../TextSlide'
import CardSlide from '../CardSlide'
import ChartSlide from '../ChartSlide'
import MenuBar from '../MenuBar'
import ResumeSlide from '../ResumeSlide'
import CopyrightSlide from '../CopyrightSlide'

import s from './Layout.css'

export default class Layout extends React.Component {
	render() {
		return (
			<div ref={node => (this.root = node)} className={s.content}>
				<Header />
				<div id='top' />
				<ImageSlide backgroundImage='/img/slide1.jpg'>
					<h1>STAN TSOUVALLAS</h1>
					<h2>SOFTWARE ENGINEER</h2>
					<MenuBar />
				</ImageSlide>
				<ScrollableAnchor id={'about'}>
					<TextSlide />
				</ScrollableAnchor>
				<ImageSlide backgroundImage='/img/slide3.jpg'>
					<h1>Portfolio</h1>
				</ImageSlide>
				<ScrollableAnchor id={'portfolio'}>
					<CardSlide />
				</ScrollableAnchor>
				<ImageSlide backgroundImage='/img/slide5.jpg' placeholder='/hires-img/slide5.jpg'>
					<h1>Skill Set</h1>
				</ImageSlide>
				<ScrollableAnchor id={'skillset'}>
					<ChartSlide />
				</ScrollableAnchor>
				<ImageSlide backgroundImage='/hires-img/dummy11.jpg' placeholder='/img/dummy11.jpg'>
					<h1>Resume</h1>
				</ImageSlide>
				<ScrollableAnchor id={'resume'}>
					<ResumeSlide />
				</ScrollableAnchor>
				<CopyrightSlide />
				<Footer />
			</div>
		)
	}
}
