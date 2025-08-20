import { Box, Button, Typography } from '@mui/material'
import React from 'react'

export default function Blogs({image , title}) {
    return (
        <Box sx={{
            width: { xs: '100%', md: '45%' },
            mb:2
        }}>
            <img  src={image} alt="" />
            <Typography component='a' sx={{cursor:'pointer', fontSize: 30, fontWeight: 700,transition:'0.4s',':hover':{color:'#FCD238'} }}>{title}</Typography>
            <Typography sx={{ fontSize: 25, fontWeight: 500,display:'flex' }}>
                By <Typography sx={{ fontSize: 25,color: '#FCD238', fontWeight: 700 }}>admin</Typography> / Date <Typography sx={{fontSize: 25, color: '#FCD238' ,fontWeight: 700 }}>June 28, 2023</Typography>
            </Typography>
            <Typography>Donec vitae hendrerit arcu, sit amet faucibus nisl. Cras pretium arcu ex. Aenean posuere libero eu augue condimentum rhoncus. Praesent ornare tortor ac ante egestas hendrerit. Aliquam et metus pharetra, bibendum massa nec, fermentum odio.</Typography>
            <Button sx={{
                my:1,
                backgroundColor:'#333333',
                borderRadius:'50px',
                color:'white',
                transition:'0.4s',
                ':hover':{backgroundColor:'#FCD238'}
                }} variant="contained">Read More</Button>
        </Box>
    )
}
