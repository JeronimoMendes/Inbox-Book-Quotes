import React from 'react';
import {
	BrowserRouter,
	Routes,
	Route
} from "react-router-dom";
import { AddQuotePage } from './pages/AddQuotePage';
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

firebase.initializeApp({
	apiKey: process.env.REACT_APP_API_KEY,
	authDomain: process.env.REACT_APP_AUTH_DOMAIN,
	projectId: process.env.REACT_APP_PROJECT_ID,
	storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
	messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
	appId: process.env.REACT_APP_APP_ID
})

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
