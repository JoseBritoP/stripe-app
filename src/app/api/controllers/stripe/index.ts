import { Stripe } from 'stripe';

const { STRIPE_API_KEY } = process.env


export const pricesList = async () => {
  if(STRIPE_API_KEY === undefined) throw new Error('Api key missing');
  const stripe = new Stripe(`${STRIPE_API_KEY}`)
  const prices = await stripe.prices.list();
  if(!prices.data.length) throw new Error(`No suscriptions`);

  return prices.data
};

export const stripeCheckout = async ({priceId}:{priceId:string}) => {
  // TODO: Agree userId to premium = true
  if(STRIPE_API_KEY === undefined) throw new Error('Api key missing');
  const stripe = new Stripe(`${STRIPE_API_KEY}`)

  const session = await stripe.checkout.sessions.create({
    mode:'subscription',
    payment_method_types:['card'],
    line_items:[
      {
        price:priceId,
        quantity:1,
      }
    ],
    success_url:'http://localhost:3000/premium/success',
    cancel_url:'http://localhost:3000/premium'
  })
  return {
    url:session.url
  }
}