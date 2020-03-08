import loadComponent from './route/loadable';

const Login = loadComponent({ loader: () => import('./pages/login') });

export const routePaths = {
	LOGIN: '/',
};

const {
	LOGIN
} = routePaths;

const routes = [
	{
		path: LOGIN,
		component: Login,
		exact: true,
	},
];

export default routes;