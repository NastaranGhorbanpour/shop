import { Box, Typography } from '@mui/material'
import Link from 'next/link'

import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import Categoryes from '../components/shop/categoryes';

async function getData(category, key) {
    const res = await fetch(`https://${key}.mockapi.io/furniture`)
    const data = await res.json()
    if (category && category !== "ALL") {
        return data.filter(item => item.category.toUpperCase() === category.toUpperCase())
    }
    return data
}

export default async function Page({ searchParams }) {
    const category = searchParams.category || "ALL"
    const ApiKey = process.env.NEXT_PUBLIC_API_KEY_FIRST
    const products = await getData(category, ApiKey)

    return (
        <Box>
            <Box sx={{ width: '100%', backgroundImage: "url('./image/product/topScBg.webp')", p: 5, mb: 5 }}>
                <Typography sx={{ fontSize: 50, fontWeight: '700' }}>Shop</Typography>
                <Typography sx={{ display: 'flex' }}>
                    <Link href={'../'}>Home</Link>
                    <KeyboardArrowRightIcon />
                    <Link href={'#'}>Shop</Link>
                </Typography>
            </Box>

            <Box sx={{ p: 5, display: { xs: 'block', md: 'flex' }, position: 'relative' }}>
                <Box sx={{
                    width: { xs: '0', md: '25%' },
                    display: { xs: 'none', md: 'block' },
                    position: 'sticky',
                    top: 90,
                    alignSelf: 'flex-start'
                }}>
                    <Typography sx={{ fontWeight: 700, fontSize: 20, mb: 3 }}>
                        Filter by category:
                    </Typography>
                    <Categoryes current={category} />
                </Box>

                <Box sx={{ width: { xs: '100%', md: '70%' }, ml: { xs: '0', md: '20px' } }}>
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', }}>
                        {products.map((val) => {
                            let url = val.id + '-' + val.title
                            return (
                                <Box key={val.id} sx={{ boxShadow: '0 0 20px 2px rgba(0,0,0,0.5)', p: 2, border: '1px solid #EBEBEB', width: '30%', m: 1, ':hover': { border: '1px solid #FCD238' } }}>
                                    <Link href={url}>
                                        <img src={val.image} alt="" />
                                        <Typography sx={{ fontSize: 25, fontWeight: 500, textAlign: 'center' }}>{val.title}</Typography>
                                        <Typography sx={{ fontSize: 20, fontWeight: 700, color: 'red', textAlign: 'center' }}>{val.price}</Typography>
                                    </Link>
                                </Box>
                            )
                        })}
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}
