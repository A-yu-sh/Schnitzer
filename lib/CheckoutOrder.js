"use server";
import Stripe from "stripe";
import { redirect } from "next/navigation";
import { images } from "@/next.config";

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

// line_items: [
//     req.map((e) => {
//       return {

//       };
//     }),
//   ],

// {
//     price_data: {
//       currency: "inr",
//       unit_amount: order.price * 100,
//       product_data: {
//         name: order.name,
//       },
//     },
//     quantity: order.Quantity,
//   },
// try {
//     const params = {
//       submit_type: 'pay',
//       mode: 'payment',
//       payment_method_types: ['card'],
//       billing_address_collection: 'auto',
//       shipping_options: [
//         { shipping_rate: 'shr_1MJQ4BGNHVVYfPmxWXS8WCkn' },
//         { shipping_rate: 'shr_1MJQ2wGNHVVYfPmx6UVAgtY5' },
//       ],
//       line_items: req.body.map((item: CartDetails) => {
//         return {
//           price_data: {
//             currency: 'USD',
//             product_data: { name: item.name, images: [item.image?.asset.url] },
//             unit_amount: item.price! * 100,
//           },
//           adjustable_quantity: {
//             enabled: true,
//             minimum: 1,
//           },
//           quantity: item.quantity,
//         }
//       }),

//       success_url: `${req.headers.origin}/?success=true`,
//       cancel_url: `${req.headers.origin}/?canceled=true`,
//     }

//     const session = await stripe.checkout.sessions.create(params)
//     res.status(200).json(session)
//   } catch (err: any) {
//     res.status(err.statusCode || 500).json(err.message)
//   }
