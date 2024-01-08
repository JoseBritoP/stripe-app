import { NextRequest, NextResponse } from "next/server"

interface Params {
  params:{
    postId:string
  }
};

export async function GET(_request:NextRequest,{params}:Params){
  return NextResponse.json({DIY:`GET Post ${params.postId}`})
}

export async function PUT(_request:NextRequest,{params}:Params){
  return NextResponse.json({DIY:`PUT Post ${params.postId}`})
}

export async function PATCH(_request:NextRequest,{params}:Params){
  return NextResponse.json({DIY:`PATCH Post ${params.postId}`})
}

export async function DELETE(_request:NextRequest,{params}:Params){
  return NextResponse.json({DIY:`DELETE Post ${params.postId}`})
}
