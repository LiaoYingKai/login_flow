import loadComponent from './route/loadable';

const Login = loadComponent({ loader: () => import('./pages/login') });
const Home = loadComponent({ loader: () => import('./pages/home') });

export const routePaths = {
	LOGIN: '/',
	HOME: '/home',
};

const {
	LOGIN,
	HOME,
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
	}
];

export default routes;