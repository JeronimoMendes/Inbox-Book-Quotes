import React from 'react';
import {
	BrowserRouter,
	Routes,
	Route
} from "react-router-dom";
import { AddQuotePage } from './pages/AddQuotePage';

function App() {
	return (
	 <BrowserRouter>
		<Routes>
			<Route path="/" element={<AddQuotePage />} />
		</Routes>
	 </BrowserRouter>
	);
}

export default App;
