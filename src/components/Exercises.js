import {React, useEffect, useState} from 'react'
import Pagination from '@mui/material/Pagination';
import { Box, Stack, Typography } from '@mui/material';
import { exerciseOptions, fetchData } from '../utils/fetchData';

const Exercises = ({ exercises, setExercises, bodyPart }) => {
  return (
    <Box id="exercises"
      sx={{
        mt: { lg: '110px' }
      }}
      mt="50px" //marginTop
      p="20px" 
      > 
      <Typography variant="h3" mb="46px">
        Showing Results
      </Typography>
      <Stack direction="row" sx={{ gap: { lg: '110px', xs: '50px'}}} flexWrap="wrap" justifyContent="center">
      {/*we can map over all of our exercises inside here*/}
      {exercises.map((exercise, index) => (
        <p>{exercises.name}</p>
      ))}
      </Stack>
    </Box>
  )
}

export default Exercises