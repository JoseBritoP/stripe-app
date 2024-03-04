import { createApi,fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export type UserType = {
  id:number
  username:string
  email:string
  posts:{
    id:number
    title:string
    content:string
    createAt:string
    category:{
      id:number
      name:string
    }[]
  }[]
}

export type Register = { 
  username:string
  email:string
  password:string
}

export type Login = {
  email:string
  password:string
}

export const userApi = createApi({
  reducerPath:'userApi',
  baseQuery:fetchBaseQuery({
    baseUrl:`http:localhost:3000/api/v1/`
  }),
  endpoints:({query,mutation}) => ({

    getUsers:query<UserType[],null>({
      query:() => 'user'
    }),
    getUserById:query<UserType,{id:string}>({
      query:({id}) => `user/${id}`
    }),
    registerUser:mutation<Register,Register>({
      query:(userData)=> ({
        url:'auth/register',
        method:'POST',
        body:userData
      })
    }),
    loginUser:mutation<Login,Login>({
      query:(userData)=> ({
        url:'auth/login',
        method:'POST',
        body:userData
      })
    })
  })
})