import React from 'react'
import { Card, CardTitle } from 'react-materialize'
import s from './CardSlide.css'
import MediaQuery from 'react-responsive'
import Carousel from '../Carousel'
import ProgressiveImage from 'react-progressive-image'

const generateCarousel = (cards) => {
	return (
		<Carousel indicator switcher>
			{cards.map((card, index) => {
				return (
					<div key={index}>{card}</div>
				)
			})}
		</Carousel>
	)
}

const cards = (
	<div>
		<Card
			className={s.cardStyle}
			header={
				<ProgressiveImage src='img/dolbyvoice.jpg' placeholder='img/placeholder.png'>
					{(src) => <CardTitle reveal image={src} waves='light' />}
				</ProgressiveImage>
			}
			title={'Dolby Voice'}
			reveal={
				<div className={s.cardBodyText}>
					{'Dolby VoIP service.'}
					<br /><br />
					{
						'Worked on Dolby Voice Reference Service demo service and \
						Dolby Voice Console hardware provisioning service.'
					}
				</div>
			}>
			<p>
				<a className={s.cardLinkText} href='https://www.dolby.com/voice'>
					{'dolby.com/voice'}
				</a>
			</p>
		</Card>
		<Card
			className={s.cardStyle}
			header={
				<ProgressiveImage src='img/oneroadmap.png' placeholder='img/placeholder.png'>
					{(src) => <CardTitle reveal image={src} waves='light' />}
				</ProgressiveImage>
			}
			title={'One Road to London'}
			reveal={
				<div className={s.cardBodyText}>
					{'Collaboration with journalist Edward Cavanough.'}
					<br /><br />
					{'Wrote plugin to asynchronously load post data and display in Leaflet.js interactive map.'}
				</div>
			}>
			<p>
				<a className={s.cardLinkText} href='https://edward-cavanough-lx6r.squarespace.com/interactive-map'>
					{'https://edward-cavanough-lx6r.squarespace.com/'}
				</a>
			</p>
			<p>
				<a className={s.cardLinkText} href='https://edward-cavanough-lx6r.squarespace.com/template.git'>
					{'Squarespace git repository'}
				</a>
			</p>
		</Card>
		<Card
			className={s.cardStyle}
			header={
				<ProgressiveImage src='img/pinacolada.png' placeholder='img/placeholder.png'>
					{(src) => <CardTitle reveal image={src} waves='light' />}
				</ProgressiveImage>
			}
			title={'Pina Colada'}
			reveal={
				<div className={s.cardBodyText}>
					{'Weather app to predict rainfall 6 minutes into the future.'}
					<br /><br />
					{'Built React / Redux frontend with automated S3 deployment using Travis CI.'}
					<br /><br />
					{'Backend is a Lambda script using OpenCV to predict colour flow.'}
					<br /><br />
					{'Uploads predicted images to public S3 bucket.'}
					<br /><br />
					{'Currently working on mobile client in react-native.'}
				</div>
			}>
			<p>
				<a className={s.cardLinkText} href=''>
					{'Demo'}
				</a>
			</p>
			<p>
				<a className={s.cardLinkText} href='https://github.com/laolsson/pinacolada'>
					{'GitHub'}
				</a>
			</p>
		</Card>
		<Card
			className={s.cardStyle}
			header={
				<ProgressiveImage src='img/reactmediablog.png' placeholder='img/placeholder.png'>
					{(src) => <CardTitle reveal image={src} waves='light' />}
				</ProgressiveImage>
			}
			title={'React Media Blog'}
			reveal={
				<div className={s.cardBodyText}>
					{'Project used as a demo and testing ground for One Road to London.'}
					<br /><br />
					{
						'Frontend contains an interactive 3D globe animated using a three.js \
						react binding and Redux store to hold animation state. Rendering is \
						done by attaching timed render callback to animation component.'
					}
					<br /><br />
					{
						'Displayed data is fetched from serveless Lambda backend which is \
						fetching geotagged photos from Anthony Bourdain\'s Facebook page. \
						This is implemented using Chalice.'
					}
					<br /><br />
					{
						'Zero downtime rolling deployment has been achieved with Travis CI \
						deploying to S3 and API Gateway.'
					}
				</div>
			}>
			<p>
				<a className={s.cardLinkText} href='http://one-road-to-london.s3-website-ap-southeast-2.amazonaws.com/'>
					{'Demo'}
				</a>
			</p>
			<p>
				<a className={s.cardLinkText} href='https://github.com/stan-sack/react-media-blog'>
					{'Frontend GitHub'}
				</a>
			</p>
			<p>
				<a className={s.cardLinkText} href='https://github.com/stan-sack/social-media-scraper'>
					{'Backend GitHub'}
				</a>
			</p>
		</Card>
		<Card
			className={s.cardStyle}
			header={
				<ProgressiveImage src='img/itutorparents.png' placeholder='img/placeholder.png'>
					{(src) => <CardTitle reveal image={src} waves='light' />}
				</ProgressiveImage>
			}
			title={'iTutor Parents'}
			reveal={
				<div className={s.cardBodyText}>
					{
						'Contributed to API and built front end components using React. \
						Engineered and implemented automatic reporting system for parents.'
					}
				</div>
			}>
			<p>
				<a className={s.cardLinkText} href='parents.itutorworld.com.au'>
					{'parents.itutorworld.com.au'}
				</a>
			</p>
			<p>
				<a
					className={s.cardLinkText}
					href='https://play.google.com/store/apps/details?id=io.cordova.itutorparentapp&hl=en'>
					{'Play Store'}
				</a>
			</p>
		</Card>
		<Card
			className={s.cardStyle}
			header={
				<ProgressiveImage src='img/blobgame.png' placeholder='img/placeholder.png'>
					{(src) => <CardTitle reveal image={src} waves='light' />}
				</ProgressiveImage>
			}
			title={'BlobGame'}
			reveal={
				<div className={s.cardBodyText}>
					{'Collaboration with Adelaide artist '}<a href='nicholashanisch.com'>{' Nicholas Hanisch '}</a>
					{
						'to attempt a small game in Java. More a proof of concept than anything else. \
						Ported to Android using libGDX framework. Currently available on Google Play.'
					}
				</div>
			}>
			<p>
				<a className={s.cardLinkText} href='https://github.com/stan-sack/BlobGameGdx'>
					{'GitHub'}
				</a>
			</p>
			<p>
				<a className={s.cardLinkText} href='https://play.google.com/store/apps/details?id=com.stan.game'>
					{'Play Store'}
				</a>
			</p>
		</Card>
		<Card
			className={s.cardStyle}
			header={
				<ProgressiveImage src='img/pulaapply.png' placeholder='img/placeholder.png'>
					{(src) => <CardTitle reveal image={src} waves='light' />}
				</ProgressiveImage>
			}
			title={'Pula Apply'}
			reveal={
				<div className={s.cardBodyText}>{
						'Built major components of API including integration \
						with PostgreSQL, AWS SES and Latex. Made alterations \
						to Gravity Forms integration.'
					}
				</div>
			}>
			<p>
				<a className={s.cardLinkText} href='http://apply.pulacapital.com.au/'>
					{'apply.pulacapital.com.au'}
				</a>
			</p>
		</Card>
		<Card
			className={s.cardStyle}
			header={
				<ProgressiveImage src='img/itutorapply.png' placeholder='img/placeholder.png'>
					{(src) => <CardTitle reveal image={src} waves='light' />}
				</ProgressiveImage>
			}
			title={'iTutor Apply'}
			reveal={
				<div className={s.cardBodyText}>{
						'Built major components of API including integration with PostgreSQL, \
						AWS SES and Latex. Made minor contributions to front end.'
					}
				</div>
			}>
			<p>
				<a className={s.cardLinkText} href='http://apply.itutorworld.com.au/'>
					{'apply.itutorworld.com.au'}
				</a>
			</p>
		</Card>
		<Card
			className={s.cardStyle}
			header={
				<ProgressiveImage src='img/ausrt.png' placeholder='img/placeholder.png'>
					{(src) => <CardTitle reveal image={src} waves='light' />}
				</ProgressiveImage>
			}
			title={'AUSRT'}
			reveal={
				<div className={s.cardBodyText}>{
						'Worked on the site as part of honours thesis. Mostly \
						involved front end HTML and WordPress.'
					}
				</div>
			}>
			<p>
				<a className={s.cardLinkText} href='http://www.ausrt.com/'>
					{'ausrt.com'}
				</a>
			</p>
		</Card>
		<Card
			className={s.cardStyle}
			header={
				<ProgressiveImage src='img/itutorsuite.png' placeholder='img/placeholder.png'>
					{(src) => <CardTitle reveal image={src} waves='light' />}
				</ProgressiveImage>
			}
			title={'iTutor Suite'}
			reveal={
				<div className={s.cardBodyText}>{'Contributed to maintance of Delphi software.'}</div>
			}>
			<p>
				<a className={s.cardLinkText} href='http://itutorworld.com.au/'>
					{'itutorworld.com.au'}
				</a>
			</p>
		</Card>
	</div>
)


export default class CardSlide extends React.Component {
	render() {
		return (
			<div className={s.cardSlide}>
				<MediaQuery query='(min-device-width: 1920px)' className={s.cardSlide}>
					{cards}
				</MediaQuery>
				<MediaQuery query='(max-device-width: 1920px)' className={s.cardSlide}>
					{generateCarousel(cards.props.children)}
				</MediaQuery>
			</div>
		)
	}
}


CardSlide.propTypes = {}

// <Card className={s.cardStyle}>
