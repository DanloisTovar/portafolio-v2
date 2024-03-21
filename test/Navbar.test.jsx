// Navbar.test.js
import { BrowserRouter as Router } from 'react-router-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Navbar from '../src/UI/components/Navbar';

describe('Navbar test', () => {
	/*Verifica que el componente NAvbar se renderiza sin errores  */
	test('renders without crashing', () => {
		render(
			<Router>
				<Navbar navItems={['About Me', 'Proyects', 'Contact']} />
			</Router>,
		);
	});

	/* Comprueba que todos los elementos de navegación se renderizan correctamente */
	test('verifica que los elementos de navegación se renderizan correctamente', () => {
		render(
			<Router>
				<Navbar navItems={['About Me', 'Proyects', 'Contact']} />
			</Router>,
		);

		const navItems1 = screen.getAllByText('About Me');
		const navItems2 = screen.getAllByText('Proyects');
		const navItems3 = screen.getAllByText('Contact');

		navItems1.forEach((item) => expect(item).toBeInTheDocument());
		navItems2.forEach((item) => expect(item).toBeInTheDocument());
		navItems3.forEach((item) => expect(item).toBeInTheDocument());
	});
	/*  test mas corto:*/
	test('los elementos de navegación se renderizan correctamente', () => {
		render(
			<Router>
				<Navbar navItems={['About Me', 'Proyects', 'Contact']} />
			</Router>,
		);

		const navItems = ['About Me', 'Proyects', 'Contact'];
		navItems.forEach((item) => {
			const navItemElements = screen.getAllByText(item);
			navItemElements.forEach((navItemElement) => {
				expect(navItemElement).toBeInTheDocument();
			});
		});
	});

	/* verificar si los elementos de navegación tienen el href correcto: */
	test('navigation items have correct href', () => {
		render(
			<Router>
				<Navbar navItems={['About Me', 'Proyects', 'Contact']} />
			</Router>,
		);

		const navItems = ['About Me', 'Proyects', 'Contact'];
		navItems.forEach((item) => {
			const linkElements = screen
				.getAllByText(item)
				.map((element) => element.closest('a'));
			linkElements.forEach((linkElement) => {
				expect(linkElement).toHaveAttribute(
					'href',
					`/${item.toLowerCase().replace(' ', '-')}`,
				);
			});
		});
	});

	test('el botón de apertura del menú se renderiza y funciona correctamente', () => {
		render(
			<Router>
				<Navbar navItems={['About Me', 'Proyects', 'Contact']} />
			</Router>,
		);

		// Buscar el botón de apertura del menú
		const menuButton = screen.getByLabelText('open drawer');

		// Verificar que el botón esté en el documento
		expect(menuButton).toBeInTheDocument();

		// Simular un click en el botón
		fireEvent.click(menuButton);

		// Verificar que el menú se haya abierto
		const drawer = screen.getByRole('presentation');
		expect(drawer).toBeVisible();
	});
});
