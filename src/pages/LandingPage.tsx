import React, {useState} from 'react';
import {
	Grid, Typography, Button
} from '@mui/material';
import {
	makeStyles
} from '@mui/styles';
import {currentUser, signIn, logout} from "../utils";
import { AddQuotePage } from './AddQuotePage';
export interface LandingPageProps {
}

const useStyles = makeStyles({
	root: {
		color: "#fff"
	},
	signed: {
		textAlign: 'center',
		paddingTop: "2rem"
	}
});

export function LandingPage (props: LandingPageProps) {
	const [user, setUser] = useState(currentUser());
	const classes = useStyles();

	const onLogout = () => {
		logout();
		setUser(null);
	}

	const onSignIn = () => {
		signIn(() => {
			setUser(currentUser);
		})
	}

	return (
		<Grid className={classes.root} container justifyContent="center" alignItems="center" direction="column">
			<Grid item>
				<Typography sx={{ typography: { sm: 'h1', xs: 'h3' }, textAlign: 'center' }} variant="h1">Welcome to Book Quotes</Typography>
				<Typography sx={{ typography: { sm: 'h3', xs: 'h4' }, textAlign: 'center' }} mb={8} variant="h3">Register quotes and receive them on your e-mail</Typography>
			</Grid>
			{!user ? (
				<Button variant='outlined' onClick={onSignIn}>Sign in with Google</Button> 
			) : (
				<Grid item justifyContent="center" alignItems="center">
					<AddQuotePage />
					<Typography className={classes.signed}>Signed in as {user.displayName}. <Button onClick={onLogout}>Logout</Button></Typography>
				</Grid>
			)}
		</Grid>
	);
}
	
