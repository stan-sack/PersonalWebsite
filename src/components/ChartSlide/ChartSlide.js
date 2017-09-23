import React from 'react'
import { Radar } from 'react-chartjs-2'
import deepcopy from 'deepcopy'
import s from './ChartSlide.css'

export default class ChartSlide extends React.Component {

	static randomColorFactor() {
		return Math.round(Math.random() * 255)
	}

	static randomScalingFactor() {
		return Math.round(Math.random() * 100)
	}

	constructor(props) {
		super(props)
		this.add = this.add.bind(this)
		this.clearData = this.clearData.bind(this)
		this.skillsList = [
			{ name: 'AWS',        icon: 'devicon-amazonwebservices-plain', level: '90', animation: 'imghvr-flip-diag-2',           selected:false },
			{ name: 'React',      icon: 'devicon-react-plain',             level: '90', animation: 'imghvr-reveal-down',           selected:false },
			{ name: 'Gulp',       icon: 'devicon-gulp-plain',              level: '85', animation: 'imghvr-hinge-down',            selected:false },
			{ name: 'JavaScript', icon: 'devicon-javascript-plain',        level: '85', animation: 'imghvr-push-right',            selected:false },
			{ name: 'Linux',      icon: 'devicon-linux-plain',             level: '80', animation: 'imghvr-slide-left',            selected:false },
			{ name: 'Django',     icon: 'devicon-django-plain',            level: '80', animation: 'imghvr-reveal-left',           selected:false },
			{ name: 'Angular',    icon: 'devicon-angularjs-plain',         level: '80', animation: 'imghvr-zoom-out-left',         selected:false },
			{ name: 'Python',     icon: 'devicon-python-plain',            level: '80', animation: 'imghvr-shutter-out-diag-2',    selected:false },
			{ name: 'CSS3',       icon: 'devicon-css3-plain',              level: '75', animation: 'imghvr-zoom-out',              selected:false },
			{ name: 'Git',        icon: 'devicon-git-plain',               level: '75', animation: 'imghvr-hinge-left',            selected:false },
			{ name: 'Webpack',    icon: 'devicon-webpack-plain',           level: '75', animation: 'imghvr-reveal-right',          selected:false },
			{ name: 'HTML5',      icon: 'devicon-html5-plain',             level: '75', animation: 'imghvr-push-up',               selected:false },
			{ name: 'GitLabCI',   icon: 'devicon-gitlab-plain',            level: '70', animation: 'imghvr-flip-diag-1',           selected:false },
			{ name: 'JQuery',     icon: 'devicon-jquery-plain',            level: '70', animation: 'imghvr-fold-down',             selected:false },
			{ name: 'TravisCI',   icon: 'devicon-travis-plain',            level: '70', animation: 'imghvr-shutter-in-out-diag-1', selected:false },
			{ name: 'NodeJS',     icon: 'devicon-nodejs-plain',            level: '70', animation: 'imghvr-hinge-right',           selected:false },
			{ name: 'Jasmine',    icon: 'devicon-jasmine-plain',           level: '65', animation: 'imghvr-slide-right',           selected:false },
			{ name: 'Mocha',      icon: 'devicon-mocha-plain',             level: '65', animation: 'imghvr-zoom-in',               selected:false },
			{ name: 'C++',        icon: 'devicon-cplusplus-plain',         level: '60', animation: 'imghvr-zoom-out-right',        selected:false },
			{ name: 'Docker',     icon: 'devicon-docker-plain',            level: '60', animation: 'imghvr-push-down',             selected:false },
			{ name: 'Nginx',      icon: 'devicon-nginx-plain',             level: '55', animation: 'imghvr-reveal-up',             selected:false },
			{ name: 'Redis',      icon: 'devicon-redis-plain',             level: '50', animation: 'imghvr-flip-vert',             selected:false },
			{ name: 'Java',       icon: 'devicon-java-plain',              level: '50', animation: 'imghvr-shutter-out-vert',      selected:false },
			{ name: 'Android',    icon: 'devicon-android-plain',           level: '40', animation: 'imghvr-shutter-in-horiz',      selected:false },
			{ name: 'PostgreSQL', icon: 'devicon-postgresql-plain',        level: '40', animation: 'imghvr-flip-horiz',            selected:false },
			{ name: 'C',          icon: 'devicon-c-plain',                 level: '40', animation: 'imghvr-slide-up',              selected:false },
		]
		this.tempState = {
			config: {
				labels: [''],
				datasets: [{
					backgroundColor: 'rgba(64,64,64,0.3)',
					pointBackgroundColor: 'rgba(64,64,64,1)',
					lineTension: 0.2,
					data: [100]
				}]
			},
			options: {
				legend: {
					display: false
				},
				title: {
					fontSize: 40,
					display: false,
					text: 'Employer Skills Radar'
				},
				scale: {
					reverse: false,
					pointLabels: {
						fontSize: 20,
						fontFamily: 'Montserrat',
						paddingTop:30,
						paddingBottom:30,
					},
					gridLines: {
						color: [
							'#808080',
							'#FF007F',
							'#7F00FF',
							'#0000FF',
							'#0080FF',
							'#00FF80',
							'#00FF00',
							'#80FF00',
							'#FFFF00',
							'#FF8000',
							'#FF0000'
						]
					},
					ticks: {
						beginAtZero: true,
						max: 100,
					},
				}
			}
		}
		this.state = deepcopy(this.tempState)
		this.originalState = deepcopy(this.tempState)
	}

