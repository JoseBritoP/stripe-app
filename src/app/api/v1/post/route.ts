import { NextResponse,NextRequest } from "next/server";

import { createPost, createPostWithCategories,getPosts,getPostByTitle, getPostsByCategory } from "../../controllers/posts";

export async function GET(req:NextRequest){
  const title = req.nextUrl.searchParams.get('title')
  const category = req.nextUrl.searchParams.getAll('category');
  console.log(category)
  try {
    const posts = title ? await getPostByTitle(title) : category ? await getPostsByCategory(category) : await getPosts();
    return NextResponse.json(posts,{status:200,statusText:'Posts'})
  } catch (error:any) {
    return NextResponse.json({error:error.message},{status:404})
  }
};

export async function POST (req:NextRequest){
  const data = await req.json();
  try {
    const newPost = !data.categories ? await createPost(data) : await createPostWithCategories(data);
    return NextResponse.json(newPost,{status:201,statusText:'Post Created'})
  } catch (error:any) {
    return NextResponse.json({error:error.message},{status:400})
  }
};