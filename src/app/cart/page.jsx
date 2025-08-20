"use client"
import { Box, Button, IconButton, Table, TableBody, TableCell, TableHead, TableRow, TextField, Typography } from '@mui/material'
import React from 'react'
import useStore from '../store/store'
import Link from 'next/link';


import CloseIcon from '@mui/icons-material/Close';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';


export default function page() {
    const { cart, Plus, Minus, remove, calculate, empty } = useStore()
    let subtotal = calculate()
    return (
        <Box sx={{ p: 5, mb: 5 }}>
            <Typography sx={{ fontSize: 50, mb: 1 }}>SHOPPING CART</Typography>
            <Typography sx={{ mb: 5 }}><Link href={'../../'}>Home</Link> - <Link href={'#'}>cart</Link></Typography>

            <Box sx={{ display: 'flex', flexWrap: { xs: 'wrap', md: 'nowrap' } }}>

                {/* cart */}
                <Box sx={{
                    width: { xs: '100%', md: '70%' },
                    mr: { xs: '0', md: '20px' },

                }}>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell><Typography variant="subtitle2">Product</Typography></TableCell>
                                <TableCell><Typography variant="subtitle2">Price</Typography></TableCell>
                                <TableCell><Typography variant="subtitle2">Quantity</Typography></TableCell>
                                <TableCell><Typography variant="subtitle2">Subtotal</Typography></TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {cart && cart.map((val) => {
                                let total = parseFloat(val.price.replace('$', '')) * val.count
                                return (
                                    <TableRow key={val.id}>
                                        <TableCell>
                                            <Box display="flex" alignItems="center" gap={2}>
                                                <IconButton onClick={() => remove(val.id)} size="small" >
                                                    <CloseIcon />
                                                </IconButton>
                                                <img
                                                    src={val.image}
                                                    alt="product"
                                                    style={{ width: 120, border: "1px solid #D9D9D9 " }}
                                                />
                                                <Typography variant="body1">{val.title}</Typography>
                                            </Box>
                                        </TableCell>
                                        <TableCell>{val.price}</TableCell>
                                        <TableCell>
                                            <Box sx={{ display: 'flex', border: '1px solid #D9D9D9' }}>
                                                <Typography sx={{ p: 2, display: 'flex', alignItems: 'center' }}>{val.count}</Typography>
                                                <Box >
                                                    <IconButton onClick={() => Plus(val.id)} sx={{ display: 'block', p: 0 }}>
                                                        <KeyboardArrowUpIcon fontSize='small' />
                                                    </IconButton>
                                                    <IconButton onClick={() => Minus(val.id)} sx={{ display: 'block', p: 0 }}>
                                                        <KeyboardArrowDownIcon fontSize='small' />
                                                    </IconButton>
                                                </Box>
                                            </Box>
                                        </TableCell>
                                        <TableCell>${total}</TableCell>
                                    </TableRow>
                                )

                            })

                            }

                        </TableBody>
                    </Table>

                    <Box sx={{ display: 'flex', justifyContent: 'space-between', my: 3 }}>
                        <Box sx={{ display: 'flex' }}>
                            <TextField id="outlined-basic" label="COUPON CODE" variant="outlined" />
                            <Button variant="contained" sx={{
                                backgroundColor: 'black',
                                color: 'white',
                                width: '50%',
                                py: 1,
                                ml: 2,
                                transition: '0.4s',
                                ':hover': { backgroundColor: 'white', border: '1px solid black', color: 'black' }
                            }}>
                                APPLY COUPON
                            </Button>
                        </Box>

                        <Box>
                            <Button variant="contained" sx={{
                                backgroundColor: 'black',
                                color: 'white',
                                px:3,
                                py:2, 
                                
                                transition: '0.4s',
                                ':hover': { backgroundColor: 'white', border: '1px solid black', color: 'black' }
                            }}
                            onClick={()=> empty()}>
                                EMPTY CART
                            </Button>
                        </Box>
                    </Box>
                </Box>
                {/* cart */}



                {/* SUBTOTAL */}
                <Box sx={{ width: { xs: '100%', md: '25%' }, p: 2, backgroundColor: '#F5F5F5', height: '150px' }}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', py: 2, borderBottom: '1px solid #D9D9D9' }}>
                        <Typography sx={{ color: '#848484' }}>SUBTOTAL</Typography>
                        <Typography>{subtotal}</Typography>
                    </Box>

                    <Button variant="contained" sx={{
                        backgroundColor: 'black',
                        color: 'white',
                        width: '100%',
                        py: 1,
                        transition: '0.4s',
                        ':hover': { backgroundColor: 'white', border: '1px solid black', color: 'black' }
                    }}>
                        PROCEED TO CHECKOUT
                    </Button>
                </Box>
                {/* SUBTOTAL */}


            </Box>
        </Box>
    )
}
