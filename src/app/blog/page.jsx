import { Box, TextField, Typography } from '@mui/material'
import React from 'react'

import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

import Link from 'next/link';
import Blogs from '../components/blog/Blogs';
import Posts from '../components/blog/posts';


export default function page() {
    return (
        <Box>
            <Box sx={{ backgroundImage: "url('./image/product/topScBg.webp')", p: 5, mb: 5 }}>
                <Typography sx={{ fontSize: 50, fontWeight: 700 }}>Blog</Typography>
                <Typography sx={{ display: 'flex' }}><Link href={'../'}>Home</Link> <KeyboardArrowRightIcon /> <Link href={'#'}>Blog</Link></Typography>

            </Box>



            <Box sx={{
                display: 'flex',
                justifyContent:'space-between',
                p: 5
            }}>
                <Box sx={{
                    width: '20%',
                    display: { xs: 'none', md: 'block' },
                }}>

                    <Box sx={{py:2}}>
                        <Typography sx={{py:2 , borderBottom:'3px solid #FCD238', color:'black' , fontSize:20 , fontWeight:700}}>Search</Typography>
                        <TextField sx={{width :'100%' , mt:2}} id="outlined-basic" label="Search Here" variant="outlined" />
                    </Box>
                    <Box sx={{py:1}}>
                        <Typography sx={{py:2 , borderBottom:'3px solid #FCD238', color:'black' , fontSize:20 , fontWeight:700}}>Archives</Typography>
                        <Typography sx={{fontSize:16 , mt:2}}>April 2023</Typography>
                    </Box>
                    <Box sx={{py:1}}>
                        <Typography sx={{py:2 , borderBottom:'3px solid #FCD238', color:'black' , fontSize:20 , fontWeight:700}}>Recent Posts</Typography>
                        <Posts image={'/image/blog/post-1.webp'} title={'Quisque Egestas'} date={'June 25,2023'}/>
                        <Posts image={'/image/blog/post-2.webp'} title={'Post With Gallery'} date={'June 24,2023'}/>
                        <Posts image={'/image/blog/post-3.webp'} title={'Maecenas Ultricies'} date={'June 24,2023'}/>
                        <Posts image={'/image/blog/post-4.webp'} title={'Tortor Posuere'} date={'June 24,2023'}/>
                        <Posts image={'/image/blog/post-5.webp'} title={'Hello World!'} date={'June 24,2023'}/>
                    </Box>
                </Box>

                <Box sx={{
                    width: { xs: '100%', md: '75%' },
                    display: 'flex',
                    justifyContent:'space-evenly',
                    flexWrap: 'wrap'
                }}>
                    <Blogs title={'Blog Image Post'} image={'./image/blog/blog-1.jpg'}/>
                    <Blogs title={'Quisque egestas'} image={'./image/blog/blog-2.jpg'}/>
                    <Blogs title={'Post With Gallery'} image={'./image/blog/blog-3.jpg'}/>
                    <Blogs title={'Tortor Posuere'} image={'./image/blog/blog-4.jpg'}/>

                </Box>
            </Box>

        </Box>

    )
}
