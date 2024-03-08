import { NextResponse,NextRequest } from "next/server";
import { pricesList } from "../../controllers/stripe";

export async function GET(_req:NextRequest) {
  try {
    const prices = await pricesList();
    return NextResponse.json(prices,{status:200,statusText:'Prices'})
  } catch (error:any) {
    return NextResponse.json({error:error.message})
  }
}