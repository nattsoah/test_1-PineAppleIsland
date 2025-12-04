'use client'
import ResponsiveAppBar from "./component/navbar";
import About from "./content/about";
import { Box, Container, Grid, Stack } from "@mui/material";
import AboutPineApple from "./content/about-pineapple";
import WhyChoose from "./content/why-choose";
import WhatPineApple from "./content/what-pineapple";
import Galleries from "./content/galleries";
import Features from "./content/features";
import BecomeAgent from "./content/become-agent";
import InTouch from "./content/intouch";
import Footer from "./component/footer";

export default function Home() {
  return (
    <Container
      maxWidth={false}
      sx={{
        maxWidth: "1920px",
        pr: "0px !important",
        pl: "0px !important",
        // pt: { xs: 6, md: 8 },
        // pb: { xs: 6, md: 8 },
        backgroundColor: 'white'
      }}
    >
      <Stack >
        <ResponsiveAppBar />
        <About/>
        <AboutPineApple />
        <WhyChoose />
        <WhatPineApple />
        <Galleries />
        <Features />
        <BecomeAgent />
        <InTouch />
        <Footer />
      </Stack>
    </Container>
  );
}
