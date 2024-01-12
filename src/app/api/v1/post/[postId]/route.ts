import { NextRequest, NextResponse } from "next/server"

import { deletePost, getPost, updatePost, updatePostInfoCategories } from "@/app/api/controllers/posts"
interface Params {
  params:{
    postId:string
  }
};

export async function GET(_request:NextRequest,{params}:Params){
  try {
    const post = await getPost(params.postId);
    return NextResponse.json(post,{status:200,statusText:'GET POST'})
  } catch (error:any) {
    return NextResponse.json({error:error.message})
  }
}

export async function PUT(req:NextRequest,{params}:Params){
  const data = await req.json()
  try {
    const postUpdate = await updatePost(data);
    return NextResponse.json(postUpdate,{status:200,statusText:'Post updated'})
  } catch (error:any) {
    return NextResponse.json({error:error.message})
  }
}

export async function PATCH(req:NextRequest,{params}:Params){
  const data = await req.json();
  try {
    const postPatch = await updatePostInfoCategories(data);
    return NextResponse.json(postPatch,{status:200,statusText:'Post patched'})
  } catch (error:any) {
    return NextResponse.json({error:error.message})
  }
}

export async function DELETE(req:NextRequest,{params}:Params){
  const data = await req.json();
  try {
    const postToDelete = await deletePost({postId:params.postId,data});
    return NextResponse.json(postToDelete,{status:200,statusText:'Post deleted'})
  } catch (error:any) {
    return NextResponse.json({error:error.message})
  }
}
