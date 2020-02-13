import loadComponent from './route/loadable';

const Home = loadComponent({ loader: () => import('./pages/Home') });
const About = loadComponent({ loader: () => import('./pages/About') });
const Contact = loadComponent({ loader: () => import('./pages/Contact') });
const Me =  loadComponent({ loader: () => import('./pages/Contact/Me') });
const Another =  loadComponent({ loader: () => import('./pages/Contact/Another') });

export const routePaths = {
	HOME: '/',
	ABOUT: '/about',
	CONTACT: '/contact',
	CONTACT_ME: '/contact/me',
};

const {
	HOME,
	ABOUT,
	CONTACT,
	CONTACT_ME
} = routePaths;

const routes = [
	{
		path: HOME,
		component: Home,
		exact: true,
	},
	{
		path: ABOUT,
		component: About,
	},
	{
		path: CONTACT,
		component: Contact,
		routes: [
			{
				path: CONTACT_ME,
				component: Me,
				exact: true,
			},
			{
				path: '/contact/:another',
				component: Another,
			}
		]
	},
];

export default routes;