'use client'
import { Box, IconButton, InputBase, List, Paper, TextField } from '@mui/material'
import React, { useState } from 'react'
import Link from 'next/link';


import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketOutlinedIcon from '@mui/icons-material/ShoppingBasketOutlined';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';


import NavBarFullSC from './NavBarFullSC';
import useStore from '@/app/store/store';

export default function Headre() {
    const [menu, setmenu] = useState(false)
    const cart = useStore((state) => state.cart)
    const itemsCount = cart.length
    
    return (
        <>
            <Box component='section' sx={{
                width: '100%',
                padding: '50px 10%',
                display: 'flex',
                justifyContent: 'space-between',
                backgroundColor: '#242F3D',
                position: 'relative'
            }}>
                {/* logo */}
                <Box>
                    <Link href='./Home'>
                    <img src="./image/layout/logo.webp" alt="" />
                    </Link>
                </Box>

                {/* search */}
                <Box>
                    <Paper
                        component="form"
                        sx={{
                            p: '15px 15px 15px 20px',
                            display: { xs: 'none', md: 'inline' },

                            borderRadius: '50px',
                            backgroundColor: '#2D3B4D'
                        }}
                    >
                        <InputBase
                            sx={{
                                color: '#C2C7C7'
                            }}
                            placeholder="Search here"

                        />
                        <IconButton>
                            <SearchIcon sx={{ color: '#C2C7C7' }} />
                        </IconButton>
                    </Paper>

                </Box>

                {/* icon: basket - menu */}
                <Box sx={{
                    display: 'flex',
                }}>
                    <IconButton>
                        <MenuOutlinedIcon onClick={() => setmenu(!menu)} sx={{
                            display: { xs: 'inline', md: 'none' },
                            color: 'white',
                            fontSize: '30px'
                        }} />
                    </IconButton>
                    <Link href='cart'>

                        <IconButton sx={{position:'absolute'}}>
                            <ShoppingBasketOutlinedIcon sx={{
                                color: 'white',
                                fontSize: '30px'
                            }} />
                            <span className='absolute -top-2 -right-2 rounded-full text-3xl text-red-700 font-bold'>{itemsCount}</span>
                        </IconButton>
                    </Link>
                </Box>
            </Box>
            <NavBarFullSC menu={menu} />
        </>
    )
}
