import Stripe from "stripe";

export async function POST(req, res) {
  const payload = await req.text();
  const signature = await req.headers["stripe-signature"];
  console.log(signature);

  try {
    const event = Stripe.webhooks.constructEvent(
      payload,
      signature,
      process.env.STRIPE_WEBHOOK_SECRET
    );

    if (event.type === "checkout.session.completed") {
      const session = event.data.object;
      console.log(session);
      // Fulfill the purchase...
      console.log("SESSION: ", session);
    }
  } catch (error) {
    console.log(error);
  }
}
