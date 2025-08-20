import { Box, Button, InputBase, List, ListItem, Paper, Typography } from '@mui/material'
import React from 'react'

import CottageOutlinedIcon from '@mui/icons-material/CottageOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import PhoneIcon from '@mui/icons-material/Phone';
import DateRangeIcon from '@mui/icons-material/DateRange';

export default function Footer() {
    return (
        <>
            <Box
                sx={{
                    width: '100%',
                    padding: '20px',
                    backgroundColor: '#DC465A',
                    display: 'flex',
                    justifyContent: 'space-evenly'
                }}>
                <Box>
                    <Typography sx={{ color: 'white', fontWeight: 700, fontSize: 25 }}>SIGN UP FOR NEWSLETTERS</Typography>
                    <Typography sx={{ color: 'white', fontWeight: 500, fontSize: 15 }}>Be The First To Know. Sign Up For Newsletter Today</Typography>
                </Box>
                <Box>
                    <Paper
                        component="form"
                        sx={{
                            p: '13px 0px 15px 20px',
                            display: { xs: 'none', md: 'inline' },
                            borderRadius: '50px',

                        }}
                    >
                        <InputBase
                            sx={{
                                color: 'gray',
                                width: '300px',
                                height: '50px'
                            }}
                            placeholder="Enter email address"

                        />
                        <Button sx={{
                            borderRadius: '50px',
                            height: '100%',
                            color: 'white',
                            backgroundColor: '#333333',
                            width: '100px',
                            height: '50px'
                        }}>
                            SUBSCRIBE
                        </Button>
                    </Paper>
                </Box>
            </Box>

            <Box sx={{ padding: '20px' }}>
                <List>
                    <ListItem>
                        <Typography sx={{fontSize:25}}>Contact Us</Typography>
                    </ListItem>
                    <ListItem>
                        <CottageOutlinedIcon sx={{ marginRight: '10px' }} />
                        <Typography>169-C, Technohub, Dubai Silicon Oasis.</Typography>
                    </ListItem>
                    <ListItem>
                        <EmailOutlinedIcon sx={{ marginRight: '10px' }} />
                        <Typography>Email: info@yourdomain.com</Typography>
                    </ListItem>
                    <ListItem>
                        <PhoneIcon sx={{ marginRight: '10px' }} />
                        <Typography>Phone: (+123) 123 321 345</Typography>
                    </ListItem>
                    <ListItem>
                        <DateRangeIcon sx={{ marginRight: '10px' }} />
                        <Typography>Mon-Sat 9:00pm – 5:00pm. Sun: Weekend</Typography>
                    </ListItem>
                </List>
            </Box>

            <Box sx={{
                px:'5%',
                py:'3%',
                backgroundColor:'#F4F4F4',
                display:'flex',
                justifyContent:'space-between'
            }}>
                 <Typography sx={{fontSize:16}}>
                    Copyright © 2025 <Typography sx={{fontSize:16 , color:'#E3C03B'}} component='a'>Torress</Typography>. All rights reserved.
                 </Typography>
                 <Typography sx={{fontSize:16}}>
                    CODED BY: <Typography sx={{fontWeight:'700'}} component='a' href='https://github.com/NastaranGhorbanpour'>Nastaran Ghorbanpour</Typography>
                 </Typography>
            </Box>

        </>
    )
}