	componentDidMount() {}

	clearData() {
		delete this.tempState
		this.tempState = deepcopy(this.originalState)
		this.setState(deepcopy(this.originalState))
		this.skillsList = this.skillsList.map((skill) => ({ ...skill, selected: false }))
	}

	renderIconList(skillsList, s) {
		let renderedList = skillsList.map((skill, index) => {
			return (
				<figure
					key={index}
					className={
						`${skill.animation} ${s.languageIconFigure} ${skill.selected ? s.languageSelected : ''}`
					}>
					<i className={`${skill.icon} ${s.languageIcon}`} />
					<figcaption className={`${skill.selected ? s.languageSelected : ''}`}>
						<h3 className={s.skillLevel}>{skill.level}%</h3>
					</figcaption><a onClick={() => {
						this.skillsList[index].selected = !this.skillsList[index].selected
						this.add(skill.name, skill.level)
					}} />
				</figure>
			)
		})
		return renderedList
	}

	add(language, rating) {
		if (this.tempState.config.datasets.length > 0) {
			if (this.tempState.config.labels.indexOf('') !== -1) {
				this.tempState.config.labels.push(language)
				this.tempState.config.datasets = this.tempState.config.datasets.map((dataset) => {
					dataset.data.push(rating)
					return dataset
				})

				this.tempState.config.datasets = this.tempState.config.datasets.map((dataset) => {
					dataset.data.splice(this.tempState.config.labels.indexOf(''), 1)
					return dataset
				})

				this.tempState.config.labels.splice(this.tempState.config.labels.indexOf(''), 1)
			} else if (this.tempState.config.labels.indexOf(language) !== -1) {
				if (this.tempState.config.labels.length === 1) {
					this.tempState.config.labels.push('')
					this.tempState.config.datasets = this.tempState.config.datasets.map((dataset) => {
						dataset.data.push(100)
						return dataset
					})
					this.tempState.config.datasets = this.tempState.config.datasets.map((dataset) => {
						dataset.data.splice(this.tempState.config.labels.indexOf(language), 1)
						return dataset
					})
					this.tempState.config.labels.splice(this.tempState.config.labels.indexOf(language), 1)
				} else {
					this.tempState.config.datasets = this.tempState.config.datasets.map((dataset) => {
						dataset.data.splice(this.tempState.config.labels.indexOf(language), 1)
						return dataset
					})
					this.tempState.config.labels.splice(this.tempState.config.labels.indexOf(language), 1)
				}
			} else {
				this.tempState.config.labels.push(language)
				this.tempState.config.datasets = this.tempState.config.datasets.map((dataset) => {
					dataset.data.push(rating)
					return dataset
				})
			}
		}
		this.setState(deepcopy(this.tempState))
	}
	randomColor(opacity) {
		return (
			`rgba(${this.randomColorFactor()},${this.randomColorFactor()},\
			${this.randomColorFactor()},${(opacity || '.3')})`
		)
	}

	render() {
		return (
			<div className={s.chartSlide}>
				<div className={s.iconContainer}>
					{this.renderIconList(this.skillsList, s)}
				</div>
				<h4 className={s.chartLabel}>Choose your required skills</h4>
				<Radar
					redraw
					data={this.state.config}
					options={{
						...this.state.options,
						maintainAspectRation: true
					}}
					height={0.35 * window.innerHeight}
					width={window.innerWidth} />
				<h4><div onClick={this.clearData} className={s.clearButton}>Clear</div></h4>
			</div>
		)
	}
}
