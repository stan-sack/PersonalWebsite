import React from 'react';
import { Radar } from 'react-chartjs-2';
import deepcopy from 'deepcopy'
import s from './ChartSlide.css';



class ChartSlide extends React.Component {

	static randomColorFactor() {
		return Math.round(Math.random() * 255);
	}

	static randomScalingFactor() {
		return Math.round(Math.random() * 100);
	}

	constructor(props) {
		super(props)
		this.add = this.add.bind(this)
		this.clearData = this.clearData.bind(this)
		this.skillsList = [
			{ name: 'C', icon: 'devicon-c-plain', level: '75', animation: 'imghvr-slide-up', selected:false },
			{ name: 'B', icon: '', level: '76', animation: 'imghvr-slide-up' },
			{ name: 'D', icon: '', level: '76', animation: 'imghvr-slide-up' },
			{ name: 'C', icon: 'devicon-c-plain', level: '75', animation: 'imghvr-slide-up' },
			{ name: 'C', icon: 'devicon-c-plain', level: '75', animation: 'imghvr-slide-up' },
			{ name: 'C', icon: 'devicon-c-plain', level: '75', animation: 'imghvr-slide-up' },
			{ name: 'C', icon: 'devicon-c-plain', level: '75', animation: 'imghvr-slide-up' },
			{ name: 'C', icon: 'devicon-c-plain', level: '75', animation: 'imghvr-slide-up' },
			{ name: 'C', icon: 'devicon-c-plain', level: '75', animation: 'imghvr-slide-up' },
			{ name: 'C', icon: 'devicon-c-plain', level: '75', animation: 'imghvr-slide-up' },
			{ name: 'C', icon: 'devicon-c-plain', level: '75', animation: 'imghvr-slide-up' },
			{ name: 'C', icon: 'devicon-c-plain', level: '75', animation: 'imghvr-slide-up' },
			{ name: 'C', icon: 'devicon-c-plain', level: '75', animation: 'imghvr-slide-up' },
			{ name: 'C', icon: 'devicon-c-plain', level: '75', animation: 'imghvr-slide-up' },
			{ name: 'C', icon: 'devicon-c-plain', level: '75', animation: 'imghvr-slide-up' },
			{ name: 'C', icon: 'devicon-c-plain', level: '75', animation: 'imghvr-slide-up' },
			{ name: 'C', icon: 'devicon-c-plain', level: '75', animation: 'imghvr-slide-up' },
			{ name: 'C', icon: 'devicon-c-plain', level: '75', animation: 'imghvr-slide-up' },
			{ name: 'C', icon: 'devicon-c-plain', level: '75', animation: 'imghvr-slide-up' },
			{ name: 'C', icon: 'devicon-c-plain', level: '75', animation: 'imghvr-slide-up' },
			{ name: 'C', icon: 'devicon-c-plain', level: '75', animation: 'imghvr-slide-up' },
		]
		this.tempState = {
			config: {
				labels: [''],
				datasets: [{
					backgroundColor: 'rgba(64,64,64,0.3)',
					pointBackgroundColor: 'rgba(64,64,64,1)',
					lineTension: .2,
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
						color: ['#808080', '#FF007F', '#7F00FF', '#0000FF', '#0080FF', '#00FF80', '#00FF00', '#80FF00', '#FFFF00', '#FF8000', '#FF0000']
					},
					ticks: {
						beginAtZero: true,
						max: 100,
					},
				}
			}
		}
		this.state = deepcopy(this.tempState)
	}

	componentDidMount() {}

	clearData() {
		this.tempState.config.datasets.data = [100];
		this.tempState.config.datasets[0].data = [100];
		this.tempState.config.labels = [''];
		this.skillsList = this.skillsList.map((skill) => ({...skill, selected: false}))
		this.setState(this.tempState);
		// window.myRadar.update();
	}

