import { Routes, Route, Navigate } from 'react-router-dom';
import { Navbar } from '../UI';
import { AboutMePage, ContactPage, ProyectsPage } from '../pages';
export const PagesRoutes = () => {
	return (
		<>
			<Navbar navItems={['About Me', 'Proyects', 'Contact']} />

			<div className="container mt-16 sm:mt-16 md:mt-16 lg:mt-16 xl:mt-16 2xl:mt-16">
				<Routes>
					<Route path="/about-me" element={<AboutMePage />} />
					<Route path="/contact" element={<ContactPage />} />
					<Route path="/proyects" element={<ProyectsPage />} />
					<Route path="/*" element={<Navigate to="/about-me" />} />
				</Routes>
			</div>
		</>
	);
};
