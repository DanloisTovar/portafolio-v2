import { Routes, Route } from 'react-router-dom';
import { PagesRoutes } from '../routes';

export const AppRouter = () => {
	return (
		<>
			<Routes>
				<Route path="/*" element={<PagesRoutes />} />
			</Routes>
		</>
	);
};
