import React from 'react'
import CheckoutButton from '@/app/components/shared/CheckoutButton'
import { pricesList } from '@/app/api/controllers/stripe'


export default async function PremiumPage() {

  const prices = await pricesList();
  
  return (
    <div className='flex justify-center items-center h-full w-full'>
      <div>
        <header className='text-center my-6'>
          <h1 className='text-2xl'>Premium Page</h1>
        </header>
        <div className='flex gap-x-2 flex-wrap mb-7 '>
          {prices?.map((price:any)=>(
            <div key={price.id} className='bg-slate-400 mb-2 p-7'>
              <h2>{price.nickname === null ? `Plan ${4-1}` : price.nickname}</h2>
              <p className='text-3xl font-bold'>{price.unit_amount / 100 }$</p>
              <CheckoutButton
                priceId={price.id}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
