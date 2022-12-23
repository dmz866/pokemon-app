import { RouterProvider } from 'react-router-dom';
import { Header } from './components/Header';
import { router } from './routes/routes';

export const App = () => {
	return (
		<div>
			<Header />
			<RouterProvider router={router} />
		</div>
	)
};

