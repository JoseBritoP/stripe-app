import { NextResponse,NextRequest } from "next/server";

export async function GET(req:NextRequest){
  return NextResponse.json({DIY:'All users'})
};

export async function POST (req:NextRequest){
  return NextResponse.json({DIY:'User created'})
};