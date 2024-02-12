import { NextRequest,NextResponse as res } from "next/server";

import { createCategory,getCategories } from "../../controllers/category";

export async function GET(_req:NextRequest){
  try {
    const categories = await getCategories();
    return res.json(categories,{status:200,statusText:'Categories OK'})
  } catch (error:any) {
    return res.json({error:error.message})
  }
  // return NextResponse.json({DIY:'All categories'})
};

export async function POST (req:NextRequest){
  // return NextResponse.json({DIY:'Category created'})
  const data = await req.json()
  try {
    const newCategory = await createCategory(data);
    return res.json(newCategory,{status:201,statusText:'POST Category'})
  } catch (error:any) {
    return res.json({error:error.message})
  }
};