import { NextRequest,NextResponse } from "next/server";

export async function GET(req:NextRequest){
  return NextResponse.json({DIY:'All categories'})
};

export async function POST (req:NextRequest){
  return NextResponse.json({DIY:'Category created'})
};