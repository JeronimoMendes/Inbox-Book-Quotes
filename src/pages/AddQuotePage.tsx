import React, {useState} from 'react';
import {
	Grid,
	Box,
	TextField
} from '@mui/material';

export interface AddQuotePageProps {
}

export function AddQuotePage (props: AddQuotePageProps) {
	const [quote, setQuote] = useState<string>();
	const [author, setAuthor] = useState<string>();
	const [book, setBook] = useState<string>();

	return (
		<Grid container alignItems="center">
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
				</Grid>
			</Box>
		</Grid>
	);
}
	