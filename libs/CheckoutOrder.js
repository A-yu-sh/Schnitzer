"use server";
import Stripe from "stripe";
import { redirect } from "next/navigation";

export const CheckOutOrder = async (req, res, order) => {
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
  try {
    const stripeOptions = {
      line_items: req.map((e) => {
        return {
          price_data: {
            currency: "USD",
            unit_amount: e.price * 100,
            product_data: {
              name: e.name,
            },
          },
          adjustable_quantity: {
            enabled: true,
            minimum: 1,
          },
          quantity: e.Quantity,
        };
      }),
      mode: "payment",

      shipping_options: [
        {
          shipping_rate: "shr_1OUCRCIHoiPPNwiXruf3KH7F",
          shipping_rate: "shr_1OUCZ2IHoiPPNwiXCcruZKi7",
          //   shipping_rate: "shr_1OU1rmSEH9bFsYJBLQqpkUtJ",
        },
      ],
      submit_type: "pay",

      billing_address_collection: "auto",

      success_url: `http://localhost:3000/`,
      cancel_url: `http://localhost:3000/collection`,
    };
    const session = await stripe.checkout.sessions.create(stripeOptions);

    redirect(session.url);
  } catch (error) {
    throw error;
  }
};