import React from 'react';
import {
	BrowserRouter,
	Routes,
	Route
} from "react-router-dom";
import { AddQuotePage } from './pages/AddQuotePage';
import { LandingPage } from './pages/LandingPage';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
	typography: {
		allVariants: {
			fontFamily: ['Bodoni Moda', 'serif'].join(','),
		},
	},
	palette: {
		primary: {
			main: '#fff'
		}
	}
})

function App() {
	return (
		<ThemeProvider theme={theme}>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<LandingPage />} />
					<Route path="/quote" element={<AddQuotePage />} />
				</Routes>
			</BrowserRouter>
		</ThemeProvider>
	);
}

export default App;
