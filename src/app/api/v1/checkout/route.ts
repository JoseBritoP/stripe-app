import { NextRequest,NextResponse } from "next/server";
import { stripeCheckout } from "../../controllers/stripe";

export async function POST(req:NextRequest) {
  const data = await req.json();
  try {
    const checkout = await stripeCheckout(data);
    return NextResponse.json(checkout,{status:200,statusText:'Checkout'})
  } catch (error:any) {
    return NextResponse.json({error:error.message},{status:400,statusText:'Bad Request'})
  }
}