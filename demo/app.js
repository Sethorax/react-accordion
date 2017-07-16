import React from 'react';
import ReactDOM from 'react-dom';
import ReactAccordion from '../src/react-accordion.jsx';

class App extends React.Component {
	constructor() {
		super();

		this.state = {
			entries: [
				{
					id: 1,
					title: 'Entry 1',
					content: '<ul data-test="hello"> <li>SubEntry 1</li> <li>SubEntry 2</li> </ul>'
				},
				{
					id: 2,
					title: 'Entry 2',
					content: '<ul> <li>SubEntry 1</li> <li>SubEntry 2</li> </ul><div></div>'
				}
			],
			collapsible: false
		};
	}

	componentDidMount() {
		setTimeout(() => {
			this.setState({
				entries: [
					{
						id: 1,
						title: 'Entry 1',
						content: '<ul data-test="hello"> <li>SubEntry 1</li> <li>SubEntry 2</li> </ul>'
					},
					{
						id: 2,
						title: 'Entry 2',
						content: '<ul> <li>SubEntry 1</li> <li>SubEntry 2</li> </ul><div></div>'
					},
					{
						id: 3,
						title: 'Entry 3',
						content: '<ul> <li>SubEntry 1</li> <li>SubEntry 2</li> </ul><div></div>'
					}
				]
			});
		}, 1000);

		setTimeout(() => {
			this.setState({multiple: true});
		}, 2000);
	}

	render() {
		return (
			<div>
				<h1>React Accordion Demo</h1>
				<div>
					<ReactAccordion data={this.state.entries}/>
				</div>
			</div>
		);
	}
}

ReactDOM.render(<App/>, document.getElementById('app'));
