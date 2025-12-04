import { Box, Button, Container, Grid, IconButton, ImageList, ImageListItem, ListItem, Stack, Typography } from '@mui/material'
import Image from 'next/image'
import type { CSSProperties } from 'react'
import image2 from '../assets/image2.jpg'
import image3 from '../assets/image3.jpg'
import { Height } from '@mui/icons-material'
import icon1 from '../assets/eco-friendly.svg'
import icon2 from '../assets/smart-home.svg'
import icon3 from '../assets/good-rates.svg'
import icon4 from '../assets/serviced-apartment.svg'
import icon5 from '../assets/private-security.svg'
import icon6 from '../assets/24:7-electricity.svg'
import icon7 from '../assets/eco-friendly-white.svg'
import icon8 from '../assets/smart-home-white.svg'
import icon9 from '../assets/good-rates-white.svg'
import icon10 from '../assets/serviced-apartment-white.svg'
import icon11 from '../assets/private-security-white.svg'
import icon12 from '../assets/24:7-white.svg'

function WhatPineApple() {
    const imageStyle1: CSSProperties = {
        maxWidth: '100%',
        maxHeight: '100%',
        width: '567px',
        height: '582px',
        aspectRatio: '3/2',
        objectFit: 'cover',
        position: 'relative',
        zIndex: 1
    }
    const imageStyle2: CSSProperties = {
        maxWidth: '100%',
        maxHeight: '100%',
        width: '568px',
        height: '582px',
        objectFit: 'cover',
        position: 'relative',
        zIndex: 1
    }

    const iconstyle: CSSProperties = {
        maxWidth: '80px',
        maxHeight: '80px',
        width: '100%',
        height: '100%'
    }

    const data1 = [
        { icon: icon1, text: 'Eco Friendly' },
        { icon: icon2, text: 'Smart Homes' },
        { icon: icon3, text: 'Good Rates' },
    ]
    const data2 = [
        { icon: icon4, text: 'Serviced Apartment' },
        { icon: icon5, text: 'Privacy Security' },
        { icon: icon6, text: '24-7 Electricity' },
    ]

    return (
        <>
            <Box sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '100px',
                // height: '100vh',
                // mt: '800px',
                margin: { xs: '30px', lg: '0px' },
                // mb: { xs: '10%', lg: '30%' },
                minHeight: '100vh',
                paddingTop: '5%'
            }}>
                {/* หัวข้อ */}
                <Typography
                    fontFamily={'Playfair Display'}
                    fontWeight={700}
                    sx={{
                        color: '#0E204E',
                        fontSize: { xs: '24px', lg: '60px' },
                    }}
                >What Pineapple Land Offers</Typography>

                {/* desktop */}
                <Grid
                    container
                    width={'100%'}
                    height={'100%'}
                    sx={{
                        padding: '30px',
                        display: { xs: 'none', lg: 'block' }
                    }}
                >
                    <Grid sx={{ backgroundColor: '', display: 'flex', justifyContent: 'center', alignItems: 'center' }} size={12}>
                        {/* รูปภาพ */}
                        <Grid bgcolor={''} width={'50%'} size={6}>
                            <Box sx={{ backgroundColor: '', display: 'flex', alignItems: 'center', justifyContent: 'flex-start', position: 'relative', height: '100%' }}>
                                <Image
                                    style={imageStyle1}
                                    src={image2}
                                    alt='box1'
                                />
                                <Box
                                    width={412}
                                    height={358}
                                    sx={{
                                        // position: 'absolute',
                                        // transform: 'translate(100%, 0%)',
                                        backgroundColor: '#0E204E'
                                    }}
                                >
                                </Box>
                            </Box>
                        </Grid>

                        {/* option */}
                        <Grid bgcolor={''} width={'50%'} size={6} alignItems={'center'}>
                            <Box sx={{ backgroundColor: '', display: 'flex', justifyContent: 'flex-end', gap: { lg: '80px', xl: '100px' } }}>
                                {data1.map((text, index) => (
                                    <Box key={index} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '50px' }} >
                                        <Image
                                            style={iconstyle}
                                            src={text.icon}
                                            alt='icon'
                                        // width={80}
                                        // height={80}
                                        />

                                        <Typography
                                            fontFamily={'Poppins'}
                                            fontWeight={400}
                                            sx={{
                                                fontSize: { lg: '16px', xl: '18px' },
                                                color: '#263238'
                                            }}
                                        >
                                            {text.text}
                                        </Typography>

                                    </Box>
                                ))}
                            </Box>
                        </Grid>
                    </Grid>
                    <Grid sx={{ backgroundColor: '', display: 'flex', justifyContent: 'center', alignItems: 'center' }} size={12}>
                        {/* option */}
                        <Grid bgcolor={''} width={'50%'} size={6} alignItems={'center'}>
                            <Box sx={{ backgroundColor: '', display: 'flex', justifyContent: 'flex-start', gap: { lg: '80px', xl: '100px' } }}>
                                {data2.map((text, index) => (
                                    <Box key={index} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '50px' }} >
                                        <Image
                                            style={iconstyle}
                                            src={text.icon}
                                            alt='icon'
                                        // width={80}
                                        // height={80}

                                        />

                                        <Typography
                                            fontFamily={'Poppins'}
                                            fontWeight={400}
                                            sx={{
                                                fontSize: { lg: '16px', xl: '18px' },
                                                color: '#263238'
                                            }}
                                        >
                                            {text.text}
                                        </Typography>

                                    </Box>
                                ))}
                            </Box>
                        </Grid>

                        {/* รูปภาพ */}
                        <Grid bgcolor={''} width={'50%'} size={6}>
                            <Box sx={{ backgroundColor: '', display: 'flex', alignItems: 'center', justifyContent: 'flex-end', position: 'relative', height: '100%' }}>
                                <Box
                                    width={412}
                                    height={358}
                                    sx={{
                                        // position: 'absolute',
                                        // transform: 'translate(-100%, 0%)',
                                        backgroundColor: '#0E204E'
                                    }}
                                >
                                </Box>
                                <Image
                                    style={imageStyle1}
                                    src={image3}
                                    alt='box2'
                                />
                            </Box>
                        </Grid>
                    </Grid>
                </Grid>

                {/* responsive */}
                <WhatPineAppleResponsive />
            </Box >
        </>
    )
}

