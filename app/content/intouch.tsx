import { Box, Button, Checkbox, Container, Grid, ImageList, ImageListItem, Paper, Table, TableBody, TableCell, TableContainer, TableRow, TextField, Typography } from '@mui/material'
import Image from 'next/image'
import type { CSSProperties } from 'react'
import image5 from '../assets/image5.png'
import { DataGrid } from '@mui/x-data-grid';
import { CheckBox } from '@mui/icons-material';


function InTouch() {
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
                backgroundColor: '',
                display: 'flex',
                justifyContent: 'center',
                // height: '100vh',
                // mt: '50px',
                minHeight: '100vh',
                margin: { xs: '30px', lg: '0px' },
                pt:'10%'
            }}>
                <Box sx={{ backgroundColor: '', display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '30px', alignItems: 'center', flexWrap: 'nowrap' }}>
                    <Typography
                        fontFamily={'Playfair Display'}
                        fontWeight={700}
                        sx={{
                            color: '#0E204E',
                            fontSize: { xs: '34px', lg: '60px' }
                        }}
                    >Stay In Touch
                    </Typography>
                    <Typography
                        fontFamily={'Manrope'}
                        fontWeight={400}
                        fontSize={20}
                        lineHeight={'150%'}
                        sx={{
                            color: '#0E204E',
                            display: { xs: 'none', lg: 'block' }
                        }}
                    >
                        Are you curious about Pineapple Island? Send a message
                    </Typography>
                    <Typography
                        fontFamily={'Manrope'}
                        fontWeight={400}
                        fontSize={16}
                        lineHeight={'150%'}
                        sx={{
                            color: '#0E204E',
                            display: { xs: 'block', lg: 'none' }
                        }}
                    >
                        If you are interested in finding out more about The Discovery Village, leave a message
                    </Typography>

                    <Box sx={{
                        display: { xs: 'none', lg: 'flex' },
                        flexDirection: 'column',
                        gap: '30px',
                        maxWidth: '909px',
                        width: '909px',
                    }}>
                        <TextField
                            fullWidth
                            variant='outlined'
                            label='Name'
                            sx={{
                                [`& fieldset`]: {
                                    borderRadius: 0,
                                    borderBlockColor: '#2D2B2B',
                                    border: '1px solid'
                                },
                            }}
                        />

                        <TextField
                            fullWidth
                            variant='outlined'
                            label='Phone No'
                            sx={{
                                [`& fieldset`]: {
                                    borderRadius: 0,
                                    borderBlockColor: '#2D2B2B',
                                    border: '1px solid'
                                },
                            }}
                        />

                        <TextField
                            fullWidth
                            type='email'
                            variant='outlined'
                            label='Email'
                            sx={{
                                [`& fieldset`]: {
                                    borderRadius: 0,
                                    borderBlockColor: '#2D2B2B',
                                    border: '1px solid'
                                },
                            }}
                        />

                        <TextField
                            fullWidth
                            variant='outlined'
                            label='Message'
                            sx={{
                                '& .MuiInputBase-root': {
                                    height: '302px',
                                    alignItems: "start"

                                },
                                [`& fieldset`]: {
                                    borderRadius: 0,
                                    borderBlockColor: '#2D2B2B',
                                    border: '1px solid'
                                },
                            }}
                        />


                    </Box>

                    {/* responsive */}
                    <Form />

                    <Button
                        sx={{
                            borderRadius: { xs: '5px', lg: '0px' },
                            backgroundColor: '#0E204E',
                            color: 'white',
                            width: '141px',
                            height: '48px'
                        }}
                    >
                        <Typography
                            fontFamily={'Manrope'}
                            fontWeight={400}
                            fontSize={18}
                        >
                            Send
                        </Typography>
                    </Button>
                </Box>
            </Box>
        </>
    )
}

export default InTouch

const Form = (): React.ReactElement => {
    return <>
        <Box sx={{
            display: { xs: 'flex', lg: 'none' },
            flexDirection: 'column',
            gap: '30px',
            maxWidth: '909px',
            width: '100%',
        }}>
            <TextField
                fullWidth
                variant='standard'
                label='Name'
                sx={{
                    [`& fieldset`]: {
                        borderRadius: 0,
                        borderBlockColor: '#2D2B2B',
                        border: '1px solid'
                    },
                }}
            />

            <TextField
                fullWidth
                variant='standard'
                label='Phone No'
                sx={{
                    [`& fieldset`]: {
                        borderRadius: 0,
                        borderBlockColor: '#2D2B2B',
                        border: '1px solid'
                    },
                }}
            />

            <TextField
                fullWidth
                type='email'
                variant='standard'
                label='Email'
                sx={{
                    [`& fieldset`]: {
                        borderRadius: 0,
                        borderBlockColor: '#2D2B2B',
                        border: '1px solid'
                    },
                }}
            />

            <TextField
                fullWidth
                variant='outlined'
                label='Message'
                sx={{
                    '& .MuiInputBase-root': {
                        height: '302px',
                        alignItems: "start"

                    },
                    [`& fieldset`]: {
                        borderRadius: 0,
                        borderBlockColor: '#2D2B2B',
                        border: '1px solid'
                    },
                }}
            />
        </Box>
    </>
}