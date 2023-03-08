import React from 'react'
import { useState, useEffect } from 'react';
import {useParams} from 'react-router-dom'
import { Box } from '@mui/material';
import { exerciseOptions, fetchData, youtubeOptions } from '../utils/fetchData';
import Detail from '../components/Detail';
import ExerciseVideos from '../components/ExerciseCard';
import SimilarExercises from '../components/SimilarExercises';

const ExerciseDetail = () => {
  const [exerciseDetail, setExerciseDetail] = useState({});
  const [exerciseVideos, setExerciseVideos] = useState([]); //Adding the state now that we now have the data for it.
  const { id } = useParams();

  useEffect(() => {
    const fetchExercisesData = async() => {
      const exerciseDbUrl = 'https://exercisedb.p.rapidapi.com';
      
      const youtubeSearchUrl = 'https://youtube-search-and-download.p.rapidapi.com';
      
      const exerciseDetailData = await fetchData(`${exerciseDbUrl}/exercises/exercise/${id}`, exerciseOptions); //Template literal
      setExerciseDetail(exerciseDetailData);

      const exerciseVideosData = await fetchData(`${youtubeSearchUrl}/search?query=${exerciseDetailData.name}`, youtubeOptions);
      //This is going to give us videos only about a specific exercise that we currently looking the data for. The youtubeOptions parameter allows us make this call.
      setExerciseVideos(exerciseVideosData.contents);
    }
    fetchExercisesData();
  }, [id]);
  return (
    <Box>
      <Detail exerciseDetail={exerciseDetail}/>
      <ExerciseVideos exerciseVideos={exerciseVideos} name={exerciseDetail.name}
      //sending that data over to our exerciseVideos component
      /> 
      <SimilarExercises/>
    </Box>
  )
}
export default ExerciseDetail
