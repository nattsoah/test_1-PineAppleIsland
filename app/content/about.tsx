import { Box, Button, Grid, ImageList, ImageListItem, Typography } from '@mui/material'
import Image from 'next/image'
import type { CSSProperties } from 'react'
import image from '../assets/image.png'
import image1 from '../assets/image1.png'

function About() {
  const imageStyle: CSSProperties = {
    // maxWidth: '1368px',
    // maxHeight: '717px',
    width: '1368px',
    height: '717px',
    position: 'relative',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
  }

  return (
    <>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: { xs: 'center', lg: 'flex-end' },
          margin: { xs: '30px', lg: '0px' },
        }}>
        {/* รูปภาพ */}
        <Box
          sx={{
            filter: { xs: 'brightness(0.6)', lg: 'brightness(1)' },
            maxWidth: '1368px',
            maxHeight: '717px',
          }}>
          <Image
            style={imageStyle}
            src={image}
            alt="Description"
          />
        </Box>

        {/* ข้อความ */}
        <Box
          maxWidth={786}
          maxHeight={496}
          bgcolor={{ xs: 'transparent', lg: '#0E204E' }}
          padding={'80px'}
          margin={{ sm: '30px', lg: '0px' }}
          sx={{
            justifySelf: 'auto',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'absolute',
            left: { lg: '2%' },
            gap: { xs: '20px', lg: '0px' },
          }}
        >
          <Typography
            fontFamily={'Playfair Display'}
            fontWeight={700}
            color='white'
            fontSize={{ xs: '250%', md: '300%', lg: '400%' }}
          >
            Pineapple Island:
            GenZ and Millenial
            Abode
          </Typography>
          <Typography
            fontFamily={'Manrope'}
            fontWeight={400}
            fontSize={20}
            noWrap={false}
            color='white'
            sx={{
              textAlign: { sm: 'center', lg: 'start' },
              wordBreak: 'break-word'
            }}>
            a community that gives you a taste of happiness, a place you’ll love to live and an opportunity to build a home.
          </Typography>
          {/* ปุ่ม responsive */}
          <Box
            width={'137px'}
            height={'40px'}
            sx={{
              display: { xs: 'flex', lg: 'none' },
            }}
          >
            <Button
              sx={{
                borderRadius: '5px',
                backgroundColor: '#ffff',
                color: 'white',
                // marginRight: '10px',
                width: '100%',
                height: '100%',
              }}
            >
              <Typography
                fontFamily={'Lato'}
                fontWeight={500}
                fontSize={16}
                sx={{ color: '#0E204E' }}
              >
                Get in Touch
              </Typography>
            </Button>
          </ Box>
        </Box>
      </Box>
    </>
  )
}

export default About