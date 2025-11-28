'use client'
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuIcon from '@mui/icons-material/Menu';
import { IconButton, Menu, MenuItem } from '@mui/material';

function ResponsiveAppBar() {
    const menu = ['About Us', 'What we do', 'Project']
    const [open, setOpen] = React.useState<null | HTMLElement>(null);

    const toggleOpen = (event: React.MouseEvent<HTMLElement>) => {
        setOpen(event.currentTarget)
    };
    const toggleClose = () => {
        setOpen(null)
    };

    return (

        <AppBar position="static" color='transparent' elevation={0}>
            {/* margin: '50px 0px 30px 0px' */}
            <Container maxWidth={false} sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', margin: '30px 0px' }}>
                <Box width={148} height={86} >
                    <Typography
                        fontFamily={'Playfair Display'}
                        fontSize={32}
                        letterSpacing={0}
                        fontWeight={700}
                        variant="h1"
                        component="h2"
                        sx={{ color: '#0E204E' }}
                    >
                        Pineapple
                        Island
                    </Typography>

                </Box>
                {/* menu desktop */}
                <Box sx={{
                    display: { xs: 'none', lg: 'flex' },
                    gap: '80px',
                    ":hover": { cursor: 'pointer' }
                }}>
                    {menu.map((menu) => (
                        <Typography
                            key={menu}
                            fontFamily={'Manrope'}
                            fontWeight={400}
                            fontSize={20}
                            sx={{
                                color: '#232323',
                            }}>
                            {menu}
                        </Typography>
                    ))}

                </Box>

                {/* ปุ่ม responsive menu */}
                <Box sx={{
                    display: { md: 'flex', lg: 'none' },
                    gap: '80px',
                    ":hover": { cursor: 'pointer' }
                }}>
                    <IconButton
                        aria-haspopup="true"
                        onClick={toggleOpen}
                        sx={{ color: '#232323' }}
                    >
                        <MenuIcon />
                    </IconButton>

                    <Menu
                        id="menu-appbar"
                        anchorEl={open}
                        anchorOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                        }}
                        keepMounted
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                        }}
                        open={Boolean(open)}
                        onClose={toggleClose}
                    >
                        {menu.map((menu) => (
                            <MenuItem key={menu} onClick={toggleClose}>
                                <Typography fontFamily={'Manrope'} fontWeight={400} fontSize={20} sx={{ color: '#232323' }}>
                                    {menu}
                                </Typography>
                            </MenuItem>
                        ))}
                    </Menu>

                </Box>

                <Box
                    width={'188px'}
                    height={'50px'}
                    sx={{ display: { xs: 'none', lg: 'block' } }}
                >
                    <Button
                        sx={{
                            borderRadius: '0px',
                            backgroundColor: '#0E204E',
                            color: 'white',
                            marginRight: '10px',
                            width: '100%',
                            height: '100%'
                        }}
                    >
                        <Typography
                            fontFamily={'Manrope'}
                            fontWeight={400}
                            fontSize={16}
                            letterSpacing={0}
                        >
                            Get in Touch
                        </Typography>
                    </Button>
                </ Box>

            </Container>
        </AppBar>
    );
}
export default ResponsiveAppBar;