export default WhatPineApple

const WhatPineAppleResponsive = (): React.ReactElement => {
    const imageStyle: CSSProperties = {
        minWidth: '335px',
        minHeight: '387px',
        position: 'relative',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
    }


    const data = [
        { icon: icon7, text: 'Eco Friendly' },
        { icon: icon8, text: 'Smart Homes' },
        { icon: icon9, text: 'Good Rates' },
        { icon: icon10, text: 'Serviced Apartment' },
        { icon: icon11, text: 'Privacy Security' },
        { icon: icon12, text: '24-7 Electricity' },
    ]

    return <>
        <Grid
            container
            width={'100%'}
            height={'100%'}
            sx={{
                backgroundColor: '',
                display: { xs: 'block', lg: 'none' }
            }}
        >
            <Grid sx={{ backgroundColor: '', display: 'flex', }} size={12}>
                {/* รูปภาพ */}
                <Box
                    sx={{
                        backgroundColor: '',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        position: 'relative',
                        height: '100%'
                    }}>
                    <Image
                        style={imageStyle}
                        src={image2}
                        alt='box1'
                    />
                    <Box
                        maxWidth={460}
                        minHeight={247}
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            position: 'absolute',
                            transform: 'translate(0%, 80%)',
                            backgroundColor: '#0E204E',
                            width: '90%',
                        }}
                    >
                        <Grid container spacing={4} columns={12}>
                            {data.map((text, index) => (
                                <Grid key={index} size={4}>
                                    <Box
                                        sx={{
                                            display: 'flex',
                                            flexDirection: 'column',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            gap: '20px',
                                            textAlign: 'center'
                                        }} >
                                        <Image
                                            src={text.icon}
                                            alt='icon'
                                            width={32}
                                            height={32}
                                        />

                                        <Typography
                                            fontFamily={'Poppins'}
                                            fontWeight={400}
                                            fontSize={12}
                                            sx={{ color: 'white' }}
                                        >
                                            {text.text}
                                        </Typography>

                                    </Box>
                                </Grid>
                            ))}
                        </Grid>
                    </Box>
                </Box>

            </Grid>
        </Grid>
    </>
}