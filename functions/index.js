const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
  "sk_test_51MJGzlJlBWZUtzNxuSjAuIM7bUC5v4TrLuS1b7A1PxCCXKQb5rWYJI60GNkjfNMJ45aSswsvi90TBLQV3GQghy2S00wxUWaLDr"
);
// API
// - App config
const app = express();

// - Middlewares
app.use(cors({origin: true}));
app.use(express.json());
// - API routes
app.get("/", (request, response) => response.status(200).send("hello world"));
app.get("/daz", (request, response) => response.status(200).send("daz"));


app.post("/payments/create", async (request, response) => {
  const total = request.query.total;

  console.log("Payment Request Recieved BOOM!!! for this amount >>> ", total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total, // subunits of the currency
    currency: "usd",
  });

  // OK - Created
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

// Listen command
exports.api = functions.https.onRequest(app);

// Example endpoint
// http://127.0.0.1:5001/clone-1e0b0/us-central1/api