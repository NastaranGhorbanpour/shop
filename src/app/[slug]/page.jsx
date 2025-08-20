
import { Box, Button, Typography } from '@mui/material'
import React from 'react'

import AddingBtn from './addingBtn';
import Link from 'next/link';

import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import DoneIcon from '@mui/icons-material/Done';


async function getData(id , key) {
    const x = await fetch(`https://${key}.mockapi.io/furniture/` + id)
    const data = await x.json()

    return data
}

export default async function Main({ params }) {
    let myParams = await params
    const ApiKey = process.env.NEXT_PUBLIC_API_KEY_FIRST
    const data = await getData(parseInt(myParams.slug) , ApiKey)

    const product = {
        title: data.title,
        price: data.price,
        count: data.count,
        image: data.image,
        stock: data.stock,
        id: data.id
    }

    return (
        <>
            <Box sx={{ width: '100%', backgroundImage: "url('./image/product/topScBg.webp')", px: '10%', py: '5%' }}>
                <Typography sx={{ fontSize: 40, fontWeight: 700 }}>Product</Typography>
                <Typography sx={{ display: 'flex' }}>
                    <Link href={'../'}>Home</Link>
                    <KeyboardArrowRightIcon />
                    <Link href={'#'}>Product</Link>
                </Typography>
            </Box>

            <Typography sx={{ fontSize: 70, fontWeight: 700, px: '5%', pt: '20px' }}>{data.title}</Typography>

            <Box sx={{
                display: 'flex',
                flexWrap: 'wrap',
                p: '3%',
            }}>
                {/* product image */}
                <Box sx={{
                    width: { xs: '100%', md: '55%' },
                    border: '1px solid #E5E5E5',
                    mr: { xs: 0, md: '20px' }
                }}>
                    <img src={data.image} alt="" />
                </Box>
                {/* product image */}


                {/* product info */}
                <Box sx={{ width: { xs: '100%', md: '40%' }, p: '5px' }}>
                    <Typography sx={{ fontSize: 18, color: '#D9D9D9' }}>{data.category}</Typography>
                    <Typography sx={{ fontSize: 40, fontWeight: 500, borderBottom: '1px solid #E5E5E5', pb: 3, pt: 1 }}>{data.price}</Typography>
                    <Box sx={{ py: 3, borderBottom: '1px solid #E5E5E5' }} >
                        <Typography><DoneIcon sx={{ mr: 2, color: '#C4A47E' }} />{data.description[0]}</Typography>
                        <Typography><DoneIcon sx={{ mr: 2, color: '#C4A47E' }} />{data.description[1]}</Typography>
                        <Typography><DoneIcon sx={{ mr: 2, color: '#C4A47E' }} />{data.description[2]}</Typography>
                    </Box>


                    <AddingBtn product={product} />


                    <Button sx={{
                        border: '1px solid black',
                        display: 'flex',
                        width: '100%', p: 2,
                        color: 'black',
                        transition: '0.4s',
                        my: 3,
                        fontWeight: 700,
                        ':hover': {
                            boxShadow: '0 0 20px 5px rgba(0,0,0,0.5)'
                        }
                    }}>
                        ADD TO WISHLIST
                    </Button>

                    <Box sx={{
                        width: '100%',
                        display: 'flex',
                        borderTop: '1px solid #E5E5E5',
                        py: 3
                    }}>
                        <Typography sx={{ mr: 2 }}> AVAILABILITY:</Typography>
                        <Typography sx={{
                            color: data.stock === 0 ? 'red' : 'black'
                        }}>{data.stock} In Stock</Typography>
                    </Box>
                </Box>
                {/* product info */}
            </Box>
        </>
    )
}
