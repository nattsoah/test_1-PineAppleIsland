import { Box, Container, ImageList, ImageListItem, Typography } from '@mui/material'
import Image from 'next/image'
import type { CSSProperties } from 'react'
import image from '../assets/why-choose.png'
import { Height } from '@mui/icons-material'

function WhyChoose() {
    const imageStyle: CSSProperties = {
        height: '634px',
        position: 'relative',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
    }
    return (
        <>
            <Box sx={{
                height: '100vh',
                position: 'relative',
                margin: { sm: '30px', lg: '0px' }
            }}>
                <Box sx={{
                    position: 'absolute',
                    inset: 0,
                    backgroundColor: { xs: 'transparent', lg: '#0E204E' },
                    clipPath: ' polygon(0% 0%, 100% 0, 100% 80%, 70% 65%, 0 80%)',
                    zIndex: 0,
                }} />
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: { xs: 'column', lg: 'row' },
                        justifyContent: 'center',
                        gap: { xs: '20px', lg: '60px' },
                        alignItems: 'center',
                        position: 'relative',
                        zIndex: '1',
                        height: '100%'
                    }}
                >
                    {/* หัวข้อ */}
                    <Typography
                        width={317}
                        fontFamily={'Playfair Display'}
                        fontWeight={700}
                        sx={{
                            color: { xs: '#0E204E', lg: 'white' },
                            fontSize: { xs: '34px', lg: '60px' },
                            textAlign: { xs: 'center', lg: 'start' }
                        }}

                    >Why Choose <br /> Pineapple  Island
                    </Typography>

                    {/* กล่อง */}
                    <Box sx={{
                        display: 'flex',
                        gap: { xs: '20px', lg: '0px' },
                        flexDirection: { xs: 'column', lg: 'row' },
                        position: 'relative',
                        alignItems: 'center',
                        justifyContent: 'center',
                        boxShadow: { sm: '0px', lg: '4px 5px 25px rgba(0, 0, 0, 0.1)' }
                    }}>
                        {/* ข้อความ */}
                        <Box
                            width={433}
                            height={634}
                            sx={{
                                color: '#0E204E',
                                backgroundColor: { xs: 'transparent', lg: '#fff' },
                                padding: { xs: '0px', lg: '70px' },
                                display: 'flex',
                                // position: { xs: 'relative', lg: 'relative' },
                                alignItems: 'center',
                                height: { xs: '100%', lg: '634px' }
                            }}>
                            <Typography
                                fontFamily={'Manrope'}
                                fontWeight={400}
                                lineHeight={'160%'}
                                sx={{
                                    fontSize: { xs: '16px', lg: '20px' },
                                    textAlign: { xs: 'center', lg: 'start' }
                                }}
                            >
                                Pineapple Island is the most sought-after  community in Ibadan that values and puts the needs of their clients first.
                                It is a territory with loft complexes that creates a country life and homely feeling that is integrated with industrial development.
                                A perfect, professional built  abode that gives you the true taste of beauty and happiness.
                            </Typography>
                        </Box>

                        <Box sx={{ filter: { xs: 'brightness(0.6)', lg: 'brightness(1)' } }}>
                            <Image
                                style={imageStyle}
                                src={image}
                                width={728}
                                height={620}
                                alt='house'
                            />
                        </Box>

                    </Box>

                    {/* <Box sx={{ display: 'flex', boxShadow: '4px 5px 25px rgba(0, 0, 0, 0.1)' }}>
                        <Box
                            width={433}
                            height={634}
                            sx={{ backgroundColor: 'white', color: '#0E204E', padding: '70px', display: 'flex', alignItems: 'center' }}>
                            <Typography
                                fontFamily={'Manrope'}
                                fontWeight={400}
                                fontSize={20}
                                lineHeight={'160%'}
                            >
                                Pineapple Island is the most sought-after  community in Ibadan that values and puts the needs of their clients first.
                                It is a territory with loft complexes that creates a country life and homely feeling that is integrated with industrial development.
                                A perfect, professional built  abode that gives you the true taste of beauty and happiness.
                            </Typography>
                        </Box>
                        <Image
                            style={imageStyle}
                            src={image}
                            width={728}
                            height={634}
                            alt='house'
                        />
                    </Box> */}
                </Box>
            </Box>
        </>
    )
}

export default WhyChoose