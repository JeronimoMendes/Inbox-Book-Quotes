import React from 'react';
import {
	Grid, Typography, Button
} from '@mui/material';
import {signIn} from "../utils";
export interface LandingPageProps {
}

export function LandingPage (props: LandingPageProps) {
	return (
		<Grid container justifyContent="center" alignItems="center" direction="column">
			<Grid item>
				<Typography variant="h1">Welcome to Book Quotes</Typography>
				<Typography variant="h3">Register quotes and receive them on your e-mail</Typography>
			</Grid>
			<Button variant='outlined' href='/quote'>Add quote</Button> 
			<Button variant='outlined' onClick={signIn}>Sign in with Google</Button> 
		</Grid>
	);
}
	
