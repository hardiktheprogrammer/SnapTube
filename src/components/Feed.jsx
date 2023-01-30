import React, { components } from 'react'
import { useEffect, useState} from '@mui/material'
import { Box, Stack, Typography } from '@mui/material'
import { Videos , Sidebar} from './';
import {fetch} from './util/fetch';
const Feed = () => {  


  useEffect(() =>{
    fetch('search?part=snippet&q=${selectedCategory}');

  },[selectedCategory]);
  return (      
    <div>
      <Stack
        sx={{
          flexDirection: { sx: 'column', md: 'row' },
        }}
      >
        <Box
          sx={{
            height: { sx: 'auto', md: '100vh' },
            borderRight: ' 1px  solid #3d3d3d',
            px: { sx: 0, md: 2 },
          }}
        >
          <Sidebar 
          
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}/>
          <Typography 
            className="copyright"
            variant="body2"
            sx={{ mt: 1, color: '#fff' }}
          >
            Copyright 2022 © All Rights Reserved | Developed  by Hardik 
          </Typography>
        </Box>
        <Box p={1} sx={{overflowY:'auto', flex:2 }}> 

        <Typography  variant = "h4"
    fontWeight= 'bold'md = {2} sx={{color:'#ec1608'}}> New 

           <span style={{color:'#ec1608'}}>
            Videos
           </span>

          </Typography>
          <Videos videos={[]}/>
        </Box>
      </Stack>
    </div>
  )
}

export default Feed
