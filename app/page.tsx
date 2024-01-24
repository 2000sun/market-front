import Banner from '@/components/Banner'
import TopHeader from '@/components/TopHeader'
import React from 'react'
import { WalletContextProvider } from "@/app/contexts/WalletContext"


const page = () => {

  return (
    <div>
      <WalletContextProvider>
      <TopHeader></TopHeader>   
      <Banner></Banner>   
      </WalletContextProvider>
      </div>
  )
  
}

export default page





