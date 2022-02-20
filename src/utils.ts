import { db } from "./firebase-config";
import {
	collection,
	addDoc,
} from "firebase/firestore";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

const quotesCollectioRef = collection(db, "quote")
const usersCollectioRef = collection(db, "users")
const provider = new GoogleAuthProvider();
const auth = getAuth();



interface Quote {
	text: string;
	author: string;
	book: string;
	createdAt: Date;
}

interface User {
	id: string,
	quotes: Array<string>
}

export async function addQuote(quote: Quote) {
	await addDoc(quotesCollectioRef, quote);
}

async function addUser(user: User) {
	await addDoc(usersCollectioRef, user)
}

export async function signIn() {
	signInWithPopup(auth, provider)
	.then((result) => {
		addUser({
			id: result.user.uid,
			quotes: []
		})
		// do something to notify the user that the account has been created
	}) // should probably catch errors
}
