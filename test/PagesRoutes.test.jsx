import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { PagesRoutes } from '../src/routes/';

describe('PagesRoutes', () => {
	it('renders the navbar', () => {
		render(
			<Router>
				<PagesRoutes />
			</Router>,
		);

		const navItems = ['About Me', 'Proyects', 'Contact'];
		navItems.forEach((item) => {
			expect(screen.getAllByText(item)[0]).toBeInTheDocument();
		});
	});

	it('renders the correct routes', () => {
		render(
			<Router>
				<PagesRoutes />
			</Router>,
		);

		const routes = ['About Me', 'Contact', 'Proyects'];
		routes.forEach((route) => {
			expect(screen.getAllByText(route)[0]).toBeInTheDocument();
		});
	});

	it('renders AboutMePage on /about-me route', () => {
		const history = createMemoryHistory();
		history.push('/about-me');

		render(
			<Router history={history}>
				<PagesRoutes />
			</Router>,
		);

		const elements = screen.queryAllByText('About Me');
		expect(elements.length).toBeGreaterThan(0);
	});

	it('renders ContactPage on /contact route', () => {
		const history = createMemoryHistory();
		history.push('/contact');

		render(
			<Router history={history}>
				<PagesRoutes />
			</Router>,
		);

		const contactElements = screen.getAllByText('Contact');
		expect(contactElements.length).toBe(2);
	});

	it('renders ProyectsPage on /proyects route', () => {
		const history = createMemoryHistory();
		history.push('/proyects');

		render(
			<Router history={history}>
				<PagesRoutes />
			</Router>,
		);

		const proyectsElements = screen.getAllByText('Proyects');
		expect(proyectsElements.length).toBeGreaterThan(0);
	});
});
