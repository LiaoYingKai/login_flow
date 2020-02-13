import React from 'react';
import routes from '../routes';
import { RenderRoute } from './renderRoute';

function RouteLayout() {
	return (
		<React.Fragment>
			{RenderRoute(routes)}
		</React.Fragment>
	);
}


export default RouteLayout;