import { db } from "./firebase-config";
import {
	collection,
	addDoc,
	updateDoc,
	doc,
	setDoc,
	arrayUnion,
} from "firebase/firestore";
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut } from "firebase/auth";

const quotesCollectioRef = collection(db, "quote")
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
	quotes: Array<string>,
	email: string,
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

export async function signIn(onSuccess: Function) {
	signInWithPopup(auth, provider)
	.then((result) => {
		console.log(result.user.metadata.creationTime === result.user.metadata.lastSignInTime)
		if (result.user.metadata.creationTime === result.user.metadata.lastSignInTime) {
			addUser({
				id: result.user.uid,
				email: result.user.email,
				quotes: []
			});
		}
		onSuccess();
		// do something to notify the user that the account has been created
	}) // should probably catch errors
}

export function currentUser() {
	return auth.currentUser;
}

export function logout() {
	signOut(auth);
}
