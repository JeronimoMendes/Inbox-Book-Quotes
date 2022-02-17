import React, {useState} from 'react';
import {
	Grid,
	Box,
	TextField,
	Button
} from '@mui/material';
import { addQuote } from '../utils';

export interface AddQuotePageProps {
}

export function AddQuotePage (props: AddQuotePageProps) {
	const [quote, setQuote] = useState<string>("");
	const [author, setAuthor] = useState<string>("");
	const [book, setBook] = useState<string>("");

	const handleClick = async () => {
		console.log("submiting quote")
		await addQuote({
			text: quote,
			author: author,
			book: book,
			createdAt: new Date(),
		})
	}

	return (
		<Grid direction="column">
			<Box
				component="form"
			>
				<Grid>
					<Grid item>
						<TextField
							id="outlined-multiline-static"
							label="Quote"
							multiline
							rows={4}
							required
							onChange={(e) => setQuote(e.target.value)}
						/>
					</Grid>
					<Grid item container>
						<Grid item>
							<TextField
								required
								id="outlined"
								label="Book"
								onChange={(e) => setBook(e.target.value)}
							/>
						</Grid>
						<Grid item>
							<TextField
								required
								id="outlined"
								label="Author"
								onChange={(e) => setAuthor(e.target.value)}
							/>
						</Grid>
					</Grid>
					<Button variant='outlined' onClick={handleClick}>Submit</Button>
				</Grid>
			</Box>
		</Grid>
	);
}
	