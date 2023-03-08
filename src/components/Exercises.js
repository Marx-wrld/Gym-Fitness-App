import {React, useEffect, useState} from 'react';
import Pagination from '@mui/material/Pagination';
import { Box, Stack, Typography } from '@mui/material';
import { exerciseOptions, fetchData } from '../utils/fetchData';
import { ExerciseCard } from './ExerciseCard';

const Exercises = ({ exercises, setExercises, bodyPart }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const exercisesPerPage = 9;

  //we are now able to see all the exercises instead we want to calculate and see the first 9 then the next 9 and so forth.
  //creating the variables for this.
  const indexOfLastExercise = currentPage * exercisesPerPage;

  //we also need to get the index of the first exercise
  const indexOfFirstExercise = indexOfLastExercise - exercisesPerPage;

  //we also need to get the current exercises
  const currentExercises = exercises.slice(indexOfFirstExercise, indexOfLastExercise);

  const paginate = (e, value) => {
    //so what can we then do, with the event and the value, since material UI passes them behind the scenes
    setCurrentPage(value);

    window.scrollTo({ top: 1800, behavior: 'smooth'})
    //Allows us to scroll to the top of the page
  }
  
  //setExercises is unused, so we need to create a new useEffect.

  useEffect(() => { //A callback function
    const fetchExercisesData = async() => { //async function returns promises and wraps non-promises in it. ** A promise is a value that will be resolved in the future. ** using aync with await means that it will pause the execution of the function and wait for the promise to be resolved.
      let exercisesData = [];

      if (bodyPart === 'all') {
        exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises', exerciseOptions); 
      }
      else{
        exercisesData = await fetchData(`https://exercisedb.p.rapidapi.com/bodyPart/${bodyPart}`, exerciseOptions); //switching it to a template string/literal - allows for multiline strings and string-interpolation with embedded expressions
      }

      setExercises(exercisesData);

    }
  }, [bodyPart]); //Adding a dependency bodyPart which we recall anytime the bodyPart changes.

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

      <Stack mt="100px" alignItems="center">
        {exercises.length > 9 && (
          <Pagination 
            color="standard"
            shape="rounded"
            defaultPage={1}
            count={Math.ceil(exercises.length / exercisesPerPage)}
            //.ceil gives us the highest number of exercises then we will divide it by 9 because we have 9 exercises per page. Which will then end up being 25 pages
            page={currentPage} //Here when we specify a page that we are currently on, this is going to be a state of a page.
            onChange={paginate}
            //Pagination passes the event and also the value of the currentPage that we click on. This is done behind the scenes by material UI
            size="large"
          />
        )}
      </Stack>
    </Box>
  )
}

export default Exercises