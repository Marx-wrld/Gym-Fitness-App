import React from 'react';
import { Box, Stack, Typography } from '@mui/material';


const ExerciseVideos = ({ exerciseVideos, name }) => {
  
  if (exerciseVideos.length) return 'loading...';
  
  return (
    <Box 
    sx={{
      marginTop: { lg: '200px', xs: '20px'}
    }}
    p="20px">
      <Typography variant="h3" mb="33px">
        Watch<span style={{color: '#ff2625', textTransform: 'capitalize'}}>{name}</span> of exercise videos
      </Typography>
      <Stack justifyContent="flex-start" flexWrap="wrap" alignItems="center"
      sx={{
        flexDirection: {
          lg: 'row'
        },
        gap: {
          lg: '110px',
          xs: '0'
        }
      }}>
      {/*The question mark allows us to make sure the exerciseVideos exists. The slice allows us to decide o how many we want to take (0,3) means we are going to take three videos. We then map over it to get each item or a video*/}
        {exerciseVideos?.slice(0, 3).map((item, index) => (
          <a 
          /*We use an anchor tag because each of our videos is going to be a link tom check it out on youtube*/
            key={index}
            className="exercise-video"
            href={`https://www.youtube.com/watch?v=${item.video.videoId}`} 
            target="_blank" /*Allows us open it in a new tab*/
            rel="noreferrer" /*Recommended when using _blank*/
            >
              <img src={item.video.thumbnails[0].url} alt={item.video.title} /> 
              {/*Getting this data frm rapidapi*/}
              <Box>
                <Typography variant="h5" color="#000">
                  {item.video.title} 
                </Typography>
                <Typography variant="h6" color="#000">
                  {item.video.channelName} 
                </Typography>
              </Box>
          </a>
        ))}
      </Stack>
    </Box>
  )
}

export default ExerciseVideos
