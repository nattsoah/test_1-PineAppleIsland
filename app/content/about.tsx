import { Box, Button, Grid, ImageList, ImageListItem, Typography } from '@mui/material'
import Image from 'next/image'
import type { CSSProperties } from 'react'
import image from '../assets/image.png'
import image1 from '../assets/image1.png'

function About() {
  const imageStyle: CSSProperties = {
    // right: '0px',
    width: '1368px',
    height: '717px',
    zIndex: 'modal',
    // position: 'absolute',
    position: 'relative',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    // filter: 'brightness(0.6)'
  }

  return (
    <>
      <Box sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: { xs: 'center', lg: 'flex-end' },
        margin: { sm: '30px', lg: '0px' },
      }}>
        {/* รูปภาพ */}
        <Box sx={{ filter: {xs:'brightness(0.6)' , lg:'brightness(1)'} }}>
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
          sx={{
            justifySelf: 'auto',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            padding: '80px',
            justifyContent: 'center',
            position: 'absolute',
            left: { lg: '5%' },
            gap: { xs: '20px', lg: '0px' },
            backgroundColor: { xs: '', lg: '#0E204E' },
            margin: { sm: '30px', lg: '0px' }
          }}
        >
          <Typography
            fontFamily={'Playfair Display'}
            fontWeight={700}
            sx={{
              color: 'white',
              fontSize: { xs: '250%', md: '300%', lg: '400%' }
            }}>
            Pineapple Island:
            GenZ and Millenial
            Abode
          </Typography>
          <Typography
            fontFamily={'Manrope'}
            fontWeight={400}
            fontSize={20}
            noWrap={false}
            sx={{
              color: 'white',
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

      {/* <Box
        sx={{
          // zIndex: 'modal',
          // position: 'absolute',
          // width: '100%',
          // height: 'auto',
          // top: "168px",
          // right:'0px',
          // backgroundRepeat: 'no-repeat',
          // backgroundPosition: 'center',
          // backgroundSize: 'cover',
          // backgroundColor: 'red'
        }}>
        <Box
          width={786}
          height={496}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            padding: '80px',
            justifyContent: 'center',
            position: 'absolute',
            top: '293px',
            left: '100px',
            right: '100px',
            zIndex: 'tooltip',
            backgroundColor: '#0E204E'
          }}
        >
          <Typography
            fontFamily={'Playfair Display'}
            fontWeight={700}
            fontSize={64}
            sx={{ color: 'white' }}>
            Pineapple Island:
            GenZ and Millenial
            Abode
          </Typography>
          <Typography
            fontFamily={'Manrope'}
            fontWeight={400}
            fontSize={20}
            sx={{ color: 'white' }}>
            a community that gives you a taste of happiness, a place you’ll love to live and an opportunity to build a home.
          </Typography>
        </Box>
        <Image
          style={imageStyle}
          src={image}
          alt="Description"
        />
      </Box> */}
    </>
  )
}

export default About