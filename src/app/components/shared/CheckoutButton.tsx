"use client"
import React from 'react'
import axios from 'axios';
import { useAuthStore } from '@/app/services/authStore';

export default function CheckoutButton({priceId}:{priceId:string}) {

  const { profile } = useAuthStore();
  
  const handleCheckout = async (priceId:string) => {
    // TODO: Agree userId to premium
    const response = await axios.post('/api/v1/checkout',{
      priceId,
      userId:profile.id
    })

    if(response.status === 400){
      window.location.href = '/'
    }

    window.location.href = response.data.url
 
  }

  return (
    <button className='bg-sky-500 text-white px-4 py-2 rounded-sm'
      onClick={() => handleCheckout(priceId)}
    >Buy</button>

  )
}
