import React from 'react';
import {
	BrowserRouter,
	Routes,
	Route
} from "react-router-dom";
import { AddQuotePage } from './pages/AddQuotePage';
import { LandingPage } from './pages/LandingPage';

function App() {
	return (
	 <BrowserRouter>
		<Routes>
			<Route path="/" element={<LandingPage />} />
			<Route path="/quote" element={<AddQuotePage />} />
		</Routes>
	 </BrowserRouter>
	);
}

export default App;
