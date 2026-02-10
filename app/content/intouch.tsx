import { Box, Button, Checkbox, Container, Grid, ImageList, ImageListItem, Paper, Table, TableBody, TableCell, TableContainer, TableRow, TextField, Typography } from '@mui/material'
import Image from 'next/image'
import type { CSSProperties } from 'react'
import image5 from '../assets/image5.png'
import { DataGrid } from '@mui/x-data-grid';
import { CheckBox } from '@mui/icons-material';


function InTouch() {
    return (
        <>
            <Box
                margin={{ xs: '30px', lg: '0px' }}
                paddingTop={'100px'}
                minHeight={'auto'}
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                }}>
                <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '30px', alignItems: 'center', flexWrap: 'nowrap' }}>
                    <Typography
                        fontFamily={'Playfair Display'}
                        fontWeight={700}
                        color='#0E204E'
                        fontSize={{ xs: '34px', lg: '60px' }}
                    >Stay In Touch
                    </Typography>
                    <Typography
                        fontFamily={'Manrope'}
                        fontWeight={400}
                        fontSize={20}
                        lineHeight={'150%'}
                        color='#0E204E'
                        sx={{
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
                        color='#0E204E'
                        sx={{
                            display: { xs: 'block', lg: 'none' }
                        }}
                    >
                        If you are interested in finding out more about The Discovery Village, leave a message
                    </Typography>

                    <Box
                        maxWidth={'909px'}
                        width={'909px'}
                        sx={{
                            display: { xs: 'none', lg: 'flex' },
                            flexDirection: 'column',
                            gap: '30px',
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
        <Box
            id="intouch"
            sx={{
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