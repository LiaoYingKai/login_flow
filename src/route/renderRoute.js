import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PrivateRoute from '../utils/private-route';

function RouteWithSubRoutes(route) {
	const { isPrivate } = route;

	function privatePage() {
		return (
			<PrivateRoute>
				<Route
					path={route.path}
					render={props => (
						<route.component {...props} routes={route.routes} />
					)}
				/>
			</PrivateRoute>
		);
	}

	function publicPage() {
		return (
			<Route
				path={route.path}
				render={props => (
					<route.component {...props} routes={route.routes} />
				)}
			/>
		);
	}

	return isPrivate ? privatePage() : publicPage();
}

export function RenderRoute(routes) {
	return (
		<Switch>
			{
				routes.map(route => (
					<RouteWithSubRoutes key={route.path} {...route}/>
				))
			}
		</Switch>
	);
}