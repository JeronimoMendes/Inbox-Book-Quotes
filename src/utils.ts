import { db } from "./firebase-config";
import {
	collection,
	addDoc,
	updateDoc,
	doc,
	setDoc,
	arrayUnion
} from "firebase/firestore";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import userEvent from "@testing-library/user-event";

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
	if (auth.currentUser) {
		addDoc(quotesCollectioRef, quote)
		.then((res) => {
			const userDoc = doc(db, "users", auth.currentUser.uid);
			updateDoc(userDoc, {quotes: arrayUnion(res.id)})
		})
	}
}

async function addUser(user: User) {
	await setDoc(doc(db, "users", user.id), user);
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
