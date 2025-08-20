'use client'
import { Box, IconButton, Typography } from '@mui/material'
import React, { useState } from 'react'
import Link from 'next/link';

import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

export default function Groups({ image, title, data }) {
    const [move, setMove] = useState(false)

    return (
        <Box sx={{
            width: '100%',
            padding: '5%',
            display: 'flex',
            flexWrap: 'wrap',

        }}>
            {/* image */}
            <Box sx={{
                width: '25%',
                display: { xs: 'none', md: 'inline' },
                mr: 2
            }}>
                <img src={image} alt="" />

            </Box>

            {/* products */}
            <Box sx={{
                width: { xs: '100%', md: '70%' },
                position: 'relative',
                overflow: 'hidden'
            }}>
                <Typography sx={{ fontSize: 25, fontWeight: 700, mb: 3 }}>{title}</Typography>
                <Box sx={{
                    position: 'absolute', display: 'flex', top: 0, right: 0,

                }}>
                    <IconButton onClick={() => setMove(false)} sx={{ border: '1px solid black', mr: 2 }}>
                        <ChevronLeftIcon />
                    </IconButton>
                    <IconButton onClick={() => setMove(true)} sx={{ border: '1px solid black' }}>
                        <ChevronRightIcon />
                    </IconButton>
                </Box>
                <Box sx={{
                    width: '150%',
                    display: 'flex',
                    transform: move ? 'translateX(-34%)' : 'translateX(0)',
                    transition: '0.4s'
                }}>
                    {data && data.map((val) => {
                        let Url = val.id + '-' + val.title
                        return (

                            <Box key={val.id} sx={{
                                width: '50%',
                                p: 3,
                                border: '1px solid #EBEBEB',
                                ':hover': { border: '1px solid orange' },
                                transition: '0.4s',
                                cursor: 'pointer'
                            }}>
                                <Link href={Url}>
                                    <img src={val.image} alt="" />
                                    <Typography sx={{ fontSize: 20, mb: 2 }}>{val.title}</Typography>
                                    <Typography sx={{ fontSize: 30, fontWeight: 700, color: 'red' }}>{val.price}</Typography>
                                </Link>
                            </Box>

                        )
                    })}

                </Box>

            </Box>


        </Box >
    )
}
