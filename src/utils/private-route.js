import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';

const propTypes = {
	children: PropTypes.node,
	history: PropTypes.object,
};

function PrivateRoute({
	children,
	history
}) {
	const isAuth = useSelector(state => state.auth.isAuth);

	if (!isAuth) {
		history.replace('/');
		
	}
	return children;
}

PrivateRoute.propTypes = propTypes;

export default withRouter(PrivateRoute);
