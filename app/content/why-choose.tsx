import { Box, Container, ImageList, ImageListItem, Typography } from '@mui/material'
import Image from 'next/image'
import type { CSSProperties } from 'react'
import image from '../assets/why-choose.png'
import { Height } from '@mui/icons-material'

function WhyChoose() {
    const imageStyle: CSSProperties = {
        // height: '634px',
        aspectRatio: "auto",
        objectFit: "cover",
        position: 'relative',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
    }
    return (
        <Box sx={{ minHeight: 'auto' }} >
            <Box
                sx={{
                    maxHeight: '100%',
                    position: 'relative',
                    padding: "30px",
                    pt: { xs: '0px', lg: '100px' },
                }}>
                <Box
                    sx={{
                        position: 'absolute',
                        inset: 0,
                        backgroundColor: { xs: 'transparent', lg: '#0E204E' },
                        clipPath: ' polygon(0% 0%, 100% 0, 100% 100%, 70% 80%, 0 100%)',
                        zIndex: 0,
                        width: '100%',
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
                        height: '100%',
                    }}
                >
                    {/* หัวข้อ */}
                    <Typography
                        width={317}
                        fontFamily={'Playfair Display'}
                        fontWeight={700}
                        sx={{
                            color: { xs: '#0E204E', lg: 'white' },
                            fontSize: { xs: '24px', lg: '60px' },
                            textAlign: { xs: 'center', lg: 'start' },
                            margin: { xs: '0px', lg: '30px' }
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
                        // boxShadow: { sm: '0px', lg: '4px 5px 25px rgba(0, 0, 0, 0.1)' }
                    }}>
                        {/* ข้อความ */}
                        <Box
                            maxWidth={433}
                            height={634}
                            color={'0E204E'}
                            bgcolor={{ xs: 'transparent', lg: '#fff' }}
                            padding={{ xs: '0px', lg: '70px' }}
                            boxShadow={{ sm: '0px', lg: '4px 5px 25px rgba(0, 0, 0, 0.1)' }}
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                                height: { xs: '100%', lg: '634px' }
                            }}>
                            <Typography
                                fontFamily={'Manrope'}
                                fontWeight={400}
                                lineHeight={'160%'}
                                fontSize={{ xs: '16px', lg: '20px' }}
                                textAlign={{ xs: 'center', lg: 'start' }}
                                color="#0E204E"
                            >
                                Pineapple Island is the most sought-after  community in Ibadan that values and puts the needs of their clients first.
                                It is a territory with loft complexes that creates a country life and homely feeling that is integrated with industrial development.
                                A perfect, professional built  abode that gives you the true taste of beauty and happiness.
                            </Typography>
                        </Box>

                        <Box
                            boxShadow={{ sm: '0px', lg: '4px 5px 25px rgba(0, 0, 0, 0.1)' }}
                            sx={{ filter: { xs: 'brightness(0.6)', lg: 'brightness(1)' } }}>
                            <Image
                                style={imageStyle}
                                src={image}
                                // width={728}
                                // height={620}
                                alt='house'
                            />
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box >
    )
}

export default WhyChoose