import React from 'react';
import PropTypes from 'prop-types';
import ReactAccordionEntry from './react-accordion-entry.jsx';
import styles from './style.scss';

class ReactAccordion extends React.Component {
	constructor() {
		super();

		this.state = {
			entries: []
		};

		this.setEntries = this.setEntries.bind(this);
		this.toggleAccordionEntry = this.toggleAccordionEntry.bind(this);
		this.calculateMaxHeight = this.calculateMaxHeight.bind(this);
	}

	componentWillMount() {
		this.shouldUpdate = false;
		this.setEntries(this.props.data);
	}

	componentDidMount() {
		ReactAccordion.loadStyles();
	}

	componentDidUpdate() {
		if (this.shouldUpdate) {
			this.shouldUpdate = false;
		}
	}

	shouldComponentUpdate() {
		return this.shouldUpdate;
	}

	componentWillReceiveProps(nextProps) {
		if (this.props.data !== nextProps.data) {
			this.shouldUpdate = true;
			this.setEntries(nextProps.data);
		}
	}

	setEntries(data) {
		this.setState({
			entries: data.map(entry => {
				return Object.assign({open: false}, entry);
			})
		});
	}

	static loadStyles() {
		if (typeof window === 'object') {
			styles._insertCss();
		}
	}

	toggleAccordionEntry(index, event) {
		this.shouldUpdate = true;
		let newState;

		if (this.props.multiple) {
			newState = [...this.state.entries];
			newState[index].open = !newState[index].open;
		} else {
			this.closeAllPanels(event.currentTarget.parentNode.parentNode);
			newState = this.state.entries.map((entry, i) => {
				entry.open = (index === i) ? !entry.open : false;
				return entry;
			});
		}

		this.setState({
			entries: newState
		});

		this.calculateMaxHeight(event.currentTarget.nextElementSibling);
	}

	calculateMaxHeight(panel) {
		if (panel.style.maxHeight) {
			panel.style.maxHeight = null;
		} else if (this.props.collapsible && panel.className.indexOf('state-open') > -1) {
			panel.style.maxHeight = null;
		} else {
			panel.style.maxHeight = panel.scrollHeight + 'px';
		}
	}

	closeAllPanels(parent) {
		const panels = parent.getElementsByClassName('accordion-content');
		[...panels].forEach(panel => {
			panel.style.maxHeight = null;
		});
	}

	render() {
		return (
			<div className="react-accordion">
				{this.state.entries.map((entry, index) => {
					return <ReactAccordionEntry key={entry.id} index={index} entry={entry} animation={this.props.animation} toggleHandler={this.toggleAccordionEntry}/>;
				})}
			</div>
		);
	}
}

ReactAccordion.propTypes = {
	multiple: PropTypes.bool,
	collapsible: PropTypes.bool,
	animation: PropTypes.number,
	data: PropTypes.arrayOf(propValue => {
		if (!Array.isArray(propValue)) {
			return new Error('Prop data must be of type array!');
		}

		propValue.forEach(entry => {
			if (!Object.prototype.hasOwnProperty.call(entry, 'title') || !Object.prototype.hasOwnProperty.call(entry, 'content')) {
				return new Error('Invalid data object!');
			}
		});
	})
};

ReactAccordion.defaultProps = {
	multiple: false,
	collapsible: true,
	animation: 300,
	data: []
};

export default ReactAccordion;
