import { prisma } from '@/app/config/db';
import { Stripe } from 'stripe';

const { STRIPE_API_KEY } = process.env


export const pricesList = async () => {
  if(STRIPE_API_KEY === undefined) throw new Error('Api key missing');
  const stripe = new Stripe(`${STRIPE_API_KEY}`)
  const prices = await stripe.prices.list();
  if(!prices.data.length) throw new Error(`No suscriptions`);

  return prices.data
};

export const stripeCheckout = async ({priceId,userId}:{priceId:string,userId:string}) => {
  // TODO: Agree userId to premium = true
  // const user = await prisma.user.findUnique({
  //   where:{
  //     id:+userId
  //   }
  // });

  // if(!user) throw new Error(`User don't found`);
  const userUpdated = await prisma.user.update({
    where:{
      id:+userId
    },
    data:{
      premium: true
    },
    select:{
      id:true,
      username:true,
      email:true,
      premium:true
    }
  })
  if(!userUpdated) throw new Error(`User don't found`);

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