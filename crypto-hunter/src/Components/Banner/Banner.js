import React from 'react'
import Carousel from './Carousel';
import img from '../../images/banner2.jpg';
import { Container, Typography } from "@mui/material";


const Banner = (trending) => {
  return (
    <div
    style={{
      backgroundImage: `url(${img})`,   
    }}
    >
      <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start", // Align content to the top
        alignItems: "center",
        height: 400,
        paddingTop: "50px", // Add top padding for spacing
      }}
      >
        <div
         sx={{
          display: "flex",
          height: "40%",
          flexDirection: "column",
          justifyContent: "center",
          textAlign: "center"
        }}
        >
           <Typography
            variant="h2"
            style={{
              fontWeight: "bold",
              marginBottom: 15,
              fontFamily: "Montserrat",
            }}
          >
            Crypto Hunter
          </Typography>
          <Typography
              variant="subtitle2"
              style={{
                color: "darkgrey",
                textTransform: "capitalize",
                fontFamily: "Montserrat",
              }}
          >
            Get all the Info regarding your favorite Crypto Currency
          </Typography>
        </div>
     <Carousel 
        sx={{
          height: '50%',
          display: 'flex',
          alignItems: 'center',
        }}/>
      </Container>
    </div>
  );
};

export default Banner;
