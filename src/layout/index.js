import React from 'react';
import { HashRouter as Router, } from 'react-router-dom';
import LayoutRouter from '../route';

function Layout() {
	return (
		<Router>
			<LayoutRouter/>
		</Router>
	);
}

export default Layout;