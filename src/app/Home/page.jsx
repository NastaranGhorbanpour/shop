import { Box } from '@mui/material'
import Groups from '../components/home/groups'
import Info from '../components/home/info'

import SendIcon from '@mui/icons-material/Send';
import ReplayOutlinedIcon from '@mui/icons-material/ReplayOutlined';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import SupportOutlinedIcon from '@mui/icons-material/SupportOutlined';

async function getData(key) {
    const x = await fetch(`https://${key}.mockapi.io/furniture/`)
    const data = await x.json()
    return data
}

export default async function Home() {
    const ApiKey = process.env.NEXT_PUBLIC_API_KEY_FIRST
    const data = await getData(ApiKey)


    function filter(type) {
        let select = []
        data.map((val) => {
            val.category === type && select.push(val)
        })
        return select
    }

    const bestSell = filter('Best Selling')
    const desk = filter('Desk')
    const trending = filter('Trending')


    return (
        <Box sx={{
            width: '100%',
            padding: '5%'
        }}>

            {/* best selling */}

            <Groups image={'./image/home/bestSelling.webp'} title={'BEST SELLING'} data={bestSell} />
            {/* best selling */}

            <Box sx={{
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: { md: 'space-between' },
                my: 5,
                '*': { xs: { margin: 5 }, md: { m: 0 } }
            }}>
                <Box sx={{
                    width: { xs: '100%', md: '45%' },
                }}>
                    <img src={'./image/home/LifeStyle.webp'} alt="" />
                </Box>
                <Box sx={{
                    width: { xs: '100%', md: '45%' },
                }}>
                    <img src={'./image/home/LifeStyle2.webp'} alt="" />
                </Box>
            </Box>

            <Groups image={'./image/home/hotDeal.webp'} title={'Desk'} data={desk} />

            <Box sx={{
                p: 3,
                m: 5,
                display: 'flex',
                justifyContent: 'space-between',
                flexWrap: 'wrap',
            }}>
                <Info icon={<SendIcon fontSize='large' sx={{ color: '#FCD238' }} />} cont1={'Free Shipping'} cont2={'On all orders over $75.00'} />
                <Info icon={<ReplayOutlinedIcon fontSize='large' sx={{ color: '#FCD238' }} />} cont1={'Easy 30 Days Returns'} cont2={'30 days money back'} />
                <Info icon={<CreditCardIcon fontSize='large' sx={{ color: '#FCD238' }} />} cont1={'100% Secure'} cont2={'PayPal / MasterCard / Visa'} />
                <Info icon={<SupportOutlinedIcon fontSize='large' sx={{ color: '#FCD238' }} />} cont1={'24/7 Support'} cont2={'We will be at your service'} />
            </Box>

            <Groups image={'./image/home/trending.webp'} title={'TRENDING'} data={trending} />

        </Box>

    )
}
