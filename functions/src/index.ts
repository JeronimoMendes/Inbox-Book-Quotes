import * as functions from "firebase-functions";
import * as admin from "firebase-admin"
import * as sgMail from "@sendgrid/mail";

admin.initializeApp();

const API_KEY = functions.config().sendgrid.key;
const TEMPLATE_ID = functions.config().sendgrid.template;
sgMail.setApiKey(API_KEY);

// Functions

export const sendWeeklyQuote = functions.pubsub.schedule('every saturday 17:00').onRun(async context => {
	const userSnapshots = await admin.firestore().collection('users').get();

	const emails = userSnapshots.docs.map(snap => snap.data().email);

	// For each user, send a quote
	emails.forEach(email => {
		// fetch random quote from the current user
		sgMail.send({
			to: email,
			from: '',
			templateId: TEMPLATE_ID,
			dynamicTemplateData: {
				text: "", // Quote text here
				author: "", // Quote author here
				book: "", // Book title here
			}
		});		
	});
});