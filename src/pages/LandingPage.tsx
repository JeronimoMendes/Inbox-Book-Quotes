import React, {useState} from 'react';
import {
	Grid, Typography, Button
} from '@mui/material';
import {currentUser, signIn, logout} from "../utils";
export interface LandingPageProps {
}

export function LandingPage (props: LandingPageProps) {
	const [user, setUser] = useState(currentUser());
	console.log(user)

	const onLogout = () => {
		logout();
		console.log("logging out")
		setUser(null);
	}

	const onSignIn = () => {
		signIn(() => {
			setUser(currentUser);
		})
	}

	return (
		<Grid container justifyContent="center" alignItems="center" direction="column">
			<Grid item>
				<Typography variant="h1">Welcome to Book Quotes</Typography>
				<Typography variant="h3">Register quotes and receive them on your e-mail</Typography>
			</Grid>
			<Button variant='outlined' href='/quote'>Add quote</Button> 
			{!user ? (
				<Button variant='outlined' onClick={onSignIn}>Sign in with Google</Button> 
			) : (
				<Typography>Signed in as {user.displayName}. <Button onClick={onLogout}>Logout</Button></Typography>
			)}
		</Grid>
	);
}
	
