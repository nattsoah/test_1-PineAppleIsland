import { Box, Container, ImageList, ImageListItem, Typography } from '@mui/material'
import Image from 'next/image'
import type { CSSProperties } from 'react'
import g1 from '../assets/g-1.jpg'
import g2 from '../assets/g-2.jpg'
import g3 from '../assets/g-3.jpg'
import g4 from '../assets/g-4.jpg'
import g5 from '../assets/g-5.jpg'
import g6 from '../assets/g-6.jpg'
import g7 from '../assets/g-7.jpg'
import g8 from '../assets/g-8.jpg'
import g9 from '../assets/g-9.jpg'
import g10 from '../assets/g10.jpg'
import g11 from '../assets/g11.jpg'
import g12 from '../assets/image2.jpg'
import g13 from '../assets/g13.jpg'
import g14 from '../assets/image3.jpg'

function Galleries() {
    const imageStyle: CSSProperties = {
        maxWidth: '553px',
        maxHeight: '469px',
        width: '100%',
        height: '100%',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        objectFit: 'cover'
    }

    const image = [g1, g2, g3, g4, g5, g6, g7, g8, g9]

    return (
        <Box
            id="project"
            minHeight={'auto'}
            margin={{ sm: '30px', lg: '0px' }}
            paddingTop={'100px'}
        >
            <Box
                sx={{
                    display: { xs: 'none', lg: 'flex' },
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                <Typography
                    fontFamily={'Playfair Display'}
                    fontWeight={700}
                    fontSize={60}
                    color='#0E204E'
                >
                    Galleries
                </Typography>
                <Typography
                    fontFamily={'Manrope'}
                    fontWeight={400}
                    fontSize={20}
                    lineHeight={'180%'}
                    textAlign={'center'}
                    color='#263238'
                    maxWidth={'726px'}
                >
                    a community that gives you a taste of happiness, a place you’ll love to live and an opportunity to build a home.
                </Typography>

                <Container
                    maxWidth='xl'
                    sx={{ backgroundColor: '', width: '100%', height: '100%', mt: '50px' }}>
                    <ImageList sx={{ width: '100%', height: '100%' }} cols={3} rowHeight={450} gap={30}>
                        {image.map((item, index) => (
                            <ImageListItem key={index}>
                                <Image
                                    style={imageStyle}
                                    src={item}
                                    alt='image'
                                />
                            </ImageListItem>
                        ))}
                    </ImageList>
                </Container>
            </Box>

            <GalleriesResponsive />
        </Box>
    )
}

export default Galleries

const GalleriesResponsive = (): React.ReactElement => {
    const imageStyle: CSSProperties = {
        maxWidth: '553px',
        maxHeight: '700px',
        width: '100%',
        height: '100%',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        objectFit: 'cover'
    }
    const image = [
        { img: g10, cols: 2 },
        { img: g2, cols: 2 },
        { img: g3, cols: 2 },
        { img: g11, cols: 2 },
        { img: g6, cols: 2 },
        { img: g12, rows: 2, cols: 2 },
        { img: g5, cols: 2 },
        { img: g13, rows: 2, cols: 2 },
        { img: g7, cols: 2 },
        { img: g8, cols: 2 },
        { img: g1, cols: 2 },
        { img: g4, cols: 2 },
        { img: g14, cols: 4 },
    ]
    return <>
        <Box
            sx={{
                display: { xs: 'flex', lg: 'none' },
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center'
            }}>
            <Typography
                fontFamily={'Playfair Display'}
                fontWeight={700}
                fontSize={34}
                color='#0E204E'
            >
                Available Homes
            </Typography>
            <Typography
                fontFamily={'Lato'}
                fontWeight={300}
                fontSize={16}
                lineHeight={'180%'}
                textAlign={'center'}
                color='#263238'
                maxWidth={'726px'}
            >
                a community that gives you a taste of happiness, a place you’ll love to live and an opportunity to build a home.
            </Typography>

            <Container maxWidth='xl' sx={{width: '100%', height: '100%', mt: '50px' }}>
                <ImageList
                    sx={{ width: '100%', height: '100%' }}
                    variant='quilted'
                    cols={4}
                    rowHeight={250}
                    gap={15}>
                    {image.map((item, index) => (
                        <ImageListItem
                            key={index}
                            cols={item.cols || 1}
                            rows={item.rows || 1}
                        >
                            <Image
                                style={imageStyle}
                                src={item.img}
                                alt='image'
                            />
                        </ImageListItem>
                    ))}
                </ImageList>
            </Container>
        </Box>
    </>
}