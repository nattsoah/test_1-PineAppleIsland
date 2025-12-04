import { Box, Container, ImageList, ImageListItem, Typography } from '@mui/material'
import Image from 'next/image'
import type { CSSProperties } from 'react'
import image from '../assets/image1.png'

function AboutPineApple() {
  const imageStyle: CSSProperties = {
    height: '620px',
    position: 'relative',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
  }

  return (
    <>
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', lg: 'row' },
          justifyContent: 'center',
          gap: '60px',
          alignItems: 'center',
          margin: { xs: '30px', lg: '0px' },
          minHeight: '100vh',
        }}>
        {/* หัวข้อ */}
        <Typography
          fontFamily={'Playfair Display'}
          fontWeight={700}
          minWidth={317}
          sx={{
            color: '#0E204E',
            fontSize: { xs: '24px', lg: '60px' },
            textAlign: { xs: 'center', lg: 'start' },
            margin: {xs:'0px' , lg:'30px'}
          }}
        >
          About <br /> Pineapple Island
        </Typography>

        {/* กล่อง */}
        <Box sx={{
          display: 'flex',
          position: 'relative',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
          <Box sx={{ filter: { xs: 'brightness(0.6)', lg: 'brightness(1)' } }}>
            <Image
              style={imageStyle}
              src={image}
              width={728}
              height={620}
              alt='house'
            />
          </Box>

          {/* ข้อความ */}
          <Box
            width={433}
            height={620}
            sx={{
              color: 'white',
              backgroundColor: { xs: 'transparent', lg: '#0E204E' },
              padding: {xs:'50px' ,md:'10px' , lg:'50px'},
              display: 'flex',
              position: { xs: 'absolute', lg: 'relative' },
              alignItems: 'center',
            }}>
            <Typography
              fontFamily={'Manrope'}
              fontWeight={400}
              lineHeight={'160%'}
              sx={{
                fontSize: { xs: '16px', lg: '20px' },
              }}
            >
              Pineapple Island is the most sought-after  community in Ibadan that values and puts the needs of their clients first.
              It is a territory with loft complexes that creates a country life and homely feeling that is integrated with industrial development.
              A perfect, professional built  abode that gives you the true taste of beauty and happiness.
            </Typography>
          </Box>
        </Box>
      </Box>

    </>
  )
}

export default AboutPineApple