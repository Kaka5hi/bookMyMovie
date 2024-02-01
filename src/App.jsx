import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import ShowDetail from './pages/ShowDetail'
import Error from './pages/Error';

function App() {
    return (
		<BrowserRouter>
			<Routes>
				<Route index path='/' element={<Home />} />
				<Route path='/show/:id' element={<ShowDetail />} />
				<Route path='*' element={<Error />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
