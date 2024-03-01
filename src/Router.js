import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import { pagesData } from './pages/pagesData';

export const Router = () => {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			{pagesData.map((pageData) => (
				<Route
					key={pageData.id}
					path={pageData.path}
					element={pageData.component}
				/>
			))}
		</Routes>
	);

	// return useRoutes([
	// 	// { path: '/', element: <Home /> },
	// 	pagesData.map((pageData) => ({
	// 		path: pageData.path,
	// 		element: pageData.component,
	// 	})),
	// ]);
};
