'use client'
import React, { useContext } from 'react'
import Image from 'next/image'
import { Autocomplete, TextField } from '@mui/material'
import WalletIcon from "@mui/icons-material/Wallet"
import { WalletContext } from '@/app/contexts/WalletContext'


const TopHeader = () => {
   const { login } =  useContext(WalletContext);
  return (
         <div className='img-opensea'>

         <Image src='/opensea.svg' width={40} height={40} alt='image'/>
       
          <div className='opensea-title'>OpenSea</div>


         <div className='searchBar'>
           
          <Autocomplete
           renderInput={(params) => (
            <TextField 
              {...params} 
               label={"Search items, collections, and accounts"}
               />
           )} 
           options={[]}
           />
             </div>   


              <div className='MenuView'>
                <div className='Menu'>Explore</div>
                <div className='Menu'>Create</div>
              </div>

          <div onClick={login}>
           <div className='IconView'> 
             <WalletIcon/>
           </div>
           </div>



       
       </div>
  
  )
}

export default TopHeader