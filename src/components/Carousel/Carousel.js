import React, { Component, Children } from 'react'
import PropTypes from 'prop-types'
import s from './Carousel.css'
import FontAwesome from 'react-fontawesome'
import MediaQuery from 'react-responsive'


class Carousel extends Component {
	constructor(props) {
		super(props)
		this.state = { slide: 1, dragging: null, sliding: false, offset: 0 }
		this.setTimer = this.setTimer.bind(this)
		this.clearTimer = this.clearTimer.bind(this)
		this.events = {
			onClick: this.onClick.bind(this),
			onTransitionEnd: this.onTransitionEnd.bind(this)
		}
	}
	componentDidMount() {
		this.setTimer()
	}
	componentWillUnmount() {
		this.clearTimer()
	}
	onTransitionEnd() { // this will not be triggered when document.hidden
		let { slide } = this.state
		const count = Children.count(this.props.children)
		if (slide === count + 1) slide = 1
		if (slide === 0) slide = count
		this.setState({ slide, sliding: false }, () => {
			this.setTimer()
			this.props.slideDidChange && this.props.slideDidChange(slide)
		})
	}
	setTimer() {
		const interval = this.props.autoPlayInterval
		if (Children.count(this.props.children) > 1 && interval > 0) {
			this.clearTimer()
			this.timer = window.setInterval(this.changeSlide.bind(this, this.state.slide + 1), interval)
		}
	}
	clearTimer() {
		window.clearInterval(this.timer)
	}
	changeSlide(slide) {
		if (document.hidden) return
		if (this.props.slideWillChange && !this.props.slideWillChange(slide, this.state.slide)) return
		if (slide >= 0 && slide <= React.Children.count(this.props.children) + 1) {
			this.setState({ slide, sliding: true, dragging: null }, this.setTimer)
		}
	}
	onClick(event) {
		if (Math.abs(this.state.offset) < 25) return
		event.preventDefault()
		event.stopPropagation()
		event.nativeEvent.stopPropagation()
	}
	getOffset(slide, slides) {
		let index = Math.floor(slides.length / 2) - slide + 1
		return index
	}
	render() {
		const { children, switcher, indicator, transitionDuration, transitionTimingFunction } = this.props
		const props = Object.assign({}, this.props) // rest parameters is not available before node 8
		delete props.children
		delete props.autoPlayInterval
		delete props.switcher
		delete props.indicator
		delete props.transitionDuration
		delete props.transitionTimingFunction
		delete props.slideWillChange
		delete props.slideDidChange
		const { slide, sliding, dragging, offset } = this.state
		const slides = Children.map(children, (child) => React.cloneElement(child, { key: child.key + '_clone' }))
		const count = Children.count(children)
		const enabled = count > 1
		const goPrevSlide = () => { this.changeSlide(slide - 1) }
		const goNextSlide = () => { this.changeSlide(slide + 1) }
		const slideStyle = {
			flexBasis: '100%',
			flexShrink: 0
		}
		return (
			<div
				{...props}
				className={s.slider}
				style={Object.assign({}, props.style, {
					position: 'relative',
					overflowY: 'hidden',
					overflowX: 'hidden',
					touchAction: 'pan-y pinch-zoom',
					willChange: 'transform'
				})}>
				<ul ref={node => { this.slider = node }} style={{
					listStyleType: 'none',
					padding: 0,
					margin: 0,
					display: 'flex',
					transitionProperty: sliding ? 'transform' : 'none',
					justifyContent: 'center',
					transform: enabled ? (dragging && offset !== 0
						? 'translateX(calc(' + (offset * 1) + 'px - ' + slide * 100 + '%))'
						: 'translateX(' + this.getOffset(slide, slides) * 100 + '%)') : null,
					transitionDuration,
					transitionTimingFunction
				}} {...this.events}>
					{(enabled && Children.map(slides.slice(-1).concat(children, slides.slice(0, 1)),
						(item, index) => <li aria-current={slide === index} style={slideStyle}>{item}</li>)) ||
						<li>{children}</li>
				}
				</ul>
				{enabled && indicator && <ol>
					{Children.map(children, (item, index) =>
						<li aria-current={slide === index + 1} onClick={() => { this.changeSlide(index + 1) }}>
							{index}
						</li>
					)}
				</ol>}
				{enabled && switcher && <div>
					<MediaQuery query='(max-device-width: 720px)' className={s.cardSlide}>
						<button type='button' className={s.prev} onClick={goPrevSlide}>
							<FontAwesome
								name='arrow-circle-o-left'
								size='2x'
								aria-hidden='true' />
						</button>
						<button type='button' className={s.next} onClick={goNextSlide}>
							<FontAwesome
								name='arrow-circle-o-right'
								size='2x'
								aria-hidden='true' />
						</button>
					</MediaQuery>
					<MediaQuery query='(min-device-width: 720px)' className={s.cardSlide}>
						<button type='button' className={`${s.largeButtonLeft} ${s.prev}`} onClick={goPrevSlide}>
							<FontAwesome
								name='arrow-circle-o-left'
								size='4x'
								aria-hidden='true' />
						</button>
						<button type='button' className={`${s.largeButtonRight} ${s.next}`} onClick={goNextSlide}>
							<FontAwesome
								name='arrow-circle-o-right'
								size='4x'
								aria-hidden='true' />
						</button>
					</MediaQuery>
				</div>}
			</div>
		)
	}
}

Carousel.propTypes = {
	autoPlayInterval: PropTypes.number,
	transitionDuration: PropTypes.string,
	transitionTimingFunction: PropTypes.string,
	switcher: PropTypes.bool,
	indicator: PropTypes.bool,
	slideWillChange: PropTypes.func,
	slideDidChange: PropTypes.func,
	children: PropTypes.oneOfType([
		PropTypes.arrayOf(PropTypes.node),
		PropTypes.node
	]).isRequired
}

Carousel.defaultProps = {
	transitionDuration: '.8s',
	transitionTimingFunction: 'ease-in-out',
}

export default Carousel
