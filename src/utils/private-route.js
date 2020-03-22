import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

const propTypes = {
	children: PropTypes.node,
	isAuth: PropTypes.bool,
	history: PropTypes.object,
};

class PrivateRoute extends Component {
	render() {
		const { children } = this.props;

		return (
			<React.Fragment>
				{children}
			</React.Fragment>
		);
	}
	componentDidMount() {
		const { isAuth, history } = this.props;

		if (!isAuth) {
			history.replace('/');
		}
	}
}

PrivateRoute.propTypes = propTypes;

function mapStateToProps(state) {
	return {
		isAuth: state.auth.isAuth
	};
}

function mapDispatchToProps() {
	return {};
}
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(PrivateRoute));
