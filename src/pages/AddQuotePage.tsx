import React, {useState} from 'react';
import {
	Grid,
	Box,
	TextField,
	Button,
	Snackbar,
	Alert
} from '@mui/material';
import { makeStyles } from '@mui/styles';
import { addQuote } from '../utils';

const useStyles = makeStyles({
	box: {
        '& .MuiOutlinedInput-root': { 
			color: 'white',
            '& fieldset': {            
                borderColor: 'white',   
				borderWidth: '2px',
            },
            '&:hover fieldset': {
                borderColor: 'white',   
				borderWidth: '3px',
			},
            '&.Mui-focused fieldset': { 
                borderColor: 'yellow',
            },
        },
	},
	container: {
		margin: '4rem 0 2rem 0'
	},
	submit: {
		margin: '2rem',
		fontWeight: "bold"
	},
	page: {
		textAlign: 'center'
	}
})

export function AddQuotePage () {
	const [quote, setQuote] = useState<string>("");
	const [author, setAuthor] = useState<string>("");
	const [book, setBook] = useState<string>("");
	const [success, setSuccess] = useState<boolean>(false);

	const classes = useStyles();

	const handleClick = async () => {
		await addQuote({
			text: quote,
			author: author,
			book: book,
			createdAt: new Date(),
		})
		setQuote("");
		setBook("");
		setAuthor("");
		setSuccess(true);
	}

	return (
		<Box
			component="form"
			className={classes.page}
		>
			<Grid   container
					direction="row"
					justifyContent="center"
					alignItems="center"
					className={classes.container}
					spacing={2}
			>
				
				<Grid item md={6}>
					<TextField
						InputLabelProps={{ style: {color: "white"} }}
						className={classes.box}
						id="outlined-multiline-static"
						label="Quote"
						multiline
						rows={4}
						onChange={(e) => setQuote(e.target.value)}
						value={quote}
					/>
				</Grid>
				<Grid 
					item 
					container 
					md={6} 
					direction="column"
					justifyContent="space-between"
					alignItems="center"
					spacing={2}
				>
					<Grid item>
						<TextField
							InputLabelProps={{ style: {color: "white"} }}
							className={classes.box}
							id="outlined"
							label="Book"
							onChange={(e) => setBook(e.target.value)}
							value={book}
						/>
					</Grid>
					<Grid item>
						<TextField
							InputLabelProps={{ style: {color: "white"} }}
							className={classes.box}
							id="outlined"
							label="Author"
							onChange={(e) => setAuthor(e.target.value)}
							value={author}
						/>
					</Grid>
				</Grid>
			</Grid>
			<Button variant='outlined' onClick={handleClick}>Submit</Button>
			<Snackbar open={success} autoHideDuration={6000} onClose={() => setSuccess(false)} anchorOrigin={{ vertical: "bottom", horizontal: 'right' }}>
				<Alert
					sx={{
						backgroundColor: "white",
						width: "100%",
					}}
					onClose={() => setSuccess(false)}
					severity="success"
				>
					Quote submited with success!
				</Alert>
			</Snackbar>
		</Box>
	);
}
	