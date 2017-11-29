import React from 'react';
import createClass from 'create-react-class';
import PropTypes from 'prop-types';
import Select from 'react-select';
import 'react-select/dist/react-select.css';

require('create-react-class');

const SCENS = [
	{ label: 'Maakunnat', value: 'maakunt' },
	{ label: 'Metsänhoitoalueet', value: 'metsh' },
];

var Scenarios = createClass({
	displayName: 'Scenarios',
	propTypes: {
		label: PropTypes.string,
	},
	getInitialState () {
		return {
			value: [],
		};
	},
	handleSelectChange (value) {
		console.log('Valinnat: ', value);
		this.setState({ value });
	},


	render () {
		const { value } = this.state;
		const options = SCENS;
		return (
			<div className="section">
				<Select
					onChange={this.handleSelectChange}
					options={options}
					placeholder="Valitse aluetaso: "
					simpleValue
					value={value}
				/>
			</div>
		);
	}
});
export default Scenarios