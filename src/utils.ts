import { db } from "./firebase-config";
import {
	collection,
	addDoc,

} from "firebase/firestore";

const quotesCollectioRef = collection(db, "quote")

interface Quote {
	text: string;
	author: string;
	book: string;
	createdAt: Date;
}

export async function addQuote(quote: Quote) {
	await addDoc(quotesCollectioRef, quote);
}