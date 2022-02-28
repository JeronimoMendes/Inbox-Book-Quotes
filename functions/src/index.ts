import * as functions from "firebase-functions";
import * as admin from "firebase-admin";
import * as sgMail from "@sendgrid/mail";

admin.initializeApp();

const API_KEY = functions.config().sendgrid.key;
const TEMPLATE_ID = functions.config().sendgrid.template;
const EMAIL_FROM = functions.config().email.value;
sgMail.setApiKey(API_KEY);

// Functions

export const sendWeeklyQuote = functions.pubsub
    .schedule("every saturday 17:00")
    .onRun(async () => {
      console.log("running function");
      const userSnapshots = await admin.firestore().collection("users").get();

      userSnapshots.forEach((user) => {
        // pick random quote
        console.log(user.data());
        console.log("Sending a quote email to user: " + user.data().id);
        const randomQuoteId = user.data()
            .quotes[Math.floor(Math.random() * user.data().quotes.length)];

        console.log("Quote: " + randomQuoteId);
        admin.firestore().doc("quote/" + randomQuoteId).get().then((res) => {
          sgMail.send({
            to: user.data().email,
            from: EMAIL_FROM,
            templateId: TEMPLATE_ID,
            dynamicTemplateData: {
              text: res.get("text"), // Quote text here
              author: res.get("author"), // Quote author here
              book: res.get("book"), // Book title here
            },
          });
        });
      });
    });
