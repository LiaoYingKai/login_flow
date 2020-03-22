import loadComponent from './route/loadable';

const Login = loadComponent({ loader: () => import('./pages/login') });
const Home = loadComponent({ loader: () => import('./pages/home') });
const About = loadComponent({ loader: () => import('./pages/about') });

export const routePaths = {
	LOGIN: '/',
	HOME: '/home',
	ABOUT: '/about',
};

const {
	LOGIN,
	HOME,
	ABOUT,
} = routePaths;

const routes = [
	{
		path: LOGIN,
		component: Login,
		exact: true,
	},
	{
		path: HOME,
		component: Home,
		exact: true,
		isPrivate: true,
	},
	{
		path: ABOUT,
		component: About,
		exact: true,
		isPrivate: false,
	},
];

export default routes;