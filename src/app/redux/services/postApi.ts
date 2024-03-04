import { createApi,fetchBaseQuery } from "@reduxjs/toolkit/query";

export type PostType = {
  id:number
  title:string
  content:string
  author:{
    id:number
    username:string
  }
  categories:{
    id:number
    name:string
  }[]
}

export type CreatePost = {
  title:string
  content:string
  userId:string
  categories:number[]
}

export type CreatePostResponse = {
  message:string
  newPost:{
    id:number
    title:string
    content:string
    userId:string
    createAt:string
    categories:{
      id:number,
      name:string
    }[]
  }
}

export const postApi = createApi({
  reducerPath:'postApi',
  baseQuery:fetchBaseQuery({
    baseUrl:'http://localhost:3000/v1/api/'
  }),
  endpoints:({query,mutation})=>({
    getPosts:query<PostType,null>({
      query:()=>'post'
    }),
    getPost:query<PostType,{id:string}>({
      query:({id}) => `post/${id}`
    }),
    loginUser:mutation<CreatePostResponse,CreatePost>({
      query:(postData)=> ({
        url:'post',
        method:'POST',
        body:postData
      })
    })
  })
})