import {React, useEffect, useState} from 'react';
import Pagination from '@mui/material/Pagination';
import { Box, Stack, Typography } from '@mui/material';
import { exerciseOptions, fetchData } from '../utils/fetchData';
import { ExerciseCard } from './ExerciseCard'

const Exercises = ({ exercises, setExercises, bodyPart }) => {
  return (
    <Box id="exercises" //enables us to scroll to the exercises section
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
        <ExerciseCard key={index} exercise={exercise}/>
      ))}
      </Stack>
    </Box>
  )
}

export default Exercises