import { Button } from '@mui/material'
import React from 'react'


const Banner = () => {
  return (

    <div className='Banner-Wrapper'>

    
    <div className='Banner-View'>
      <div className='Title'>Discover, collect, and sell extraordinary NFTs</div>
      <div className='Sub-Title'>on the world's first & largest NFT marketPlace</div>


      <div className='Button-View'>
        <Button size='large' variant='contained' className='BannerButton'>Explore</Button>
        <Button size='large' variant='outlined' className='BannerButton'>Create</Button>
      </div>

    </div>

    </div>
  )
} 

export default Banner