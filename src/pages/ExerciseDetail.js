import React from 'react'
import { useState, useEffect } from 'react';
import {useParams} from 'react-router-dom'
import { Box } from '@mui/material';
import { exerciseOptions, fetchData } from '../utils/fetchData';
import Detail from '../components/Detail';
import ExerciseVideos from '../components/ExerciseCard';
import SimilarExercises from '../components/SimilarExercises';

const ExerciseDetail = () => {
  const [exerciseDetail, setExerciseDetail] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const fetchExercisesData = async() => {

    }

    fetchExercisesData();
  }, [id]);
  return (
    <Box>
      <Detail exerciseDetail={}/>
      <ExerciseVideos />
      <SimilarExercises/>
    </Box>
  )
}
export default ExerciseDetail
