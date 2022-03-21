import React, {useState} from 'react';
import {
	Grid,
	Box,
	TextField,
	Button
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

	const classes = useStyles();

	const handleClick = async () => {
		await addQuote({
			text: quote,
			author: author,
			book: book,
			createdAt: new Date(),
		})
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
			>
				
				<Grid item xs={6}>
					<TextField
						InputLabelProps={{ style: {color: "white"} }}
						className={classes.box}
						id="outlined-multiline-static"
						label="Quote"
						multiline
						rows={4}
						onChange={(e) => setQuote(e.target.value)}
					/>
				</Grid>
				<Grid 
					item 
					container 
					xs={6} 
					direction="column"
					justifyContent="space-between"
					alignItems="center">
					<Grid item>
						<TextField
							InputLabelProps={{ style: {color: "white"} }}
							className={classes.box}
							id="outlined"
							label="Book"
							onChange={(e) => setBook(e.target.value)}
						/>
					</Grid>
					<Grid item>
						<TextField
							InputLabelProps={{ style: {color: "white"} }}
							className={classes.box}
							id="outlined"
							label="Author"
							onChange={(e) => setAuthor(e.target.value)}
						/>
					</Grid>
				</Grid>
			</Grid>
			<Button variant='outlined' onClick={handleClick}>Submit</Button>
		</Box>
	);
}
	