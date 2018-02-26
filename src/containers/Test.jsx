import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button } from 'semantic-ui-react'

import { addOne } from "../actions/test";

class Test extends Component {
	constructor(props) {
		super(props);

		this.state = {
			test: 0
		}
	}

	render() {
		return (
			<div>
				<div>Test</div>
				<div>
					Component State: { this.state.test }
				</div>
				<div>
					Redux State: { this.props.test.data }
				</div>
				<Button onClick={ () => this.props.addOne() && this.setState({test: this.state.test + 1}) }>Add another Onez</Button>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		test: state.test
	}
};

export default connect(mapStateToProps, {addOne})(Test);
