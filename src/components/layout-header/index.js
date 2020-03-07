import React from 'react';
import { NavLink, } from 'react-router-dom';
import { routePaths } from '../../routes';
import './style.scss';

const {
	HOME,
	ABOUT,
	CONTACT,
} = routePaths;

function LayoutHeader() {
	return (
		<div className="header">
			<ul>
				<li>
					<NavLink exact to={HOME} activeClassName="activeLink" className="home">Home</NavLink>
				</li>
				<li>
					<NavLink to={ABOUT} activeClassName="activeLink" className="about">About</NavLink>
				</li>
				<li>
					<NavLink to={CONTACT} activeClassName="activeLink" className="contact">Contact</NavLink>
				</li>
			</ul>
		</div>
	);
}

export default LayoutHeader;
