
interface Quote {
	text: string;
	author: string;
	book: string;
}

export async function addQuote(quote: Quote) {
	console.log(quote);
	console.log(process.env)
}