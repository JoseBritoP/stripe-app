"use client"
import React from 'react'
import axios from 'axios';

export default function CheckoutButton({priceId}:{priceId:string}) {

  const handleCheckout = async (priceId:string) => {
    // TODO: Agree userId to premium
    const response = await axios.post('/api/v1/checkout',{
      priceId
    })

    window.location.href = response.data.url
 
  }

  return (
    <button className='bg-sky-500 text-white px-4 py-2 rounded-sm'
      onClick={() => handleCheckout(priceId)}
    >Buy</button>

  )
}
