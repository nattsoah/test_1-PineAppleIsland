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
            <Box sx={{
                backgroundColor: { xs: '#0E204E', lg: 'transparent' },
                display: 'flex',
                justifyContent: 'center',
                minHeight: '100vh',
                mt:'10%'
                // height: '100vh',
                // mt: {xs:'150vh' , lg:'0'}
            }}>
                <Box
                    sx={{
                        backgroundColor: '',
                        color: { xs: 'white', lg: '#0E204E' },
                        display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '30px', alignItems: { xs: 'center', lg: 'start' }, flexWrap: 'nowrap'
                    }}>
                    <Typography
                        fontFamily={'Playfair Display'}
                        fontWeight={700}
                        fontSize={60}
                        sx={{
                            color: { xs: 'white', lg: '#0E204E' },
                            fontSize:{xs : '24px' , lg:'60px'}
                        }}
                    >Become an Agent
                    </Typography>
                    <Typography
                        fontFamily={'Manrope'}
                        fontWeight={400}
                        fontSize={20}
                        lineHeight={'150%'}
                        sx={{
                            color: { xs: 'white', lg: '#0E204E' },
                            width: '417px',
                            textAlign: { xs: 'center', lg: 'start' }
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
                            width: {xs:'103px' , lg:'293px'},
                            height: {xs:'40px' , lg:'62px'}
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
                <Box>
                    <Box sx={{ backgroundColor: '', display: { xs: 'none', lg: 'flex' }, alignItems: 'center', justifyContent: '', position: 'relative', height: '100%' }}>
                        <Box
                            width={412}
                            height={358}
                            sx={{
                                position: 'relative',
                                // zIndex : 0,
                                transform: 'translate(60%, 0%)',
                                backgroundColor: '#0E204E'
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