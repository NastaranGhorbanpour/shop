import { Box, Typography } from '@mui/material'
import React from 'react'

export default function Info({icon , cont1 , cont2}) {
  return (
    <Box sx={{
        width:{xs:'100%' , md:'45%' , lg:'23%'},
        display:'flex',
        alignItems:'center',
        m:{xs:2 , lg:0}
    }}> 
        
        <Box sx={{mr:3}}>
            {icon}
        </Box>
        <Box>
            <Typography sx={{fontSize:20, fontWeight:700}}>{cont1}</Typography>
            <Typography>{cont2}</Typography>
        </Box>
    </Box>
  )
}
