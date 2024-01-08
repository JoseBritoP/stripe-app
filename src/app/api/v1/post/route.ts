import { NextResponse,NextRequest } from "next/server";

export async function GET(req:NextRequest){
  return NextResponse.json({DIY:'All posts'})
};

export async function POST (req:NextRequest){
  return NextResponse.json({DIY:'Post created'})
};