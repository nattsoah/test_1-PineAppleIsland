import { Box, Button, Checkbox, Container, Grid, ImageList, ImageListItem, Paper, Table, TableBody, TableCell, TableContainer, TableRow, Typography } from '@mui/material'
import Image from 'next/image'
import type { CSSProperties } from 'react'
import image5 from '../assets/image5.png'
import { DataGrid } from '@mui/x-data-grid';
import { CheckBox } from '@mui/icons-material';


function BecomeAgent() {
    const imageStyle: CSSProperties = {
        width: '552px',
        height: '725px',
        objectFit: 'cover',
        position: 'relative',
        zIndex: 1
    }

    const data = [
        'Lorem ipsum dolor sit amet, consectetur',
        'Lorem ipsum dolor sit amet, consectetur',
        'Lorem ipsum dolor sit amet, consectetur',
        'Lorem ipsum dolor sit amet, consectetur',
        'Lorem ipsum dolor sit amet, consectetur',
        'Lorem ipsum dolor sit amet, consectetur',
        'Lorem ipsum dolor sit amet, consectetur',
        'Lorem ipsum dolor sit amet, consectetur',
        'Lorem ipsum dolor sit amet, consectetur',
        'Lorem ipsum dolor sit amet, consectetur',
    ]

    return (
        <>
            <Box
                bgcolor={{ xs: '#0E204E', lg: 'transparent' }}
                minHeight={'auto'}
                marginTop={'100px'}
                paddingY={'50px'}
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                }}>
                <Box
                    color={{ xs: 'white', lg: '#0E204E' }}
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        gap: '30px',
                        alignItems: { xs: 'center', lg: 'start' },
                        flexWrap: 'nowrap'
                    }}>
                    <Typography
                        fontFamily={'Playfair Display'}
                        fontWeight={700}
                        fontSize={{ xs: '24px', lg: '60px' }}
                        sx={{
                            color: { xs: 'white', lg: '#0E204E' },
                        }}
                    >Become an Agent
                    </Typography>
                    <Typography
                        fontFamily={'Manrope'}
                        fontWeight={400}
                        fontSize={20}
                        lineHeight={'150%'}
                        textAlign={{ xs: 'center', lg: 'start' }}
                        sx={{
                            color: { xs: 'white', lg: '#0E204E' },
                            width: '417px',
                        }}
                    >
                        a community that gives you a taste of
                        happiness, a place you’ll
                        love to live and an opportunity to build a home.
                    </Typography>
                    <Button
                        sx={{
                            borderRadius: { xs: '5px', lg: '0px' },
                            backgroundColor: { xs: 'white', lg: '#0E204E' },
                            color: { xs: '#0E204E', lg: 'white' },
                            width: { xs: '103px', lg: '293px' },
                            height: { xs: '40px', lg: '62px' }
                        }}
                    >
                        <Typography
                            fontFamily={'Gotham'}
                            fontWeight={300}
                            fontSize={16}
                        >
                            Join Now
                        </Typography>
                    </Button>
                </Box>

                {/* desktop image */}
                <Box>
                    <Box
                        sx={{
                            display: { xs: 'none', lg: 'flex' }, alignItems: 'center', position: 'relative', height: '100%'
                        }}>
                        <Box
                            width={412}
                            height={358}
                            bgcolor={'#0E204E'}
                            sx={{
                                position: 'relative',
                                transform: 'translate(60%, 0%)',
                            }}
                        >
                        </Box>
                        <Image
                            style={imageStyle}
                            src={image5}
                            alt='box1'
                        />
                    </Box>
                </Box>
            </Box >
        </>
    )
}

export default BecomeAgent