	renderIconList(skillsList, s) {
		let renderedList = skillsList.map((skill, index) => {
			return (
				<figure key={index} className={`${skill.animation} ${s.languageIconFigure} ${skill.selected?s.languageSelected:''}`}>
					<i className={`${skill.icon} ${s.languageIcon}`} />
					<figcaption className={`${skill.selected?s.languageSelected:''}`}>
						<h3>{skill.level}%</h3>
					</figcaption><a onClick={() => {
						this.skillsList[index].selected = !this.skillsList[index].selected
						this.add(skill.name, skill.level)}
					} />
				</figure>
			)
		})
		return renderedList
	}

	add(language, rating) {
		if (this.tempState.config.datasets.length > 0) {
			if (this.tempState.config.labels.indexOf('') !== -1) {
				this.tempState.config.labels.push(language);
				this.tempState.config.datasets = this.tempState.config.datasets.map((dataset) => {
					dataset.data.push(rating);
					return dataset
				});

				this.tempState.config.datasets = this.tempState.config.datasets.map((dataset) => {
					dataset.data.splice(this.tempState.config.labels.indexOf(''), 1);
					return dataset
				});
				// $.each(this.tempState.config.datasets, function(i, dataset) {
				//     dataset.data.push(rating);
				// });
				// $.each(this.tempState.config.datasets, function(i, dataset) {
				//     dataset.data.splice(this.tempState.config.labels.indexOf('Initialise by choosing a skill'), 1);
				// });
				this.tempState.config.labels.splice(this.tempState.config.labels.indexOf(''), 1);
			} else if (this.tempState.config.labels.indexOf(language) !== -1) {
				if (this.tempState.config.labels.length === 1) {
					this.tempState.config.labels.push('');
					this.tempState.config.datasets = this.tempState.config.datasets.map((dataset) => {
						dataset.data.push(100);
						return dataset
					});
					this.tempState.config.datasets = this.tempState.config.datasets.map((dataset) => {
						dataset.data.splice(this.tempState.config.labels.indexOf(language), 1);
						return dataset
					});
					// $.each(this.tempState.config.datasets, function(i, dataset) {
					//     dataset.data.push(100);
					// });
					// $.each(this.tempState.config.datasets, function(i, dataset) {
					//     dataset.data.splice(this.tempState.config.labels.indexOf(language), 1);
					// });
					this.tempState.config.labels.splice(this.tempState.config.labels.indexOf(language), 1);
				} else {
					this.tempState.config.datasets = this.tempState.config.datasets.map((dataset) => {
						dataset.data.splice(this.tempState.config.labels.indexOf(language), 1);
						return dataset
					});
					// $.each(this.tempState.config.datasets, function(i, dataset) {
					//     dataset.data.splice(this.tempState.config.labels.indexOf(language), 1);
					// });
					this.tempState.config.labels.splice(this.tempState.config.labels.indexOf(language), 1);
				}
			} else {
				this.tempState.config.labels.push(language);
				this.tempState.config.datasets = this.tempState.config.datasets.map((dataset) => {
					dataset.data.push(rating);
					return dataset
				});
				// $.each(this.tempState.config.datasets, function(i, dataset) {
				//     dataset.data.push(rating);
				// });
			}
			// window.myRadar.update();
		}
		this.setState(deepcopy(this.tempState));
	}

	randomColor(opacity) {
		return `rgba(${this.randomColorFactor()},${this.randomColorFactor()},${this.randomColorFactor()},${(opacity || '.3')})`;
	}

	render() {
		return (
			<div className={s.chartSlide}>
				<div className={s.iconContainer}>
					{this.renderIconList(this.skillsList, s)}
				</div>
				<h4 className={s.chartLabel}>Choose your required skills</h4>
				<Radar
					data={this.state.config}
					options={this.state.options}
					height={0.035*window.innerHeight} />
				<div onClick={this.clearData} className={s.clearButton}>Clear</div>
			</div>
		);
	}
}

export default ChartSlide;
