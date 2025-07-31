"use server";
import Stripe from "stripe";
import { redirect } from "next/navigation";
import getRawBody from "raw-body";
import { CONNECT_MONGO_DB } from "./ConnectMongoDB";

export const CheckOutOrder = async (req, res, order) => {
  const { price } = req;
  console.log(price);
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
  const bucketItems = req.map((item) => ({
    // description: item.description,
    quantity: 1,
    price_data: {
      currency: "USD",
      unit_amount: item.price ? item.price * 100 : null,
      product_data: {
        name: item.name,
        images: [item.image],
      },
    },
  }));
  try {
    const stripeOptions = {
      submit_type: "pay",
      mode: "payment",
      payment_method_types: ["card"],
      line_items: [[{ bucketItems }]],

      mode: "payment",
      shipping_options: [
        {
          shipping_rate: "shr_1OUCRCIHoiPPNwiXruf3KH7F",
          shipping_rate: "shr_1OUCZ2IHoiPPNwiXCcruZKi7",
          //   shipping_rate: "shr_1OU1rmSEH9bFsYJBLQqpkUtJ",
        },
      ],
      // submit_type: "pay",

      billing_address_collection: "auto",

      success_url: `${process.env.URL_VALUE}/success`,
      cancel_url: `${process.env.URL_VALUE}/collection`,
    };
    const session = await stripe.checkout.sessions.create(stripeOptions);
    // return session;
    redirect(session.url);
  } catch (error) {
    throw error;
  }
};

// req.map((e) => {
//   // console.log(e);
//   ({
//     price_data: {
//       currency: "USD",
//       unit_amount: e?.price * 100,
//       // payment_method_types: "card",
//       product_data: {
//         name: e?.name,
//         images: e?.image,
//       },
//     },
//     adjustable_quantity: {
//       enabled: true,
//       minimum: 1,
//     },
//     quantity: e.Quantity,
//   });
// }),
