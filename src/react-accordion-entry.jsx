import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

class ReactAccordionEntry extends React.Component {
	constructor() {
		super();

		this.handleTitleClick = this.handleTitleClick.bind(this);
	}

	handleTitleClick(event) {
		this.props.toggleHandler(this.props.index, event);
	}

	render() {
		return (
			<div className="accordion-entry">
				<div className="accordion-title" onClick={this.handleTitleClick}>{this.props.entry.title}</div>
				<div className={classNames('accordion-content', {'state-open': this.props.entry.open})} style={{transitionDuration: `${this.props.animation}ms`}}>
					<div dangerouslySetInnerHTML={{__html: this.props.entry.content}} className="accordion-content-padding"/>
				</div>
			</div>
		);
	}
}

ReactAccordionEntry.propTypes = {
	index: PropTypes.number.isRequired,
	entry: PropTypes.object.isRequired,
	animation: PropTypes.string.isRequired,
	toggleHandler: PropTypes.func.isRequired
};

export default ReactAccordionEntry;
