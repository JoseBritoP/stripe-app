import { NextResponse,NextRequest } from "next/server";

interface Params {
  params:{
    userId:string
  }
};

export async function GET(_request:NextRequest,{params}:Params){
  return NextResponse.json({DIY:`GET User ${params.userId}`})
}

export async function PUT(_request:NextRequest,{params}:Params){
  return NextResponse.json({DIY:`PUT User ${params.userId}`})
}

export async function PATCH(_request:NextRequest,{params}:Params){
  return NextResponse.json({DIY:`PATCH User ${params.userId}`})
}

export async function DELETE(_request:NextRequest,{params}:Params){
  return NextResponse.json({DIY:`DELETE User ${params.userId}`})
}
