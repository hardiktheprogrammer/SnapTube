// import React, { useState, useEffect } from 'react';
import React, { components } from 'react'
import Stack from '@mui/material/Stack'
import { Link } from 'react-router-dom'
import { logo } from '../utils/constants'
import SearchBar from './SearchBar'
import { Typography } from '@mui/material'

const Navbar = () => (
  <Stack
    direction="row"
    alignItems="center"
    p={2}
    sx={{
      position: 'sticky',
      background: '#000',
      top: 0,
      left: 0,
      justifyContent: 'space-between',
    }}
  >
    
    {/*         <link to="/" style={{ display: 'flex', alignItems: 'center' }}>
     */}{' '}
    <img src={logo} alt="logo" height={45} />

      <SearchBar /> 
  
    
  </Stack>
  
)

export default Navbar
