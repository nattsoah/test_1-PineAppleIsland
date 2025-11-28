import { Box, Checkbox, Container, Grid, ImageList, ImageListItem, Paper, Table, TableBody, TableCell, TableContainer, TableRow, Typography } from '@mui/material'
import Image from 'next/image'
import type { CSSProperties } from 'react'
import image4 from '../assets/image4.jpg'
import { DataGrid } from '@mui/x-data-grid';
import { CheckBox } from '@mui/icons-material';


function Features() {
    const imageStyle: CSSProperties = {
        width: '484px',
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
            <Box sx={{ backgroundColor: '', display: {xs:'none' , lg:'flex'}, justifyContent: 'center', height: '100vh', mt: '100vh' }}>
                <Box>
                    <Box sx={{ backgroundColor: '', display: 'flex', alignItems: 'center', justifyContent: '', position: 'relative', height: '100%' }}>
                        <Image
                            style={imageStyle}
                            src={image4}
                            alt='box1'
                        />
                        <Box
                            width={412}
                            height={358}
                            sx={{
                                position: 'relative',
                                // zIndex : 0,
                                transform: 'translate(-60%, 0%)',
                                backgroundColor: '#0E204E'
                            }}
                        >
                        </Box>
                    </Box>
                </Box>
                <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '30px', alignItems: 'center' }}>
                    <Typography
                        fontFamily={'Playfair Display'}
                        fontWeight={700}
                        fontSize={60}
                        sx={{ color: '#0E204E' }}
                    >Amazing Features
                    </Typography>
                    <Box sx={{ backgroundColor: '', maxWidth: '543px', width: '100%', }}>
                        <TableContainer>
                            <Table>
                                <TableBody>
                                    {data.map((item, index) => (
                                        <TableRow key={index}>
                                            <TableCell
                                                sx={{
                                                    display: 'flex',
                                                    justifyContent: 'space-around',
                                                    alignItems: 'center',
                                                    backgroundColor: index % 2 == 0 ? '#0E3F3333' : 'transprant',
                                                    border: 0,
                                                    p:'1px',
                                                    m:'6px'
                                                }}>

                                                <Typography
                                                    fontFamily={'Gotham'}
                                                    fontWeight={400}
                                                    fontSize={20}
                                                    sx={{ color: '#030033' }}
                                                >
                                                    {item}
                                                </Typography>
                                                <Checkbox defaultChecked  sx={{color:'#0E204E' , '&.Mui-checked':{ color:'#0E204E'}}} />
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </Box>
                </Box>
            </Box>
        </>
    )
}

export default Features