'use client'
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import { Grid, InputAdornment, TextField } from '@mui/material';


function Footer() {
    const menu = ['About Us', 'What we do', 'Project']

    return (
        <Container maxWidth={false}
            sx={{
                mt: '200px',
                position: 'relative',
                display: 'flex', gap: '150px',
                textAlign: 'left',
                justifyContent: 'center',
                alignItems: 'center',
                height: '396px',
                backgroundColor: '#0E204E',
                clipPath: { xs: 'polygon(0,0)', lg: 'polygon(100% 20%, 100% 100%, 0 100%, 0 25%, 12% 3%)' },
            }}>

            <Box
                width={'20%'}
                sx={{
                    display: { xs: 'none', lg: 'flex' },
                    flexDirection: 'column', gap: '20px', color: 'white'
                }}>
                <Typography
                    fontFamily={'Manrope'}
                    fontSize={40}
                    letterSpacing={0}
                    fontWeight={500}
                >
                    Banana <br />
                    Island
                </Typography>
                <Typography
                    fontFamily={'Manrope'}
                    fontSize={20}
                    lineHeight={'180%'}
                    fontWeight={400}
                >
                    a community that gives you a taste of happiness, a place you’ll love to live and an opportunity to build a home.
                </Typography>
            </Box>

            <Box
                width={'20%'}
                sx={{
                    display: { xs: 'none', lg: 'flex' },
                    flexDirection: 'column',
                    gap: '20px', color: 'white'
                }}>
                <Typography
                    fontFamily={'Playfair Display'}
                    fontSize={24}
                    fontWeight={400}
                >
                    Follow up
                </Typography>
                <Typography
                    fontFamily={'Manrope'}
                    fontSize={20}
                    fontWeight={400}
                    lineHeight={'150%'}
                >
                    Keep up with our newsletter to get
                    updates about projects and offers
                </Typography>
                <TextField
                    fullWidth
                    type='email'
                    variant='outlined'
                    label='Email'
                    sx={{
                        backgroundColor: 'white',
                        [`& fieldset`]: {
                            borderRadius: 0,
                        },
                    }}
                    InputProps={{
                        endAdornment: (
                            <InputAdornment position='end'>
                                <Button variant='text' sx={{ color: '#0E204E', '&:hover': { backgroundColor: 'transparent' } }}>Subscribe</Button>
                            </InputAdornment>
                        )
                    }}
                />

            </Box>

            {/* responsive */}
            <Box
                sx={{
                    display: { xs: 'flex', lg: 'none' },
                    flexDirection: 'column',
                    gap: '20px',
                    color: 'white',
                    textAlign: 'center',
                }}
            >
                <Typography
                    fontFamily={'Lato'}
                    fontWeight={500}
                    sx={{
                        fontSize: { xs: '18px', lg: '30px' }
                    }}
                >
                    Pineapple Island
                </Typography>
                <Typography
                    fontFamily={'Gotham'}
                    fontWeight={300}
                    sx={{
                        fontSize: { xs: '18px', lg: '24px' }
                    }}
                >
                    ©️
                    Copyright
                    2021
                    Glowdsgn
                    All Rights Reserved
                </Typography>
            </Box>
        </Container>
    );
}
export default Footer;
