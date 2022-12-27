import React from 'react';
import { Box, Stack } from '@mui/material'; 
import { Typography } from '@mui/material'; //typography is just an element like <p> tag with additional styles

const HeroBanner = () => {
  return (
  <Box sx={{
    mt: { lg: '212px', xs: '70xpx'},
    ml: { sm: '50px'}
  }} position="relative" p="20px">
        <Typography color="#FF2625" fontWeight="600" fontSize="26px">
          Fitness Club
        </Typography>
        <Typography>
          Sweat, Smile <br/> Repeat!
        </Typography>
        <Typography>
          Check out the Most Effective Exercises
        </Typography>
  </Box>
  )
}

export default HeroBanner
