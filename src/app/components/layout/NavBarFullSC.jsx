"use client"
import { Box, List, ListItemButton } from '@mui/material'
import { usePathname } from 'next/navigation'
import React from 'react'

export default function NavBarFullSC({menu}) {
  const pathname = usePathname()
  const Items =[
    {title : 'Home' , href:'/Home'},
    {title : 'Shop' , href:'/shop'},
    {title : 'Blog' , href:'/blog'},
    {title : 'Contact' , href:''}  
  ]
  return (
    <Box sx={{
        width:{xs:'100%' , md:'100%'},
        backgroundColor:{xs:'black' , md:'#313D4D'},
        display:{xs: menu?'block':'none' , md:'flex'},
        justifyContent:'center',
        position:{xs:'absolute' , md:'sticky'},
        zIndex:1000,
        top:{xs:'145px' , md:0},
        right:0
    }}>

      <List sx={{
        display:{xs:'block' , md:'flex'},
        justifyContent:'space-between',
        width:{xs:'100%',md:'45%'},
        
      }}>
        {Items && Items.map((val, i) =>{
          const isSlected = pathname === val.href

          return(
            <ListItemButton key={i} component="a" href={val.href} 
            sx={{
              color: isSlected ? '#FCD238' : 'white',
              display:'flex',
              justifyContent:'center',
              transition:'0.4s',
              borderTop: isSlected ? '2px solid #FCD238':{xs:'1px solid white' , md:'none'},
              py:{xs:3},
              ":hover":{color:'#FCD238'}
            }}
            >
              {val.title}
            </ListItemButton>
          )
        })}
      </List>
    </Box>
  )
}
