import { Box, Typography } from '@mui/material'
import React from 'react'

export default function Posts({image, title , date}) {
  return (
    <Box sx={{
        width:'100%',
        display:'flex',
        my:3
    }}>
        <img className='w-[100px]' src={image} alt="" />
        <Box sx={{ml:2 }}>
            <Typography sx={{fontSize:20 , fontWeight:500}}>{title}</Typography>
            <Typography sx={{fontSize:16 , fontWeight:700 , color:'#999FBA'}}>{date}</Typography>
        </Box>
    </Box>
  )
}
